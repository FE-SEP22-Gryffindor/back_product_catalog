import express from 'express';
import * as phonesController from '../controllers/phones';

export const phonesRouter = express.Router();

phonesRouter.get('/', phonesController.getAll);
phonesRouter.get('/new', phonesController.getNew);
phonesRouter.get('/discount', phonesController.getDiscount);
