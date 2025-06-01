# Computer Vision Flashcards Web App

A modern, interactive flashcard web app for studying Computer Vision (CITS4402) concepts. Designed for fast review, keyboard navigation, and efficient search.

## Features

- **Category Filtering:**
  - Filter flashcards by lecture/topic using the dropdown menu.
- **Ordered & Shuffled Modes:**
  - Toggle between original order and random shuffle.
  - Restart button resets to the first card in the current filter/mode.
- **Quick-Find Palette (Cmd/Ctrl+K):**
  - Instantly search and jump to any card by number or keyword.
  - Use arrow keys to navigate results, Enter to select, Escape to close.
- **Keyboard Shortcuts:**
  - <kbd>←</kbd> / <kbd>→</kbd>: Previous/Next card
  - <kbd>↑</kbd> / <kbd>↓</kbd> / <kbd>Space</kbd>: Flip card
  - <kbd>Enter</kbd>: Mark as correct
  - <kbd>Cmd/Ctrl+K</kbd>: Open quick-find palette
- **Progress Tracking:**
  - See your current position, total cards, and correct answers.
- **Responsive Design:**
  - Works on desktop and mobile devices.
- **Beautiful, Accessible UI:**
  - Fast fade animations, clear color cues, and accessible controls.

## Setup & Usage

1. **No installation or server required!**
2. Just open `Flashcards.html` in your web browser.
3. Use the on-screen controls or keyboard shortcuts to study efficiently.

## Usage Tips

- Use the category dropdown to focus on a specific lecture or topic.
- Switch between ordered and shuffled modes for varied practice.
- Press <kbd>Cmd/Ctrl+K</kbd> to quickly search and jump to any card.
- All features work offline—no internet required after download.

## Generating New Flashcards

Flashcards are stored as a JavaScript array in `Flashcards.html`.
To generate new cards with ChatGPT:

1. Use the following prompt:
   ```
   Generate [number] flashcards for the uploaded lectures
   The flashcards should be in the following format:
   {
       "category": "Lecture2(ImageBasics)",
       "question": "What is a greyscale image?",
       "answer": "A greyscale image is a 2D matrix where each element corresponds to a pixel. Each pixel holds an 8-bit gray-level value ranging from 0 (black) to 255 (white). The matrix indices (i, j) map to the spatial location of the pixel."
   },
   For each lecture, the category should be the same.
   ```
2. Copy the generated flashcards into the `flashcards` array in `Flashcards.html`.

## Customization
- You can edit or add flashcards directly in the `flashcards` array.
- To change styles, edit the CSS in `Flashcards.html`.

---

**Enjoy fast, focused revision for Computer Vision!** 