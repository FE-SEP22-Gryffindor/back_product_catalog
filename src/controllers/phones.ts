import express from 'express';
import * as phonesService from '../services/phones';
import { AdditionalImages } from "../models/AdditionalImages";

export const getAll = async(req: express.Request, res: express.Response) => {
  const { page, perPage } = req.query;

  const phonesCount = await phonesService.getPhonesCount();
  const numPage = Number(page) || 1;
  const numPerPage = Number(perPage) || phonesCount;

  const phones = await phonesService.getAll(numPage, numPerPage);

  res.setHeader('Access-Control-Expose-Headers', 'phones-count');
  res.setHeader('phones-count', phonesCount.toString());
  res.send(phones);
};

export const getNew = async(req: express.Request, res: express.Response) => {
  const phones = await phonesService.getNew();

  res.send(phones);
};

export const getDiscount = async(
  req: express.Request,
  res: express.Response,
) => {
  const phones = await phonesService.getDiscount();

  res.send(phones);
};

export const getOne = async(req: express.Request, res: express.Response) => {
  const { slug } = req.params;
  const foundFullPhone = await phonesService.getOne(slug);

  if (!foundFullPhone) {
    res.sendStatus(404);

    return;
  }

  res.send(foundFullPhone);
};
