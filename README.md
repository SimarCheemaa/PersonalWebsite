# PersonalWebsite
<img width="1422" alt="image" src="https://github.com/user-attachments/assets/36d6a607-4ac1-447b-8795-efe91e19db23">

## Overview

This is a React-based personal portfolio website that showcases your projects, experiences, and skills. It features a sleek design, animations for different sections, and smooth scrolling behavior, optimized for both desktop and mobile devices.

## Features

- Full-screen hero section with a background image and overlay text
- Experience and Education sections that fade in as they come into view
- Projects section with 6 cards (2 per row) that expand on hover and redirect to GitHub
- Contact section with a simple Get in Touch link
- Fully responsive design for desktop and mobile views

## Technologies Used

- React
- CSS for styling and animations
- JavaScript for interactive components
- react-intersection-observer for animations when elements come into view
- @react-spring/parallax for parallax scrolling effect

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourproject.git
   ```

2. Navigate to the project folder:
   ```bash
   cd yourproject
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

Open your browser and navigate to `http://localhost:3000`. You will see the website with various sections, including the hero, experience, projects, and contact details.

## Folder Structure

- `src/components` - Contains reusable React components like Hero, Education, Experience, etc.
- `src/assets` - Stores all image assets used in the project.
- `src/App.js` - Main entry point for rendering components.
- `src/index.js` - Entry point for initializing the React app.

## Customization

- Update the image URLs in `src/assets` to replace them with your local assets.
- Edit project details (titles, GitHub links) in the `Projects` component.
- Modify the `AboutMe` section to reflect your personal information.

## Deployment

To deploy the application to GitHub Pages:
1. Install the GitHub Pages package:
   ```bash
   npm install gh-pages
   ```

2. Add the following scripts to your `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/yourproject",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy the app:
   ```bash
   npm run deploy
   ```

## Contributing

Feel free to submit issues and pull requests. Contributions are welcome and greatly appreciated!

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.




