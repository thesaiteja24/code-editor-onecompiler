# Code Editor with OneCompiler Integration  

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![React](https://img.shields.io/badge/react-18.3.1-blue.svg) ![Vite](https://img.shields.io/badge/vite-6.0.5-lightgrey.svg)  

Live Demo: [https://code-editor-onecompiler.onrender.com/](https://code-editor-onecompiler.onrender.com/)  

This **React-based web application** integrates the OneCompiler embeddable editor to provide a seamless online code editing experience. The platform includes features like dark mode, auto-saving code, and real-time execution with confetti animations for successful runs.  

---

## 🚀 Features  

- **Dark and Light Mode**:  
  - Easily toggle between themes, with preferences saved in local storage.  

- **Code Editing and Execution**:  
  - Edit and execute code directly using OneCompiler’s embeddable editor.  

- **Auto-Save Functionality**:  
  - Saves the user's code to local storage on every keystroke for persistence.  

- **Confetti Animation**:  
  - Fun confetti animation on successful code execution.  

- **Responsive Design**:  
  - Optimized for different screen sizes, ensuring a smooth experience on both desktop and mobile devices.  

---

## 🛠️ Tech Stack  

- **Frontend**: React (with Vite)  
- **Styling**: Material-UI (MUI), Tailwind CSS  
- **External Services**: OneCompiler embeddable editor  

---

## 📂 Project Structure  

```plaintext  
thesaiteja24-code-editor-onecompiler/  
├── README.md                 # Project documentation  
├── eslint.config.js          # ESLint configuration  
├── index.html                # HTML entry point  
├── package.json              # Project metadata and dependencies  
├── postcss.config.js         # PostCSS configuration  
├── tailwind.config.js        # Tailwind CSS configuration  
├── vite.config.js            # Vite configuration  
├── public/                   # Public assets  
└── src/                      # Source files  
    ├── App.css               # App-level styles  
    ├── App.jsx               # Main app component  
    ├── ThemeContext.jsx      # Context for theme management  
    ├── index.css             # Global styles  
    ├── main.jsx              # Application entry point  
    ├── assets/               # Static assets  
    └── components/           # Reusable components  
        ├── ActionButtons.jsx # Button functionalities (e.g., Run, Format)  
        ├── CodeEditor.jsx    # Code editor component  
        └── NavBar.jsx        # Navigation bar  
```  

---

## 🔧 Installation  

Follow these steps to set up the project locally:  

### 1. Clone the Repository  

```bash  
git clone https://github.com/thesaiteja24/code-editor-onecompiler.git  
cd code-editor-onecompiler  
```  

### 2. Install Dependencies  

```bash  
npm install  
```  

### 3. Start the Development Server  

```bash  
npm run dev  
```  

Access the app at: [http://127.0.0.1:5173/](http://127.0.0.1:5173/)  

---

## 📝 Usage  

### Dark Mode Toggle:  
- Click the sun/moon icon in the navigation bar to switch between light and dark modes.  

### Run Code:  
- Click the "Run Code" button to execute your code within the embedded OneCompiler editor.  

### Format Code:  
- Format code functionality (future implementation).  

### Auto-Save:  
- Your code is automatically saved to local storage and reloaded when you revisit the editor.  

---

## 📜 License  

This project is licensed under the [MIT License](LICENSE).  

---

## 📬 Contact  

If you have any questions or feedback, feel free to reach out:  

- **Name**: Sai Teja  
- **GitHub**: [thesaiteja24](https://github.com/thesaiteja24)  
