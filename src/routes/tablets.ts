import express from 'express';
import * as tabletsController from '../controllers/tablets';

export const tabletsRouter = express.Router();

tabletsRouter.get('/', tabletsController.getAll);
