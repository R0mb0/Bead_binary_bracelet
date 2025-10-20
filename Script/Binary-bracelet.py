import os

def clear():
    # Clears the terminal screen
    os.system('cls' if os.name == 'nt' else 'clear')

def emphasize(text):
    # Prints emphasized text
    print("\n" + "="*len(text))
    print(text)
    print("="*len(text) + "\n")

def get_bead_symbol(bit):
    # Returns a symbol for bead type (0 or 1)
    return '▭' if bit == '0' else '■'

def main():
    while True:
        clear()
        emphasize("TYPE YOUR WORD OR PHRASE (e.g. HELLO WORLD)")
        phrase = input(">>> ").strip()
        if not phrase:
            print("\nWarning! Please enter at least one character.")
            input("\nPress ENTER to try again...")
            continue

        print("\nYour input: " + phrase)
        binaries = []
        total_0 = total_1 = 0
        bead_sequence = []

        print("\n--- ASCII and Binary encoding ---")
        for char in phrase:
            ascii_code = ord(char)
            binary_code = f"{ascii_code:08b}"
            binaries.append(binary_code)
            count_0 = binary_code.count('0')
            count_1 = binary_code.count('1')
            total_0 += count_0
            total_1 += count_1
            bead_seq_for_char = ''.join(get_bead_symbol(bit) for bit in binary_code)
            bead_sequence.append(bead_seq_for_char)
            printable = char if char != ' ' else '[space]'
            print(f"  {printable} | ASCII: {ascii_code} | Binary: {binary_code} | Zero: {count_0} | One: {count_1}")
            print(f"     Bead order: {bead_seq_for_char}")

        print("\n" + "-"*40)
        emphasize("NEEDED BEADS")
        print(f"Beads for ZERO (0 ▭): {total_0}")
        print(f"Beads for ONE  (1 ■): {total_1}")
        print("(Choose two different colors for your bracelet!)")
        print("-"*40)

        emphasize("BEAD SEQUENCE")
        print("Follow this sequence to string your beads:")
        print(' '.join(bead_sequence))
        print("(Each block shows beads for a single character, from left to right.)")
        print("-"*40)

        input("\nPress ENTER to try with another word or phrase...")

if __name__ == "__main__":
    main()