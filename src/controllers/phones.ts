import express from 'express';
import * as phonesService from '../services/phones';

export const getAll = async(req: express.Request, res: express.Response) => {
  const { page, perPage } = req.query;

  const numPage = Number(page) || 1;
  const numPerPage = Number(perPage) || phonesService.getPhonesCount();

  const goods = await phonesService.getAll(numPage, numPerPage);

  res.send(goods);
};
