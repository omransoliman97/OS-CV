# Modern Portfolio Website

A sleek, dark-themed portfolio website template inspired by modern design trends. This template features a responsive layout, animated skill bars, and a clean user interface.

## Features

- Modern dark theme with light mode toggle
- Responsive design that works on all devices
- Animated skill bars
- Side navigation with icons
- Social media integration
- Clean and professional layout

## Setup Instructions

1. Clone or download this repository
2. Replace the placeholder image in the `images` folder with your profile photo
3. Edit the `index.html` file to update:
   - Your name and title
   - Bio and experience information
   - Skill percentages
   - Social media links
   - Navigation links

## Customization

### Colors
The color scheme can be modified in the `css/style.css` file by updating the CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #00c8ff;
    --background-dark: #1a1a1a;
    --text-light: #ffffff;
    --text-gray: #a0a0a0;
    --nav-width: 80px;
}
```

### Profile Photo
Replace the placeholder image by adding your photo to the `images` folder and updating the `src` attribute in the `index.html` file:

```html
<img src="images/your-photo.jpg" alt="Profile Photo" class="profile-photo">
```

### Skills
Update the skill bars in the `index.html` file by modifying the percentages and skill names:

```html
<div class="skill-item">
    <span class="skill-name">your skill</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: XX%"></div>
    </div>
    <span class="skill-percentage">XX%</span>
</div>
```

## Dependencies

- Font Awesome 6.0.0 (included via CDN)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required. 