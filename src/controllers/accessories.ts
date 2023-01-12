import express from 'express';
import * as accessoriesService from '../services/accessories';

export const getAll = async(req: express.Request, res: express.Response) => {
  const { page, perPage } = req.query;

  const accessoriesCount = await accessoriesService.getaccessoriesCount();
  const numPage = Number(page) || 1;
  const numPerPage = Number(perPage) || accessoriesCount;

  const accessories = await accessoriesService.getAll(numPage, numPerPage);

  res.setHeader('Access-Control-Expose-Headers', 'phones-count');
  res.setHeader('phones-count', accessoriesCount.toString());
  res.send(accessories);
};
