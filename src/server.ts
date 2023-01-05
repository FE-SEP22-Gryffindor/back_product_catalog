import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import { productsRouter } from './routes/products';

const router = express.Router();

const app = express();

app.use(cors());

router.get('/', (req, res) => {
  res.json({
    hello: 'Gryffindor',
  });
});

app.use('/.netlify/functions/server', router);

app.use('/.netlify/functions/server/products', productsRouter);

export const handler = serverless(app);
