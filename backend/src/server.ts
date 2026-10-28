import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app.js';

const port = Number(process.env.PORT || 4000);
const mongoUri = process.env.MONGODB_URI;

async function start() {
  if (!mongoUri) {
    console.warn('MONGODB_URI is not configured; using in-memory development state.');
  } else {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
  }

  app.listen(port, () => console.log(`AI Mystery Room API listening on port ${port}`));
}

start().catch((error) => {
  console.error('Server startup failed', error instanceof Error ? error.message : 'Unknown error');
  process.exit(1);
});
