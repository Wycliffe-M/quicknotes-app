# QuickNotes

QuickNotes is a simple note-taking web app for capturing quick thoughts before they are forgotten. Users can add short notes of up to 200 characters, sort them into Personal, Work or Study categories, search through them as they type, and delete the ones they no longer need. The app is built with plain HTML, CSS and JavaScript, uses a responsive layout that works on small screens, and saves all notes in the browser with localStorage, so they are still there after a page refresh.

## Features

- Add notes with a category (Personal, Work or Study)
- Delete any note
- Search notes as you type (not case-sensitive)
- Validation: empty notes and notes over 200 characters are rejected
- Notes are saved in the browser and survive a refresh
- Note count that handles zero, one and many notes
- Responsive layout for small screens

## How to Run Locally

1. Clone the repository: `git clone https://github.com/Wycliffe-M/quicknotes-app.git`
2. Open the folder in VS Code.
3. Right-click `index.html` and choose "Open with Live Server".
   (Or simply open `index.html` in your browser.)

## What I Learned

- **The render pattern:** keep the data in one array, then update it, save it and call `render()`, so the screen always matches the data.
- **Safe text:** use `textContent` instead of `innerHTML` for user input, so typed HTML like `<b>hello</b>` shows as plain text and cannot run as code (XSS).
- **Browser storage:** `localStorage` only stores strings, so notes must go through `JSON.stringify` to save and `JSON.parse` to load.
- **Debugging:** two functions with the same name overwrite each other, and the later one wins. This stopped my notes from saving until I removed the duplicates.
