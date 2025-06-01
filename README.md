# Computer Vision Flashcards Web App

A modern, interactive flashcard web app for studying Computer Vision (CITS4402) concepts. Designed for fast review, keyboard navigation, efficient search, and full customization.

## Features

- **Category Filtering:**
  - Filter flashcards by lecture/topic using the dropdown menu. Dropdown is sorted by lecture number.
- **Ordered & Shuffled Modes:**
  - Toggle between original order and random shuffle.
  - Restart button resets to the first card in the current filter/mode.
- **Quick-Find Command Palette (Cmd/Ctrl+K):**
  - Instantly search and jump to any card by number or keyword.
  - Use arrow keys to navigate results, Enter to select, Escape to close.
- **Keyboard Shortcuts:**
  - <kbd>←</kbd> / <kbd>→</kbd>: Previous/Next card
  - <kbd>↑</kbd> / <kbd>↓</kbd> / <kbd>Space</kbd>: Flip card
  - <kbd>Enter</kbd>: Mark as correct
  - <kbd>Cmd/Ctrl+K</kbd>: Open quick-find palette
- **Progress Bar Navigation:**
  - Click or drag anywhere on the progress bar to instantly jump to any card.
- **Upload/Replace Flashcards:**
  - Click the upload icon to paste or upload your own flashcards in JSON format. This replaces all current cards and updates the category list.
  - Choose from multiple prompt templates for generating new flashcards (Exam-Style, Multiple Choice, Computer Vision, etc.).
- **Info/Help Modal:**
  - Click the info icon for a comprehensive guide to all features and shortcuts.
- **Selectable Answer Text:**
  - All text on flashcards (including answers) is selectable and copyable for use in other apps or LLMs.
- **Responsive Design:**
  - Works on desktop and mobile devices. Controls and interactions adapt to your device.
- **Dynamic Card Height:**
  - The flashcard wrapper automatically expands to fit the tallest face (question or answer), with a minimum height for visual consistency.
- **External Flashcard Data:**
  - Supports loading flashcards from a separate `flashcards.js` file for easier data management.
- **Beautiful, Accessible UI:**
  - Fast fade animations, clear color cues, and accessible controls.

## Setup & Usage

1. **No installation or server required!**
2. Open `index.html` in your web browser (or deploy to any static web host).
3. Use the on-screen controls, keyboard shortcuts, or command palette to study efficiently.

## Usage Tips

- Use the category dropdown to focus on a specific lecture or topic.
- Switch between ordered and shuffled modes for varied practice.
- Click or drag on the progress bar to jump to any card.
- Press <kbd>Cmd/Ctrl+K</kbd> to quickly search and jump to any card.
- Click the upload icon to paste or upload your own flashcards in JSON format. Use the prompt template selector for easy generation.
- Click the info icon for a full guide to all features and shortcuts.
- All features work offline—no internet required after download.

## Generating & Uploading New Flashcards

- Flashcards can be stored in a separate `flashcards.js` file (as a JS array) or uploaded via the app's upload modal.
- To generate new cards with ChatGPT or another LLM, use the built-in prompt templates or your own format.
- Example prompt (Exam-Style):
  ```
  Generate 20 flashcards for my exam with difficult questions from the uploaded lecture material.
  Output exactly in the following JSON format, with each card as an object with keys: category, question, and answer.
  The "answer" field must contain clean, valid HTML embedded inside a JSON string.
  ...
  ```
- Paste or upload the generated JSON in the upload modal to instantly replace all cards.

## Customization
- Edit or add flashcards directly in `flashcards.js` or upload new sets via the app.
- To change styles, edit the CSS in `index.html`.
- Adjust the minimum card height in the `.flashcard` CSS rule (e.g., `min-height: 45vh;`).
- Add or modify prompt templates in the app for different flashcard generation styles.

## Advanced
- **External Data:** Place your flashcards in `flashcards.js` as a JS array and include it before your main script in `index.html`.
- **JSON Upload:** Use the upload modal to load any valid flashcard JSON array at runtime.
- **Dynamic Height:** The card wrapper will always fit the tallest face, with a buffer for comfort.

---

**Enjoy fast, focused revision for Computer Vision!** 