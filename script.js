// ---------- 1. Select the elements we need ----------
const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const category = document.querySelector("#note-category");
const list = document.querySelector("#notes-list");
const count = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");

// ---------- 2. The data: one array is the single source of truth ----------
let notes = [];

// ---------- 3. Draw the notes on the page ----------
function render() {
  list.innerHTML = ""; // clear the old list

  notes.forEach((note) => {
    const li = document.createElement("li");
    li.classList.add("note", `category-${note.category}`);

    const body = document.createElement("div");
    body.classList.add("note-body");

    const text = document.createElement("p");
    text.classList.add("note-text");
    text.textContent = note.text; // safe for user text

    const meta = document.createElement("span");
    meta.classList.add("note-meta");

    const label = document.createElement("span");
    label.classList.add("note-category");
    label.textContent = note.category;

    meta.appendChild(label);
    meta.appendChild(document.createTextNode(` · ${note.createdAt}`));

    body.appendChild(text);
    body.appendChild(meta);

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.classList.add("delete-btn");
    del.addEventListener("click", () => deleteNote(note.id));

    li.appendChild(body);
    li.appendChild(del);
    list.appendChild(li);
  });

  if (notes.length === 0) {
    count.textContent = "You have no notes yet.";
  } else if (notes.length === 1) {
    count.textContent = "You have 1 note.";
  } else {
    count.textContent = `You have ${notes.length} notes.`;
  }
}

// ---------- 4. Add notes ----------
function validateText(text) {
  if (text === "") {
    return "Please type a note first.";
  }
  if (text.length > 200) {
    return "Notes must be 200 characters or fewer.";
  }
  return ""; // empty string means the text is valid
}

function addNote(text, categoryValue) {
  notes.push({
    id: Date.now(),
    text: text,
    category: categoryValue,
    createdAt: new Date().toLocaleString(),
  });
  render();
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
  render();
}

// ---------- 5. Listen for the form ----------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  const error = validateText(text);

  if (error !== "") {
    errorMessage.textContent = error;
    return; // stop here: do not add the note
  }

  errorMessage.textContent = ""; // clear any old error
  addNote(text, category.value);
  input.value = "";
  input.focus();
});

// ---------- 6. Draw once when the page first loads ----------
render();
