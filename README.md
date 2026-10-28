# AI Mystery Room

A MERN detective investigation experience that turns user-written scenarios into playable AI-generated mysteries.

## Development

```bash
npm install
npm run dev
```

Frontend: `http://localhost:5173`  
Backend health: `http://localhost:4000/api/v1/health`

Copy `.env.example` to `.env` and configure Gemini and MongoDB before using AI generation in production.

## Deployment

The recommended production arrangement is Vercel for the React frontend and Render for the Express backend, with MongoDB Atlas for data.

Follow the complete walkthrough in [DEPLOYMENT.md](DEPLOYMENT.md). The repository includes Render and Vercel configuration files.

Security note: rotate any Gemini key, MongoDB password, or session secret previously pasted into an environment file, terminal, chat, or repository.
