# Blog App (React + Redux + Thunk + JSON Server + Bootstrap)

## Quick Start
```bash
# 1) Install deps
npm install

# 2) Run fake API
npm run json-server
# -> serves http://localhost:5000/posts

# 3) In another terminal, run the app (Create React App)
npm start
```

If you don't have CRA `react-scripts` globally, install via `npx create-react-app` or add it:
```bash
npm install --save react-scripts
```

## Login (demo)
- Go to **/login**
- Use any email/password; it simply stores a token in `localStorage` for demo.

## Features implemented
- CRUD on posts (title, description, date, image, category, author, popularity)
- Sorting by date or popularity
- Filtering by category or author
- Simple authentication + PrivateRoute (only logged-in users can add/edit/delete)
- Bootstrap UI + responsive Navbar
