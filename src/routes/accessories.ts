import express from 'express';
import * as accessoriesController from '../controllers/accessories';

export const accessoriesRouter = express.Router();

accessoriesRouter.get('/', accessoriesController.getAll);
