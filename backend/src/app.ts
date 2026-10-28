import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import crypto from 'node:crypto';
import mongoose from 'mongoose';
import { z } from 'zod';

const app = express();
app.disable('x-powered-by');
if (process.env.NODE_ENV === 'production') app.set('trust proxy', 1);

const allowedOrigins = (process.env.FRONTEND_ORIGIN || 'http://localhost:5173').split(',').map((origin) => origin.trim()).filter(Boolean);
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) callback(null, true);
    else callback(new Error('Origin not allowed'));
  },
  credentials: true
}));
app.use(express.json({ limit: '100kb' }));
app.use(cookieParser());

const sessions = new Map<string, { createdAt: Date }>();
const investigations = new Map<string, { id: string; title: string; status: 'in_progress' | 'completed'; openedEvidenceIds: string[]; accusation: null | { selectedSuspectId: string; isCorrect: boolean } }>();

app.use((req: Request, res: Response, next: NextFunction) => {
  let token = req.cookies?.amr_session as string | undefined;
  if (!token || !sessions.has(token)) {
    token = crypto.randomBytes(32).toString('hex');
    sessions.set(token, { createdAt: new Date() });
    const production = process.env.NODE_ENV === 'production';
    res.cookie('amr_session', token, { httpOnly: true, secure: production, sameSite: production ? 'none' : 'lax', maxAge: 30 * 24 * 60 * 60 * 1000 });
  }
  next();
});

const mysterySchema = z.object({
  scenario: z.string().trim().min(30).max(2000),
  difficulty: z.enum(['easy', 'medium', 'hard']).default('medium'),
  category: z.enum(['murder_mystery', 'theft', 'disappearance', 'blackmail', 'sabotage', 'general_mystery']).default('general_mystery'),
  caseLength: z.enum(['short', 'standard', 'extended']).default('standard')
});

app.get('/api/v1/health', (_req, res) => {
  const databaseState = mongoose.connection.readyState;
  const database = databaseState === 1 ? 'connected' : mongoUriState(databaseState);
  const production = process.env.NODE_ENV === 'production';
  const healthy = database === 'connected' || !production;
  res.status(healthy ? 200 : 503).json({ success: healthy, data: { status: healthy ? 'ok' : 'degraded', database }, error: null });
});

function mongoUriState(state: number) {
  return ['disconnected', 'connected', 'connecting', 'disconnecting'][state] || 'unknown';
}

app.post('/api/v1/mysteries', (req, res) => {
  const parsed = mysterySchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ success: false, data: null, error: { code: 'VALIDATION_ERROR', message: parsed.error.issues[0]?.message || 'Invalid mystery request.' } });
  }
  const investigationId = crypto.randomUUID();
  investigations.set(investigationId, { id: investigationId, title: 'The Missing Diamond', status: 'in_progress', openedEvidenceIds: [], accusation: null });
  return res.status(201).json({ success: true, data: { mysteryId: crypto.randomUUID(), investigationId, status: 'ready', title: 'The Missing Diamond', redirectUrl: `/investigations/${investigationId}` }, error: null });
});

app.get('/api/v1/investigations/:investigationId', (req, res) => {
  const investigation = investigations.get(req.params.investigationId);
  if (!investigation) return res.status(404).json({ success: false, data: null, error: { code: 'NOT_FOUND', message: 'Investigation not found.' } });
  return res.json({ success: true, data: { ...investigation, publicCase: { title: investigation.title, suspects: 4, evidence: 4 } }, error: null });
});

app.post('/api/v1/investigations/:investigationId/evidence/:evidenceId/open', (req, res) => {
  const investigation = investigations.get(req.params.investigationId);
  if (!investigation) return res.status(404).json({ success: false, data: null, error: { code: 'NOT_FOUND', message: 'Investigation not found.' } });
  if (!investigation.openedEvidenceIds.includes(req.params.evidenceId)) investigation.openedEvidenceIds.push(req.params.evidenceId);
  return res.json({ success: true, data: { evidenceId: req.params.evidenceId, opened: true }, error: null });
});

app.post('/api/v1/investigations/:investigationId/accusation', (req, res) => {
  const investigation = investigations.get(req.params.investigationId);
  if (!investigation) return res.status(404).json({ success: false, data: null, error: { code: 'NOT_FOUND', message: 'Investigation not found.' } });
  const selected = z.object({ suspectId: z.enum(['suspect_01', 'suspect_02', 'suspect_03', 'suspect_04']) }).safeParse(req.body);
  if (!selected.success) return res.status(400).json({ success: false, data: null, error: { code: 'VALIDATION_ERROR', message: 'Choose a valid suspect.' } });
  if (investigation.accusation) {
    return res.json({ success: true, data: buildResult(investigation.accusation.selectedSuspectId), error: null });
  }
  const isCorrect = selected.data.suspectId === 'suspect_03';
  investigation.status = 'completed';
  investigation.accusation = { selectedSuspectId: selected.data.suspectId, isCorrect };
  return res.json({ success: true, data: buildResult(selected.data.suspectId), error: null });
});

function buildResult(selectedSuspectId: string) {
  return { isCorrect: selectedSuspectId === 'suspect_03', selectedSuspectId, actualCulprit: { id: 'suspect_03', name: 'Dr. Rowan Vale' }, solution: { motive: 'A disputed professional payment exposed Rowan’s financial motive.', explanation: 'The access log and east-corridor CCTV place Rowan near the restricted archive, contradicting the claimed alibi.', decisiveClues: ['evidence_02', 'evidence_03'] } };
}

app.use((_req, res) => res.status(404).json({ success: false, data: null, error: { code: 'NOT_FOUND', message: 'Route not found.' } }));
app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error);
  res.status(500).json({ success: false, data: null, error: { code: 'INTERNAL_ERROR', message: 'An unexpected server error occurred.' } });
});

export default app;
