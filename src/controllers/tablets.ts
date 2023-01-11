import express from 'express';
import * as tabletsService from '../services/tablets';

export const getAll = async(req: express.Request, res: express.Response) => {
  const { page, perPage } = req.query;

  const tabletsCount = await tabletsService.getTabletsCount();
  const numPage = Number(page) || 1;
  const numPerPage = Number(perPage) || tabletsCount;

  const tablets = await tabletsService.getAll(numPage, numPerPage);

  res.setHeader('Access-Control-Expose-Headers', 'phones-count');
  res.setHeader('phones-count', tabletsCount.toString());
  res.send(tablets);
};
