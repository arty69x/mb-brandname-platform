import cors from 'cors';
import express from 'express';

import { featuredProducts } from './data';

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: '@forluxury/api' });
});

app.get('/products/featured', (_req, res) => {
  res.json({ items: featuredProducts });
});

app.listen(port, () => {
  console.log(`@forluxury/api running on http://localhost:${port}`);
});
