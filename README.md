# Full-Stack MERN Authentication System

A secure and fully functional full-stack Authentication System. This project demonstrates complete user registration, login, and secure session management using the MERN stack (MongoDB, Express.js, React.js, and Node.js).

---

## 📁 Repository Structure & Uploaded Files

To make the project highly organized and professional, we have separated it into two main folders. Here is the deep breakdown of what we have uploaded:

### 1. 🌐 Frontend Folder (`/frontend`)
This contains the client-side interface built with React.js.
* **`src/`** - Contains all the React components, CSS styling, pages, and the main logic for UI.
* **`public/`** - Contains the static assets and the main `index.html` file.
* **`package.json`** - Lists all the required dependencies for React (like React-router-dom, Axios, etc.).
* **`.gitignore`** - Instructs Git to ignore local environment files and system files.

### 2. ⚙️ Backend Folder (`/backend`)
This contains the server-side architecture built with Node.js and Express.
* **`server.js`** - The entry point of the application where the server is initialized and the database is connected.
* **`package.json`** - Lists all backend dependencies (like Express, Mongoose, JWT, Bcrypt).
* **`.env`** - Contains the environment variables like database strings and JWT secret keys.

*(Note: The heavy `node_modules` folders were purposely excluded from the upload to follow standard development practices and keep the repository clean. It prevents uploading gigabytes of third-party code.)*

---

## 🚀 Key Features Implemented
* **Secure Authentication:** User signup and login functionality.
* **Password Hashing:** Passwords are encrypted before saving to the database using `bcrypt` for high security.
* **JWT Authorization:** Secured routes and session management using JSON Web Tokens.
* **Responsive UI:** Clean and interactive user interface built on React.
* **Error Handling:** Proper validation for empty fields and incorrect credentials.

---

## 💻 How to Setup and Run This Project Locally

If you wish to clone this repository and run it on your machine, follow these steps:

### Prerequisites:
Make sure you have **Node.js** and **NPM** installed.

### Step 1: Setup the Backend
1. Open your terminal and navigate to the backend directory:
   ```bash
   cd backend
Install the necessary dependencies (this will recreate the deleted node_modules folder):

Bash
npm install
Start the backend server:

Bash
npm start
Step 2: Setup the Frontend
Open a new terminal window and navigate to the frontend directory:

Bash
cd frontend
Install the frontend dependencies:

Bash
npm install
Start the React development server:

Bash
npm start
