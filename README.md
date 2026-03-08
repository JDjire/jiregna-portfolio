# Personal Portfolio Website

A modern, responsive, and interactive personal portfolio website built with pure HTML, CSS, and JavaScript.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with localStorage persistence
- **Smooth Navigation**: Sticky navigation with active link highlighting
- **Dynamic Content**: Projects loaded dynamically from JavaScript arrays
- **Interactive Animations**: Smooth scroll animations and hover effects

### Sections
1. **Home**: Hero section with typewriter effect and call-to-action buttons
2. **About**: Personal information, skills, and experience
3. **Projects**: Dynamic project showcase with filtering capabilities
4. **Skills**: Animated skill bars with progress indicators
5. **Contact**: Working contact form with validation
6. **Footer**: Social media links and copyright information

### Interactive Elements
- **Project Filtering**: Filter projects by category (All, Web, Mobile, Design)
- **Form Validation**: Client-side form validation with success/error messages
- **Scroll Effects**: Fade-in animations when sections come into view
- **Mobile Menu**: Hamburger menu for mobile devices
- **Scroll to Top**: Floating button to return to top of page

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern HTML features
- **CSS3**: 
  - CSS Grid and Flexbox for layouts
  - CSS Custom Properties (CSS Variables)
  - CSS Animations and Transitions
  - Media Queries for responsive design
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Event handling
  - Intersection Observer API
  - Local Storage API
  - Form validation

## 📁 Project Structure

```
portfolio1/
├── index.html          # Main HTML file
├── style.css           # All CSS styles
├── script.js           # JavaScript functionality
├── assets/             # Images and media files
│   ├── profile.jpg     # Profile image placeholder
│   ├── project1.jpg    # Project image placeholders
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   ├── project5.jpg
│   └── project6.jpg
└── README.md           # This file
```

## 🎨 Design Features

### Color Scheme
- **Light Theme**: Clean whites and soft grays with blue accent colors
- **Dark Theme**: Dark backgrounds with light text and maintained accent colors
- **Gradients**: Beautiful gradient backgrounds for buttons and accents

### Typography
- **Font**: Inter font family for modern, clean typography
- **Hierarchy**: Clear typographic hierarchy with proper font weights and sizes

### Animations
- **Typewriter Effect**: Animated text typing in the hero section
- **Fade-in Animations**: Elements animate in as they come into view
- **Hover Effects**: Smooth transitions on interactive elements
- **Loading Animation**: Preloader with spinning animation

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in a web browser
3. **Customize** the content in `script.js` to match your information
4. **Replace** placeholder images in the `assets/` folder
5. **Deploy** to your preferred hosting platform

## 📝 Customization Guide

### Personal Information
Edit the following in `script.js`:
- Name and tagline in the typewriter effect
- About section content
- Contact information
- Social media links

### Projects
Modify the `projectsData` array in `script.js`:
```javascript
const projectsData = [
    {
        id: 1,
        title: "Your Project Title",
        description: "Project description",
        image: "assets/your-image.jpg",
        category: "web", // or "mobile", "design"
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://your-live-demo.com",
        githubLink: "https://github.com/your-username/project"
    }
    // Add more projects...
];
```

### Skills
Update the skills section in `index.html`:
```html
<div class="skill-item">
    <div class="skill-icon">
        <i class="fab fa-your-icon"></i>
    </div>
    <h3>Your Skill</h3>
    <div class="skill-bar">
        <div class="skill-progress" data-width="90%"></div>
    </div>
    <span class="skill-percentage">90%</span>
</div>
```

### Colors and Styling
Modify CSS custom properties in `style.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* Update other color variables */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 320px to 767px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📞 Support

If you have any questions or need help customizing this portfolio, please feel free to reach out!

---

**Built with ❤️ by Jiregna Dereje**


