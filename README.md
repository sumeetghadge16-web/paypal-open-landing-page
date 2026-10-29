# PayPal Open Landing Page (Assignment II)

A responsive, high-fidelity static single-page React application recreating the **PayPal Open** business landing page. Built as part of College Assignment II with React and Vite.

---

## 📌 Project Overview

This project closely reproduces the visual design, typography, spacing, and micro-interactions of the official PayPal Open landing page:

- **Header / Navigation Bar:** 
  - Authentic PayPal monogram SVG icon.
  - Navigation items: *Personal*, *Business*, *Partners*, and *Useful Info* with custom chevron indicators.
  - Light-grey rounded *Log In* pill button and black *Sign Up* pill button with subtle hover micro-interactions.
  - Responsive mobile drawer navigation with animated hamburger toggle.
- **Audience Selector:** 
  - Centered capsule / pill-shaped toggle switch (*Personal* / *Business*).
  - Controlled via React state with **Business** selected by default on load.
  - Smooth visual transition between active and inactive states.
- **Hero Section:**
  - High-impact, heavy bold typography for **PayPal Open**.
  - Clear visual hierarchy for the subtitle (*One platform for your business needs*).
  - Centered description aligned to a single line on desktop screens.
  - Call-to-action pill buttons: Primary black *Sign Up* button and light-grey *Contact Sales* button.
- **Micro-Interactions & Hover Polish:**
  - Rounded pill aesthetics inspired by modern fintech design patterns.
  - Professional transitions (180–250ms) with `:hover` and `:focus-visible` accessibility indicators.
  - Subtle background tone shifts and slight vertical elevation.
- **Responsive Layout:**
  - Designed for mobile (<600px), tablet (600px–900px), laptop, and high-resolution desktop viewports without horizontal scroll.

---

## 🛠️ Tech Stack

- **React 18** (Functional components and Hooks)
- **Vite** (Next-generation frontend tooling and build)
- **JavaScript (ES6+) & JSX**
- **HTML5 & CSS3** (Modular stylesheets with CSS custom properties and Flexbox)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed on your machine.

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd Paypal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

### Production Build

To test and build the production-ready static assets:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```
Paypal/
├── index.html                   # HTML entry point with fonts & viewport configuration
├── vite.config.js               # Vite build configuration
├── package.json                 # Project dependencies and npm scripts
├── .gitignore                   # Git ignore file (excludes node_modules, dist, etc.)
├── README.md                    # Project documentation & submission instructions
└── src/
    ├── main.jsx                 # React root DOM mount
    ├── App.jsx                  # Main application container & state management
    ├── components/
    │   ├── Navbar.jsx           # Top navigation bar with logo, links, and mobile menu
    │   ├── AudienceToggle.jsx   # Personal / Business pill toggle component
    │   └── Hero.jsx             # Hero section with typography and CTA buttons
    └── styles/
        ├── global.css           # Global reset, typography, and CSS variables
        ├── Navbar.css           # Styles for desktop navigation & mobile drawer
        ├── AudienceToggle.css   # Styles for pill toggle selector
        └── Hero.css             # Styles for hero typography, layout, and CTA buttons
```

---

## 📤 GitHub Submission Instructions

To push this project to your own GitHub repository for assignment submission:

1. **Initialize Git Repository** (if not already initialized):
   ```bash
   git init
   ```

2. **Stage and Commit all project files**:
   ```bash
   git add .
   git commit -m "Assignment-II: Build PayPal Open landing page using React & Vite"
   ```

3. **Rename branch to main**:
   ```bash
   git branch -M main
   ```

4. **Link to your GitHub repository**:
   Create a new public repository on [GitHub](https://github.com/new) (e.g. `paypal-open-landing-page`), then link it:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
   ```

5. **Push your code to GitHub**:
   ```bash
   git push -u origin main
   ```

6. **Submit**: Copy your GitHub repository URL and paste it into your Google Classroom assignment submission.
