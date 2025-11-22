# 💎 Bead Binary Bracelet

![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/91a42e00bd4546fbbbfb0206cb0c5395)](https://app.codacy.com/gh/R0mb0/Bead_binary_bracelet/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)


[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/R0mb0/Bead_binary_bracelet)
[![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/R0mb0/Bead_binary_bracelet)
[![MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/license/mit)


[![Donate](https://img.shields.io/badge/PayPal-Donate%20to%20Author-blue.svg)](http://paypal.me/R0mb0)

**A simple Python tool to convert any word or phrase into binary code and visualize the sequence for building a personalized bead bracelet.**

## [👉 Try to use the website of the project! 👈](https://r0mb0.github.io/Bead_binary_bracelet/)

---

## 📚 Table of Contents

- [📝 Description](#-description)
- [⚙️ How it Works](#-how-it-works)
- [💻 Installation Guide](#-installation-guide)
  - [🪟 ▶️ Windows](#windows)
  - [🍎 ▶️ MacOS](#macos)
  - [🐧 ▶️ Linux](#linux)
- [🚀 How to Run the Script](#-how-to-run-the-script)
- [🎨 How to Use](#-how-to-use)
- [📄 License](#-license)

---

## 📝 Description

This project helps you design a bead bracelet with a hidden binary message.  
You enter a word, initials, or phrase, and the program converts each character (including spaces) to its binary (ASCII) representation.  
The output shows how many beads of each type you need, and the exact sequence to string them on your bracelet, easily visualized with symbols.

---

## ⚙️ How it Works

- Converts each character to its 8-bit binary ASCII representation
- Counts the number of "0" and "1" bits (beads)
- Prints a visual sequence to guide you in assembling your bracelet

---

## 💻 Installation Guide

<details>
<summary id="windows"><strong>🪟 Windows</strong></summary>

### 1. Download and Install Python

- Go to [python.org/downloads](https://www.python.org/downloads/windows/)
- Download the latest version for Windows
- Run the installer:
  - Check the box **"Add Python to PATH"**
  - Click **Install Now**

### 2. Confirm Installation

- Open the **Command Prompt** (press `Win + R`, type `cmd`, and press Enter)
- Type:
  ```
  python --version
  ```
  You should see something like `Python 3.10.x` (the exact version may vary).

</details>

<details>
<summary id="macos"><strong>🍎 MacOS</strong></summary>

### 1. Check if Python is already installed

- Open the **Terminal** (find it with Spotlight or in Applications > Utilities)
- Type:
  ```
  python3 --version
  ```
- If you see a version (like `Python 3.10.x`), you're ready!

### 2. If not installed, use Homebrew (recommended):

- If you don't have Homebrew, install it first:
  ```
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
- Then install Python:
  ```
  brew install python
  ```

### 3. Confirm Installation

- In Terminal, type:
  ```
  python3 --version
  ```

</details>

<details>
<summary id="linux"><strong>🐧 Linux</strong></summary>

### 1. Check Python Version

- Open a terminal and type:
  ```
  python3 --version
  ```

### 2. Install Python (if needed)

- **Debian/Ubuntu:**
  ```
  sudo apt update
  sudo apt install python3
  ```

- **Fedora:**
  ```
  sudo dnf install python3
  ```

- **Arch:**
  ```
  sudo pacman -S python
  ```

### 3. Confirm Installation

- Type:
  ```
  python3 --version
  ```

</details>

---

## 🚀 How to Run the Script

1. **Download the file** [`Binary-bracelet.py`](./Binary-bracelet.py)

2. **Open a terminal** (Command Prompt on Windows, Terminal on Mac/Linux)

3. **Navigate to the folder** where you saved the script.  
   Example:
   ```
   cd path/to/your/folder
   ```

4. **Run the script:**

   - On **Windows**:
     ```
     python Binary-bracelet.py
     ```
   - On **Mac/Linux**:
     ```
     python3 Binary-bracelet.py
     ```

---

## 🎨 How to Use

- When prompted, type your initials, word, or phrase.
- The script will show:
  - Each character’s ASCII and binary code
  - How many beads of each type (for "0" and "1") you need
  - The exact bead sequence to use (in the improved version)
- Use two different colors for "0" and "1" beads to craft your bracelet!
