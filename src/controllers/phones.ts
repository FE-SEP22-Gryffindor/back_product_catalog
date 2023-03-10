import express from 'express';
import * as phonesService from '../services/phones';

export const getAll = async(req: express.Request, res: express.Response) => {
  const { page, perPage } = req.query;

  const numPage = Number(page) || 1;
  const numPerPage = Number(perPage) || phonesService.getPhonesCount();

  const goods = await phonesService.getAll(numPage, numPerPage);

  res.setHeader('Access-Control-Expose-Headers', 'phones-count');
  res.setHeader('phones-count', phonesService.getPhonesCount().toString());
  res.send(goods);
};
