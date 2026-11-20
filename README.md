<div align="center">

# 📚 Book Vibe

**Discover, organize, and track your reading journey.**

A responsive book management web application built with React, where readers can browse books, explore detailed information, and manage personal *Read* and *Wishlist* collections.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://book-vibe-project-reactjs.netlify.app/)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

[Live Demo](https://book-vibe-project-reactjs.netlify.app/) · [Report a Bug](../../issues) · [Request a Feature](../../issues)

</div>

---

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Screenshots](#-screenshots)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Challenges and Learnings](#-challenges-and-learnings)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 📖 About the Project

**Book Vibe** is a single-page application for book lovers. It acts as a personal digital library assistant: users can browse a curated collection of books, open a details page for each title, and organize books into **Read** and **Wishlist** lists. Lists can be sorted by rating, number of pages, or publishing year, and a chart gives a visual overview of reading data.

The project focuses on clean component design, client-side routing, persistent state, and a fully responsive user interface.

---

## 🌐 Live Demo

🔗 **https://book-vibe-project-reactjs.netlify.app/**

---

## 🖼️ Screenshots

> Replace the placeholders below with real screenshots stored in a `/screenshots` folder.

| Home | Book Details |
| :---: | :---: |
| ![Home](![alt text](image.png)) | ![Details](![alt text](image-1.png)) |

| Listed Books | Pages to Read Chart |
| :---: | :---: |
| ![Listed Books](![alt text](image-2.png)) | ![Chart](./screenshots/chart.png) |

---

## ✨ Key Features

- 📚 **Browse books**: view a collection of books with cover, title, author, category, tags, and rating.
- 🔍 **Book details page**: see publisher, number of pages, year of publishing, review, and tags for each book.
- ✅ **Read list**: mark a book as read from its details page.
- 💖 **Wishlist**: save books you want to read later.
- 🚫 **Smart validation**: a book already marked as read cannot be added to the wishlist, and duplicate entries are blocked.
- 🔔 **Toast notifications**: instant feedback for successful actions, duplicates, and invalid actions.
- 🔽 **Sorting**: sort listed books by rating, number of pages, or publishing year.
- 📊 **Data visualization**: a "Pages to Read" chart based on the books in the Read list.
- 💾 **Persistent data**: lists are stored in the browser's local storage, so they survive page refreshes.
- 📱 **Fully responsive**: optimized for mobile, tablet, and desktop screens.
- 🧭 **Custom 404 page**: friendly fallback for unknown routes.

---

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Library | [React](https://react.dev/) |
| Build Tool | [Vite](https://vite.dev/) |
| Routing | [React Router](https://reactrouter.com/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/), [daisyUI](https://daisyui.com/) |
| Charts | [Recharts](https://recharts.org/) |
| Notifications | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Deployment | [Netlify](https://www.netlify.com/) |

---

## 📁 Project Structure

```bash
book-vibe/
├── public/
│   └── booksData.json        # Static book data
├── src/
│   ├── components/           # Reusable UI components (Navbar, Footer, Banner, Book card...)
│   ├── pages/                # Route pages (Home, Listed Books, Pages to Read, Book Details)
│   ├── routes/               # Router configuration
│   ├── utils/                # Local storage helpers
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

> Folder names may differ slightly. Adjust this section to match your actual repository.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18 or later**
- npm (comes with Node.js) or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mahdirafi/<your-repo-name>.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd <your-repo-name>
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. Open **http://localhost:5173** in your browser.

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check code quality |

---

## ☁️ Deployment

The project is deployed on **Netlify**.

To deploy your own copy:

1. Push the project to GitHub.
2. Log in to [Netlify](https://www.netlify.com/) and choose **Add new site → Import an existing project**.
3. Select your repository and use these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Add a `public/_redirects` file containing the line below so client-side routes work after a page refresh:

   ```
   /*    /index.html   200
   ```

---

## 🧠 Challenges and Learnings

- **State synchronization:** keeping the Read list and Wishlist consistent across components without duplicates.
- **Conditional logic:** preventing a book from being added to the wishlist once it has been marked as read.
- **Dynamic sorting:** implementing multi-criteria sorting (rating, pages, year) with instant UI updates.
- **Data visualization:** integrating Recharts so the chart stays accurate and responsive.
- **Routing:** handling dynamic routes and a custom 404 page with React Router.

---

## 🔮 Future Improvements

- [ ] User authentication for personalized libraries
- [ ] Search and category filters
- [ ] Cloud sync for lists across devices
- [ ] Book reviews and community ratings
- [ ] Recommendation engine based on reading history
- [ ] Dark mode

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**MD Mahdi**
Web Developer

- GitHub: [@mahdirafi](https://github.com/mahdirafi)
- Live Project: [Book Vibe](https://book-vibe-project-reactjs.netlify.app/)

---

<div align="center">

⭐ If you like this project, please consider giving it a star!

</div>