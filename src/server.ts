import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import { phonesRouter } from './routes/phones';
import { tabletsRouter } from './routes/tablets';
import { accessoriesRouter } from './routes/accessories';

const router = express.Router();

const app = express();

app.use(cors());

router.get('/', (req, res) => {
  res.json({
    hello: 'Gryffindor',
  });
});

app.use('/.netlify/functions/server', router);

app.use('/.netlify/functions/server/phones', phonesRouter);
app.use('/.netlify/functions/server/tablets', tabletsRouter);
app.use('/.netlify/functions/server/accessories', accessoriesRouter);

export const handler = serverless(app);
