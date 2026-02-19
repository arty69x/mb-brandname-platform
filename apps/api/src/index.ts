import cors from 'cors';
import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: '@forluxury/api' });
});

app.listen(port, () => {
  console.log(`@forluxury/api running on http://localhost:${port}`);
});
