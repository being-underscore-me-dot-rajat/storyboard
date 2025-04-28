# 🎬 Storyboard Builder

A **React-based** web application that allows users to generate and visualize custom storyboard scenes based on their own prompts, enhanced with cinematic and thematic styling.

---

## 🚀 Features

- Input up to 6 custom scenes.
- Choose visual **style** (cinematic, anime, realistic, etc.).
- Choose a **theme** (sci-fi, noir, fantasy, etc.).
- Generate enhanced prompts using AI-based natural language processing.
- Browse a curated **Gallery**.
- Learn more about the project on the **About** page.
- Responsive and mobile-friendly design.

---

## 📂 Project Structure

```
src/
│
├── assets/
│   └── Data/
│       └── data.js          # Image data for Gallery
│
├── components/
│   ├── Nav.jsx              # Navigation bar
│   ├── ResultPage.jsx       # Result display page
│   ├── Gallery.jsx          # Gallery page
│   └── About.jsx            # About page
│
├── styles/
│   ├── Nav.css
│   ├── Result.css
│   ├── Gallery.css
│   └── About.css
│
├── Prompt_enhancer.py       # Python backend logic for enhancing prompts
│
└── App.js / main.jsx        # Entry points
```

---

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router, Bootstrap
- **Backend (prompt enhancement)**: Python (NLTK, TextBlob)
- **Styling**: Custom CSS + Bootstrap classes

---

## ⚙️ Installation

### Frontend

```bash
# Clone the repository
git clone https://github.com/your-username/storyboard-builder.git

# Navigate into the project
cd storyboard-builder

# Install dependencies
npm install

# Run the application
npm start
npm run dev
python src/app.py
```

The app will be available at `http://localhost:3000`.

### Backend (Prompt Enhancer)

Ensure you have **Python 3.x** installed.

```bash
# Navigate to backend (if separated) or project root
cd storyboard-builder

# Install Python dependencies
pip install nltk textblob

# (Optional) Download NLTK resources
python
>>> import nltk
>>> nltk.download('punkt')
>>> nltk.download('averaged_perceptron_tagger')
exit()
```

---

## 🧠 Core Logic

- `Prompt_enhancer.py` analyzes the user's scene input.
- Enhances prompts by:
  - Identifying characters, actions, and objects.
  - Applying cinematic shot types and emotional modifiers.
  - Incorporating style (cinematic, anime, etc.) and thematic (sci-fi, fantasy, etc.) elements.
  - Randomly adding scene transitions for realism.

---

## 📸 Pages Overview

| Page    | Description                                  |
|---------|----------------------------------------------|
| Home    | Input scenes, select style and theme         |
| Results | View processed enhanced prompts              |
| Gallery | Browse inspirational storyboard images       |
| About   | Learn about the team and project background  |

---

## ✨ Future Improvements

- Integrate backend Python enhancement directly with the frontend.
- Add user authentication for saving projects.
- Extend Gallery with user-generated storyboards.
- Enable direct image generation from prompts using AI APIs.

---

## 📄 License

This project is open-sourced under the [MIT License](LICENSE).

---

## 👨‍💻 Authors

- [Your Name Here](https://github.com/your-username)
