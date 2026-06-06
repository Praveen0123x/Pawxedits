[README.md](https://github.com/user-attachments/files/28667085/README.md)
# Praveen.edits — Portfolio Website

Personal portfolio website for **Praveen Patil**, a video editor and thumbnail designer specializing in short-form content for anime, podcasts, and YouTube creators.

🌐 **Live Site:** [your-username.github.io/your-repo-name](https://your-username.github.io/your-repo-name) *(update this link after deploying)*

---

## Preview

> Dark premium aesthetic with purple/blue accents, animated hero section, tabbed portfolio, and a working contact form.

---

## Features

- **Animated Hero** — floating video mockup with a simulated play/pause progress bar and glowing orb background
- **Services Section** — cards for Short-Form Video Editing and Thumbnail Design
- **Tabbed Portfolio** — switch between Video Edits and Thumbnails with smooth reveal animations
- **About Section** — spinning gradient avatar ring with skills tags
- **Contact Form** — name, email, service selector, and message with a success state
- **Sticky Navbar** — transparent on top, frosted glass on scroll, with a mobile burger menu
- **Scroll Animations** — elements fade and slide in as you scroll using IntersectionObserver
- **Fully Responsive** — works on mobile, tablet, and desktop

---

## File Structure

```
portfolio/
├── index.html      # Main HTML — all sections and structure
├── style.css       # All styles, CSS variables, animations, responsive rules
├── script.js       # Navbar scroll, mobile menu, reveal animations, tab switcher, hero player, contact form
├── images/         # Add your profile photo and thumbnail images here
│   ├── profile.jpg
│   ├── thumb1.jpg
│   ├── thumb2.jpg
│   └── thumb3.jpg
├── videos/         # Add your video portfolio files here
│   ├── anime-edit.mp4
│   └── fast-paced-edit.mp4
└── README.md
```

---

## Getting Started

No build tools or dependencies required. It's plain HTML, CSS, and JavaScript.

**To run locally:**
1. Clone or download this repository
2. Open `index.html` in any browser

**To deploy on GitHub Pages:**
1. Push all files to your GitHub repository
2. Go to **Settings → Pages**
3. Under *Source*, select **main branch / root**
4. Your site will be live at `https://your-username.github.io/your-repo-name`

---

## Customization

### Add your own images and videos
Drop your files into the `images/` and `videos/` folders. The HTML already references:
- `images/profile.jpg` — your profile photo (shown in the About avatar area)
- `images/thumb1.jpg`, `thumb2.jpg`, `thumb3.jpg` — thumbnail portfolio samples
- `videos/anime-edit.mp4`, `videos/fast-paced-edit.mp4` — video portfolio samples

### Update contact details
In `index.html`, your contact info is already set:
- **Email:** djpraveenbro@gmail.com
- **Instagram:** @pawxedits.08

To update WhatsApp, find the WhatsApp `contact-item` block and replace `+91 XXXXX XXXXX` with your number.

### Change colors or fonts
All design tokens are CSS variables at the top of `style.css`:
```css
:root {
  --purple: #8b5cf6;
  --blue:   #3b82f6;
  --orange: #f97316;
  --font-display: 'Outfit', sans-serif;
  --font-body:    'DM Sans', sans-serif;
}
```

---

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, keyframe animations, IntersectionObserver-driven reveals
- **Vanilla JavaScript** — no frameworks or libraries
- **Google Fonts** — Outfit (display) + DM Sans (body)

---

## Contact

📧 djpraveenbro@gmail.com  
📸 [@pawxedits.08](https://instagram.com/pawxedits.08)

---

© 2026 Praveen Patil. All Rights Reserved.
