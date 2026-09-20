# Priya's Apology, Comfort & Chaos Website 🥺❤️

A ridiculous, heartfelt, interactive apology site — built with React, Vite,
Tailwind CSS, Framer Motion, and Lucide icons. No backend, no database, no
login, nothing tracked.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm install
npm run build
```

This outputs a static site into the `dist/` folder. You can preview the
production build locally with:

```bash
npm run preview
```

## Deploying to Render (Static Site)

1. Push this project to a GitHub repository.
2. Go to [Render](https://render.com) and click **New → Static Site**.
3. Connect your GitHub account and select the repository.
4. Set the build command:
   ```text
   npm install && npm run build
   ```
5. Set the publish directory:
   ```text
   dist
   ```
6. Click **Create Static Site** and let Render deploy it.
7. Once deployed, Render gives you a live URL — that's the link you send Priya.

## Project structure

```text
package.json
vite.config.js
tailwind.config.js
postcss.config.js
index.html
README.md

src/
  components/    All page sections and interactive bits
  styles/        Global CSS (Tailwind entry point)
  App.jsx        Wires all sections together + easter eggs
  main.jsx       React entry point

public/          Static assets (drop soundtrack.mp3 here if you want music)
```

## Notes

- The optional "Play our soundtrack" button looks for `/public/soundtrack.mp3`.
  If you don't add a file there, the button simply does nothing when clicked —
  no errors, no autoplay, nothing broken.
- The Google Doodle Hunt section links out to Google's official
  [Quick, Draw!](https://quickdraw.withgoogle.com/) game and
  [Doodles archive](https://www.google.com/logos/) — nothing from Google is
  reproduced or rehosted here.
- Respects `prefers-reduced-motion` and is keyboard-navigable throughout.
