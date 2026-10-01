# Nashrah Irshad — Portfolio

React + Vite portfolio (dark purple glassmorphism, CSS 3D tilt, particle background).

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Update content (no component changes needed)
All content lives in `src/data/`:
- `profile.js` — name, email, GitHub, LinkedIn, CV link, stats, typing words, `FORM_ENDPOINT`
- `skills.js`, `projects.js`, `certificates.js`, `education.js`, `experience.js`, `services.js`

Images are in `src/assets/` (import them in the data file and set `img`).
For your CV, put `cv.pdf` in a `public/` folder and set `cv:"/cv.pdf"` in `profile.js`.

## Contact form -> your Gmail
1. Create a free form at https://formspree.io for nashrairshad4@gmail.com
2. Paste its URL into `FORM_ENDPOINT` in `src/data/profile.js`
Without it, the form opens the visitor's email app instead.

## Deploy
- **Vercel / Netlify:** import the GitHub repo, build command `npm run build`, output `dist`.
- **GitHub Pages:** upload the contents of `dist/` (the build uses relative paths).
