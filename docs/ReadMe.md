# 🧵 Binary Bead Bracelet Web Encoder

Turn any word or phrase into a binary bead pattern — perfect for crafting a bracelet that encodes your secret message in zeros (▭) and ones (■)!  
This web app is a front-end translation of the original Python script `Binary-bracelet.py`, redesigned with a modern responsive UI, automatic light/dark theme, and multi-result history. ✨

---

## 🌟 Features

- 🔤 Converts each character to its ASCII code and 8‑bit binary representation
- 🟦 Bead symbols: `▭` for `0`, `■` for `1` (block per character)
- 📊 Counts total zeros and ones (beads needed per color)
- 🧩 Per-character breakdown (ASCII, Binary, Zero/One counts, bead order)
- 🧬 Accumulated results (latest on top) — keeps previous computations
- 🟢 `Compute!` button and 🔶 `Reset` button (appears after first result)
- 📋 One-click copy of structured output
- 🌓 Automatic theme (respects system light/dark preference)
- 📱 Fully responsive (mobile-friendly layout)
- 🧷 Rounded, modern component styling
- 📝 Text areas auto-resize to fit content
- 🧪 Pure front-end (no backend required, ideal for GitHub Pages)

---

## 🧠 How It Works (Algorithm)

For each character `c` in the input phrase:

1. Get ASCII code: `code = c.charCodeAt(0)`
2. Convert to 8-bit binary: `binary = code.toString(2).padStart(8, '0')`
3. Map bits: `0 → ▭`, `1 → ■`
4. Count zeros / ones in that byte
5. Aggregate bead sequence blocks per character
6. Sum total zeros and ones across phrase

Result export structure mirrors original Python output:
```
Original: HELLO
ASCII and Binary encoding:
H | ASCII: 72 | Binary: 01001000 | Zero: 6 | One: 2
  Bead order: ▭■▭▭■▭▭▭
...
NEEDED BEADS
Beads for ZERO (0 ▭): ...
Beads for ONE  (1 ■): ...
(Choose two different colors for your bracelet!)
BEAD SEQUENCE
▭■▭▭■▭▭▭ ...
(Each block shows beads for a single character, left to right.)
```

---

## 📁 File Structure

```
index.html      # Markup and structure
style.css       # Theming, layout, responsive styles
script.js       # Logic: encoding, DOM generation, clipboard, state
```

---

## 🚀 Getting Started

### 1. Local Use
Simply open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge).

### 2. Deploy on GitHub Pages
1. Commit the three files to your repository root (or a `docs/` folder).
2. Go to: Settings → Pages
3. Select branch (e.g. `main`) and root (or `docs/`).
4. Save — your site will be live at: `https://<username>.github.io/<repo>/`

---

## 🛠 Customization

| Area | How to Customize |
|------|------------------|
| Bead symbols | Edit `getBeadSymbol(bit)` in `script.js` |
| Color palette | Adjust CSS custom properties in `:root` light/dark media queries |
| Add manual theme toggle | Insert a button + toggle a `data-theme` class or override `prefers-color-scheme` |
| Max width / radius | Change `--max-width`, `--radius` in `style.css` |
| Badge style | Modify `.badge` class |
| Copy format | Edit `buildExportText()` in `script.js` |

---

## 📱 Mobile Responsiveness

- Fluid layout using `clamp()` and relative units
- Flex wrapping for action buttons
- Scrollable bead sequence with custom slim scrollbar
- Font sizes scale for compact displays

---

## 🔒 Security & Privacy

- All logic runs client-side; nothing is sent over the network
- Input is processed in-memory
- Clipboard action only writes the computed result (no external calls)

---

## ⚙️ Performance

- Lightweight, no frameworks
- DOM nodes created only when results are added
- Auto-resizing text area prevents layout jumps
- Efficient per-character loop (O(n))
