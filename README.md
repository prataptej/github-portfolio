# Personal Portfolio Website

This is a personal portfolio website built with React and Vite, styled with Tailwind CSS, and designed for deployment on GitHub Pages. It is fully data-driven, with all content managed through a central `portfolioData.json` file.

## Features

-   **Responsive Design**: Mobile-first approach with a clean and modern UI.
-   **Data-Driven Content**: All content (name, tagline, experience, projects, skills, etc.) is managed through `src/portfolioData.json`, making updates easy.
-   **Scroll-Based Animations**: Sections gracefully animate into view as you scroll.
-   **Project Filtering**: Filter projects by technology stack.
-   **Dynamic GitHub Stats**: Displays your real-time GitHub statistics, including public repos, followers, and top languages.
-   **"What I'm Currently Learning" Section**: Showcases the skills you are actively developing.
-   **Interactive Experience Timeline**: A visually engaging timeline for your work experience, complete with company logos.
-   **Mobile-Friendly Navigation**: A responsive "hamburger" menu for smaller screens.

### Special Features (via Floating Action Button)

-   **Interactive CLI Terminal**: A terminal-like interface to navigate the portfolio's content using commands.
-   **Gamified Achievements**: A modal displaying your professional achievements and milestones.
-   **"Live" Code Playground**: An interactive code editor to showcase your coding skills.

## Sections

-   **Hero**: Introduction with your name, tagline, and a call-to-action.
-   **About Me**: A brief description of your background and skills.
-   **GitHub Stats**: A dynamic display of your GitHub activity.
-   **Experience**: A timeline of your work experience.
-   **Projects**: Displays your curated projects with filtering capabilities.
-   **Skills**: Showcases your technical proficiencies.
-   **Currently Learning**: Highlights the skills you are currently focused on.
-   **Contact**: Provides ways to get in touch.

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

## Customization

To customize the portfolio, edit the `src/portfolioData.json` file. Here you can update:
- Your name, tagline, and profile picture URL.
- Contact information (email, GitHub, LinkedIn).
- The "About Me" description.
- Work experience entries (including company logos).
- Your list of manually added projects.
- Your skills (as a comma-separated string).
- The "Currently Learning" items.
- Your list of achievements.
- The initial code for the "Live" Code Playground.

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

---

Feel free to customize this template to match your personal brand and projects!
