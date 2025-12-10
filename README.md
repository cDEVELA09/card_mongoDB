[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/FafoBem3)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=21678336)
```markdown
# MERN (no DB) Monorepo — Express API + React client

Structure:
- server/ — Express API (port 3000)
- client/ — React (Vite) client (port 5173)
- .devcontainer/ — Codespaces configuration

Quickstart (after Codespace creation)
1. The devcontainer post-create should have run npm installs for root, server, and client.
2. Start both dev servers from the repository root:
   npm run dev
   - Express server: http://localhost:3000
   - React client: http://localhost:5173
3. In Codespaces open the Ports panel — ports 3000 and 5173 should appear. Click "Open in Browser" to view the client.

Run servers individually:
- Server only:
  cd server
  npm start
- Client only:
  cd client
  npm run dev

Notes:
- CORS is enabled on the API for local development so the React client (on port 5173) can fetch from port 3000.
- Add package-lock.json or yarn.lock to make installs deterministic (recommended before prebuilds).
- If you add native npm modules later (node-gyp), you may need to add python3/build tools. For current lessons, no Python is required.
```