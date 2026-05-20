# Queens Of Change Foundation 👑

A responsive, single-page website built for the **Queens Of Change Foundation** — an NGO dedicated to empowering women through education, mentorship, and opportunity.

---

## 📁 Project Structure

```
queens-of-change/
├── index.html      # Main HTML file (all sections)
├── style.css       # Styling, layout, animations, dark mode, responsive
├── script.js       # Dark mode toggle, scroll reveal, form validation
└── README.md       # You're here
```

---

## 🚀 How to Run

No installation or server required.

1. Extract the zip file
2. Open the `queens-of-change/` folder
3. Double-click `index.html` — it opens in your browser

---

## 📄 Sections

| Section | Description |
|---|---|
| Navbar | Fixed top bar with logo, nav links, dark mode toggle |
| Hero | Full-screen intro with image, tagline, and CTA buttons |
| Marquee | Animated scrolling keyword strip |
| About | Mission statement + 4 stat cards |
| Programs | 3 program cards (Education, Leadership, Grants) |
| Team | Team member cards |
| Donate CTA | Bold call-to-action block |
| Contact | Contact info + message form with validation |
| Footer | Links, brand info, copyright |

---

## ✨ Features

- 🌙 **Dark Mode** — toggle button in navbar; preference saved in `localStorage`
- 📱 **Responsive Design** — works on mobile, tablet, and desktop
- 🎞️ **Scroll Reveal Animations** — sections fade in as you scroll
- 🔤 **Custom Typography** — Playfair Display (display) + DM Sans (body) via Google Fonts
- 🎨 **CSS Variables** — easy to change colors/fonts from one place
- ✅ **Form Validation** — highlights empty fields, shows success message
- 🏃 **Marquee Strip** — CSS-animated scrolling text banner
- 🖱️ **Hover Effects** — cards lift, buttons invert on hover

---

## 🎨 Customization

### Change Colors
Open `style.css` and edit the `:root` block at the top:
```css
:root {
  --clr-accent: #c1440e;   /* Main brand color (buttons, highlights) */
  --clr-gold:   #d4a034;   /* Secondary accent */
  --clr-bg:     #fdf8f3;   /* Page background */
  --clr-text:   #1a1108;   /* Body text */
}
```

### Change NGO Name / Content
Edit `index.html` — all text content is plain HTML, clearly labeled with comments.

### Change the Hero Image
Find this line in `index.html` and replace the `src` URL:
```html
<img src="https://images.unsplash.com/..." alt="..." class="hero-img" />
```
You can use a local image too: `src="images/your-photo.jpg"`

### Add/Remove Sections
Each section in `index.html` is wrapped in a `<section>` tag with a clear comment. Delete or duplicate any block as needed.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure and content |
| CSS3 | Styling, Flexbox, Grid, animations |
| Vanilla JavaScript | Dark mode, scroll reveal, form logic |
| Google Fonts | Playfair Display, DM Sans |

No frameworks. No dependencies. No build step.

---

## 📋 Requirements

- Any modern browser (Chrome, Firefox, Edge, Safari)
- Internet connection (only for Google Fonts to load)

> **Offline use:** Add `font-display: swap` fallbacks in `style.css` if you need it to work without internet.

---

## 📌 Notes for Submission

- This project was built as part of the **Queens Of Change Foundation Internship Selection Task**
- All code is original and written from scratch
- The design follows a warm editorial aesthetic suited to an NGO focused on women's empowerment
- Beginner-friendly structure — each file is clearly organized and commented

---

*Made with ♥ for every queen.*
