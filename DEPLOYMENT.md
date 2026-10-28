# Deployment Walkthrough

## 1. Rotate exposed credentials

Before deployment, revoke and replace any API keys or database passwords that have been pasted into source files or chat. Create a new MongoDB database user and a new Gemini API key. Do not commit either credential.

## 2. Deploy MongoDB Atlas

1. Create a MongoDB Atlas cluster or use an existing cluster.
2. Add the backend provider's outbound IP range to Network Access, or temporarily use `0.0.0.0/0` only while testing.
3. Create a database user with read/write access.
4. Copy the connection string and add the database name, for example `...mongodb.net/ai-mystery-room`.
5. Do not put the password in repository files.

## 3. Deploy the API on Render

1. Push the repository to GitHub.
2. In Render, choose **New > Blueprint** and select the repository.
3. Render will detect `render.yaml` and create the API service.
4. Enter these environment variables in Render:
   - `MONGODB_URI`
   - `GEMINI_API_KEY`
   - `GEMINI_MODEL`
   - `FRONTEND_ORIGIN=https://your-project.vercel.app`
   - Keep `NODE_ENV=production`
5. Deploy and verify `https://your-api.onrender.com/api/v1/health`.

You may also choose Render Web Service manually with:
- Root directory: `backend`
- Build command: `npm install && npm run build`
- Start command: `npm run start`

## 4. Deploy the frontend on Vercel

1. Import the GitHub repository in Vercel.
2. Set the root directory to `frontend`.
3. Use framework preset `Vite`.
4. Add environment variable `VITE_API_URL=https://your-api.onrender.com`.
5. Deploy.

## 5. Connect production domains

After the frontend is deployed, copy its Vercel URL and set Render's `FRONTEND_ORIGIN` to it. Redeploy the API if needed. There must be no trailing slash in that origin.

For multiple frontend domains, use comma-separated origins, for example:

```text
https://app.example.com,https://preview.example.com
```

## 6. Configure the production cookie

The backend uses HTTPS, `HttpOnly`, `Secure`, and `SameSite=None` cookies in production. Keep both services on HTTPS. A custom frontend domain requires the Render API's cookie domain and CORS origin to be tested in the final browser environment.

## 7. Verify deployment

1. Open the Vercel URL.
2. Create a mystery.
3. Confirm the browser calls the Render `/api/v1/mysteries` endpoint.
4. Open browser Network and Application/Cookies tabs and verify the guest cookie exists.
5. Open `/investigations/demo` or the returned investigation route.
6. Check Render logs for startup and database connection status.

## Current deployment boundary

The repository now contains deployment configuration, but the first implementation is a frontend prototype plus a small API. To match the complete specification, MongoDB persistence and Gemini mystery generation still need to be implemented before replacing the generated fixture flow.
