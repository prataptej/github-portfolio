# Personal Portfolio Website

This is a personal portfolio website built with React and Vite, styled with Tailwind CSS, and designed for deployment on GitHub Pages.

## Features

- **Responsive Design**: Mobile-first approach with a clean and modern UI.
- **Dark/Light Mode Toggle**: Switch between dark and light themes.
- **Smooth Scroll Navigation**: Seamless navigation between sections.
- **Dynamic Project Showcase**: Fetches public GitHub repositories and allows for manual project additions.
- **Skill Display**: Visual representation of technical skills.
- **Contact Section**: Links to email, GitHub, and LinkedIn.

## Sections

- **Hero**: Introduction with your name, tagline, and a call-to-action.
- **About Me**: A brief description of your background and skills.
- **Projects**: Displays your GitHub repositories and manually added projects.
- **Skills**: Showcases your technical proficiencies.
- **Contact**: Provides ways to get in touch.

## Setup Instructions

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
    cd YOUR_REPO_NAME
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port).

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages using the `gh-pages` package.

1.  **Update `homepage` in `package.json`**:
    Before deploying, make sure to update the `homepage` field in `package.json` to your GitHub Pages URL.
    ```json
    "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME",
    ```
    Replace `YOUR_GITHUB_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with the name of your repository.

2.  **Deploy the application**:
    ```bash
    npm run deploy
    ```
    This command will:
    -   Build your React application for production.
    -   Push the `dist` directory content to the `gh-pages` branch of your repository.

    Your portfolio will then be live at the `homepage` URL you specified.

## Customization

-   **Your Name and Tagline**: Edit `src/components/Hero.jsx`.
-   **About Me Content and Profile Picture**: Edit `src/components/About.jsx`. Replace the placeholder image URL with your own.
-   **GitHub Username**: Update the `fetch` URL in `src/components/Projects.jsx` with your GitHub username to fetch your repositories.
-   **Manual Projects**: Add or modify projects in the `manualProjects` array in `src/components/Projects.jsx`.
-   **Skills**: Customize the `skills` array in `src/components/Skills.jsx` with your relevant skills and icons.
-   **Contact Information**: Update the links in `src/components/Contact.jsx` with your email, GitHub, and LinkedIn profiles.
-   **Footer**: Update the copyright information in `src/components/Footer.jsx`.

---

Feel free to customize this template to match your personal brand and projects!
