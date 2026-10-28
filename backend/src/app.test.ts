import { describe, expect, it } from 'vitest';
import request from 'supertest';
import app from './app.js';

describe('AI Mystery Room API', () => {
  it('reports health', async () => {
    const response = await request(app).get('/api/v1/health');
    expect(response.status).toBe(200);
    expect(response.body.data.status).toBe('ok');
  });

  it('rejects short scenarios', async () => {
    const response = await request(app).post('/api/v1/mysteries').send({ scenario: 'too short' });
    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
  });
});
