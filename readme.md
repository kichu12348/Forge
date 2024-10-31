# Forge Framework

Forge is a lightweight web framework for creating server-side rendered React applications on an Express backend. It features folder-based routing, dynamic bundling, and automated client-side hydration, inspired by frameworks like Next.js but with a custom, minimalist approach.

## Features
- **File-Based Routing**: Routes are defined by directory structure.
- **SSR with React**: Pages are rendered on the server and hydrated on the client.
- **Dynamic Bundling**: Each page is individually bundled for faster load times.
- **Frontend Caching**: Static files are cached to boost performance.

## Project Structure

```
forge/
├── client/
│   ├── public/       # Static assets
│   └── src/          # Source files
│       └── pages/    # Routes (each folder is a route)
├── server/           # Express backend
└── .forge/           # Bundled client pages
```

## Installation and Usage

### 1. Install dependencies
To install the necessary dependencies, run:
```bash
npm install
```

### 2. Available Scripts
- **`npm run dev`**: Starts the development server with dynamic bundling.
- **`npm run build`**: Builds the project for production.
- **`npm start`**: Launches the production server.

### 3. Setting Up Pages
To set up pages, create a folder in `client/src/pages` for each route and add a `page.js` file as the main component for that route. Optionally, you can add a `styles.css` file for page-specific styling.

Example: `client/src/pages/home/page.js` will map to the `/home` route.

### 4. Run the Project
To run the project, use the following command:
```bash
npm run dev
```

Then, visit `http://localhost:3000` in your browser to see the application.

## License
This project is licensed under the MIT License.

## I'm Betmen

![Betmen GIF](https://media1.tenor.com/m/oFsEtUUE0_MAAAAC/cat-cute-cat.gif)

Just kidding! But if I were, this project would be even more awesome haha. Keep coding and have fun! 🙃
