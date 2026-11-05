
import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import apiRouter from './server/apiRouter.ts';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve public static assets
const publicDir = path.resolve(process.cwd(), 'public');
const uploadsDir = path.resolve(publicDir, 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.use(express.static(publicDir));
app.use('/uploads', express.static(uploadsDir));

// Mount API routes
app.use('/api', apiRouter);

// Serve the frontend in production
const distDir = path.resolve(process.cwd(), 'dist');

app.use(express.static(distDir));

app.get('*', (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Aura Cuts Server] Running on port ${PORT}`);
});
