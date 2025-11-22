function getBeadSymbol(bit) {
  return bit === '0' ? '▭' : '■';
}

function encodePhrase(phrase) {
  const binaries = [];
  let total0 = 0;
  let total1 = 0;
  const beadSequence = [];
  const breakdown = [];

  for (const char of phrase) {
    const asciiCode = char.charCodeAt(0);
    const binary = asciiCode.toString(2).padStart(8, '0');
    binaries.push(binary);

    const count0 = [...binary].filter(b => b === '0').length;
    const count1 = [...binary].filter(b => b === '1').length;
    total0 += count0;
    total1 += count1;

    const beadForChar = [...binary].map(getBeadSymbol).join('');
    beadSequence.push(beadForChar);

    breakdown.push({
      printable: char === ' ' ? '[space]' : char,
      ascii: asciiCode,
      binary,
      zeros: count0,
      ones: count1,
      bead: beadForChar
    });
  }

  return {
    original: phrase,
    breakdown,
    total0,
    total1,
    beadSequence
  };
}

function buildResultBlock(data, index) {
  const block = document.createElement('article');
  block.className = 'result-block' + (index === 0 ? ' newest' : '');

  const header = document.createElement('div');
  header.className = 'result-header';

  const title = document.createElement('h2');
  title.className = 'result-title';
  title.innerHTML = `Result <span class="badge">#${index + 1}</span>`;

  const copyWrap = document.createElement('div');
  copyWrap.className = 'copy-wrapper';

  const copyBtn = document.createElement('button');
  copyBtn.type = 'button';
  copyBtn.className = 'copy-btn';
  copyBtn.textContent = 'Copy';

  copyWrap.appendChild(copyBtn);

  header.appendChild(title);
  header.appendChild(copyWrap);

  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.innerHTML = `
    <span class="meta-item">Chars: ${data.original.length}</span>
    <span class="meta-item">Beads ▭ (0): ${data.total0}</span>
    <span class="meta-item">Beads ■ (1): ${data.total1}</span>
  `;

  const seq = document.createElement('div');
  seq.className = 'sequence';
  seq.innerHTML = data.beadSequence.map(s => `<span>${s}</span>`).join(' ');

  const textArea = document.createElement('textarea');
  textArea.className = 'result-text';
  textArea.readOnly = true;
  textArea.value = buildExportText(data);
  autoResize(textArea);

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(textArea.value).then(() => {
      copyBtn.textContent = 'Copied!';
      setTimeout(() => copyBtn.textContent = 'Copy', 1600);
    }).catch(() => {
      copyBtn.textContent = 'Error';
      setTimeout(() => copyBtn.textContent = 'Copy', 1600);
    });
  });

  block.appendChild(header);
  block.appendChild(meta);
  block.appendChild(seq);
  block.appendChild(textArea);

  return block;
}

function buildExportText(data) {
  const lines = [];
  lines.push(`Original: ${data.original}`);
  lines.push('');
  lines.push('ASCII and Binary encoding:');
  for (const b of data.breakdown) {
    lines.push(`${b.printable} | ASCII: ${b.ascii} | Binary: ${b.binary} | Zero: ${b.zeros} | One: ${b.ones}`);
    lines.push(`  Bead order: ${b.bead}`);
  }
  lines.push('');
  lines.push('NEEDED BEADS');
  lines.push(`Beads for ZERO (0 ▭): ${data.total0}`);
  lines.push(`Beads for ONE  (1 ■): ${data.total1}`);
  lines.push('(Choose two different colors for your bracelet!)');
  lines.push('');
  lines.push('BEAD SEQUENCE');
  lines.push(data.beadSequence.join(' '));
  lines.push('(Each block shows beads for a single character, left to right.)');
  return lines.join('\n');
}

function autoResize(textArea) {
  textArea.style.height = 'auto';
  textArea.style.height = textArea.scrollHeight + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('encoderForm');
  const phraseInput = document.getElementById('phrase');
  const resultsContainer = document.getElementById('resultsContainer');
  const computeBtn = document.getElementById('computeBtn');
  const resetBtn = document.getElementById('resetBtn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const phrase = phraseInput.value.trim();
    if (!phrase) {
      phraseInput.focus();
      phraseInput.classList.add('shake');
      setTimeout(() => phraseInput.classList.remove('shake'), 500);
      return;
    }

    const data = encodePhrase(phrase);
    const blocks = [...resultsContainer.querySelectorAll('.result-block')];
    blocks.forEach(b => b.classList.remove('newest'));

    const newBlock = buildResultBlock(data, 0);
    // Prepend (latest first)
    resultsContainer.insertBefore(newBlock, resultsContainer.firstChild);

    // Adjust indices for badges
    const allBlocks = [...resultsContainer.querySelectorAll('.result-block')];
    allBlocks.forEach((blk, idx) => {
      const badge = blk.querySelector('.badge');
      if (badge) badge.textContent = `#${idx + 1}`;
    });

    // Show reset button after first result
    if (resetBtn.classList.contains('hidden')) {
      resetBtn.classList.remove('hidden');
    }

    phraseInput.select();
  });

  resetBtn.addEventListener('click', () => {
    resultsContainer.innerHTML = '';
    phraseInput.value = '';
    phraseInput.blur();
    resetBtn.classList.add('hidden');
  });

  // Optional: auto resize on input length (not required for single input)
  phraseInput.addEventListener('input', () => {
    phraseInput.style.width = '100%'; // keep stable
  });
});