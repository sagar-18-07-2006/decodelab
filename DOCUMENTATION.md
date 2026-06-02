# Final Documentation — Architect Sequential 4 Week Theme

## 1. Project Overview

The Architect Sequential 4 Week Theme is a static frontend project divided into four independent weekly modules. Each week is stored in a separate folder and contains its own `index.html`. The project is deployed on Vercel, and the root `index.html` works as a project index page that links to all weekly versions.

The project follows a sequential development style. This means every week builds on the previous week instead of adding all features at once. The same base theme is preserved throughout the project so that the improvement from week to week is easy to understand.

## 2. Live Deployment

Main deployment:

```text
https://decodelab.vercel.app/
```

Weekly routes:

```text
https://decodelab.vercel.app/Task-1-Sagar-Maheshwari/
https://decodelab.vercel.app/Task-2_Sagar_Maheshwari/
https://decodelab.vercel.app/Task-3-Sagar-Maheshwari/
https://decodelab.vercel.app/Task-4-Sagar-Maheshwari/
```

## 3. Project Architecture

The project is intentionally simple and static. There is no framework, build system, or package manager requirement. Every weekly task is self-contained.

```text
final/
├── index.html                         Root project index
├── vercel.json                        Vercel static deployment config
├── README.md                          Project readme
├── Task-1-Sagar-Maheshwari/           Week 01 static semantic site
├── Task-2_Sagar_Maheshwari/           Week 02 responsive design
├── Task-3-Sagar-Maheshwari/           Week 03 JavaScript interaction
└── Task-4-Sagar-Maheshwari/           Week 04 form validation
```

Each weekly folder follows this pattern:

```text
Task-X/
├── index.html
├── style.css
├── script.js                          Only in Week 03 and Week 04
└── assets/
    └── background-wave-pattern.webp
```

## 4. Root Index Page

The root page is the entry point of the deployment. It displays the title `PROJECT INDEX` and provides links to all four weeks.

![Project Index](screenshots/home-index.png)

The purpose of the root page is to make one Vercel deployment serve multiple static websites. Each weekly task opens from a different folder path.

## 5. Week-by-Week Development

### Week 01 — Static Semantic Site

Week 01 creates the base layout using only HTML and CSS. It focuses on semantic structure and clean reusable sections.

Core requirements completed:

- Static website.
- Semantic HTML tags.
- Proper heading order.
- Header and navigation.
- Hero section.
- Six module cards.
- Footer/contact block.
- Image usage with alt text.
- Reusable layout structure.

Screenshots:

![Week 01 Home](screenshots/week-01-home.png)

![Week 01 Grid](screenshots/week-01-grid.png)

### Week 02 — Responsive Design

Week 02 keeps the Week 01 design and adds responsive behavior using CSS media queries.

Core requirements completed:

- Responsive layout.
- Media queries for screen-size changes.
- Grid adaptation.
- Improved spacing on different screens.
- Same base theme preserved.
- Cards remain readable across devices.

Screenshots:

![Week 02 Home](screenshots/week-02-home.png)

![Week 02 Grid Footer](screenshots/week-02-grid-footer.png)

### Week 03 — JavaScript Interaction

Week 03 introduces JavaScript. It keeps the Week 02 responsive structure and adds dynamic user interactions.

Core requirements completed:

- Menu toggle.
- Theme toggle.
- Filter buttons.
- Like counter.
- Dynamic text update.
- Visible card count update.
- JavaScript file linked externally.

Screenshots:

![Week 03 Hero Filters](screenshots/week-03-hero-filters.png)

![Week 03 Grid](screenshots/week-03-grid.png)

![Week 03 Stats Footer](screenshots/week-03-stats-footer.png)

### Week 04 — Form Validation

Week 04 is the final version. It keeps all Week 03 interactions and adds a validated contact form.

Core requirements completed:

- Contact form.
- Name validation.
- Email validation.
- Subject validation.
- Message validation.
- Error message display.
- Success message display.
- Final combined version of static layout, responsiveness, interaction, and validation.

Screenshots:

![Week 04 Final Grid](screenshots/week-04-grid.png)

![Week 04 Contact Form](screenshots/week-04-form.png)

![Week 04 Form Footer](screenshots/week-04-form-footer.png)

## 6. HTML Structure

The weekly pages use a consistent semantic structure:

```html
<header>
  <nav></nav>
</header>

<main>
  <section id="home"></section>
  <section id="projects"></section>
  <section id="links"></section>
  <section id="contact-form"></section>
</main>

<footer id="contact"></footer>
```

Not every section appears in every week. The contact form appears only in Week 04, and the JavaScript controls appear from Week 03 onward.

## 7. CSS Structure

The CSS controls:

- Global reset and base colors.
- Header positioning.
- Navigation style.
- Hero box layout.
- Card/module grid.
- Responsive breakpoints.
- Button design.
- Form design.
- Footer design.

The style is intentionally minimal and architectural, using borders, muted text, uppercase labels, and wide letter spacing.

## 8. JavaScript Functionality

JavaScript is used only in Week 03 and Week 04.

Main functions:

- Toggle mobile navigation.
- Toggle light/dark theme state.
- Update hero text dynamically.
- Filter visible cards by category.
- Count visible modules.
- Increment like counter.
- Validate form fields in Week 04.

## 9. Form Validation Logic

The Week 04 contact form validates four fields:

| Field | Validation |
|---|---|
| Name | Cannot be empty |
| Email | Must match email format |
| Subject | Cannot be empty |
| Message | Cannot be empty |

The form uses custom JavaScript validation instead of default browser validation. This is why the form includes the `novalidate` attribute.

## 10. Deployment Documentation

The project is deployed as a static Vercel project.

### Required files

```text
index.html
vercel.json
Task-1-Sagar-Maheshwari/index.html
Task-2_Sagar_Maheshwari/index.html
Task-3-Sagar-Maheshwari/index.html
Task-4-Sagar-Maheshwari/index.html
```

### Vercel config

```json
{
  "cleanUrls": true,
  "trailingSlash": true
}
```

### Deployment steps

1. Push project files to GitHub.
2. Open Vercel dashboard.
3. Import GitHub repository.
4. Keep framework preset as `Other` or static/default.
5. Do not add any build command.
6. Deploy the project.
7. Open the generated Vercel URL.
8. Test the root page and all four weekly links.

## 11. Testing Checklist

Before final submission, verify the following:

- Root index page opens correctly.
- Week 01 link opens correctly.
- Week 02 link opens correctly.
- Week 03 link opens correctly.
- Week 04 link opens correctly.
- Images load in every week.
- Module cards have visible text.
- Week 03 buttons work.
- Week 03 filters work.
- Week 04 form shows errors for empty/invalid input.
- Week 04 form shows success message for valid input.
- Responsive layout works on smaller screen width.

## 12. Conclusion

This project demonstrates a clean frontend learning path through four sequential stages. The base architectural theme remains consistent across all weeks, while each week adds one important frontend development concept. The final deployed version combines semantic HTML, responsive CSS, JavaScript interaction, and form validation in a single static Vercel deployment.

