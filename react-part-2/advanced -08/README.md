# Inkflow Blog App

A React blog app styled with plain CSS, with create, read, update, and delete post actions.

## Run it

```bash
npm install
npm run server
```

In a second terminal:

```bash
npm run dev
```

The frontend calls `http://localhost:3001/posts`. The first `npm run server` download uses `npx` to make JSON Server available. If the server is not running, the app stays usable with browser-local demo data; start the server to persist changes in `db.json`.

## Included

- `Navbar`, `BlogForm`, `BlogList`, and `BlogItem` components
- Beginner-friendly `useReducer`, `useEffect`, React Router, Axios, and props
- Add, view, edit, and delete post actions
- JSON Server database seeded with two posts
