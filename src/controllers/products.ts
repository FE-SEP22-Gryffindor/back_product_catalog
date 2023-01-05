import express from 'express';
import * as productsService from '../services/products';

export const getAll = async(req: express.Request, res: express.Response) => {
  const goods = await productsService.getAll();

  res.send(goods);
};
