/* eslint-disable max-len */
import { sequelize } from '../utils/db';
import { Phone } from '../models/Phone';
import { AdditionalImages } from '../models/AdditionalImages';
import { Abouts } from '../models/About';

export const getPhonesCount = async() => {
  const amountPhones = await Phone.count();

  return amountPhones;
};

export const getAll = async(page: number, perPage: number) => {
  try {
    const { count, rows } = await Phone.findAndCountAll({
      attributes: [
        'slug',
        'name',
        'price',
        'discountPrice',
        'year',
        'screen',
        'memory',
        'ram',
        'image',
      ],
    });

    const startPageItem = perPage * page - perPage + 1;
    const finishPageItem = perPage * page < count ? perPage * page : count;

    const currentPageItems = rows.slice(startPageItem - 1, finishPageItem);

    return currentPageItems;
  } catch (error) {
    throw new Error(`Unable to connect to the database: ${error}`);
  }
};

export const getNew = async() => {
  try {
    const newPhones = await Phone.findAll({
      attributes: [
        'slug',
        'name',
        'price',
        'discountPrice',
        'year',
        'screen',
        'memory',
        'ram',
        'image',
      ],
      limit: 6,
      order: [['year', 'DESC']],
    });

    return newPhones;
  } catch (error) {
    throw new Error(`Unable to connect to the database: ${error}`);
  }
};

export const getDiscount = async() => {
  try {
    const discountPhones = await Phone.findAll({
      attributes: [
        'slug',
        'name',
        'price',
        'discountPrice',
        'year',
        'screen',
        'memory',
        'ram',
        'image',
      ],
      limit: 4,
      order: [['discountPrice', 'DESC']],
    });

    return discountPhones;
  } catch (error) {
    throw new Error(`Unable to connect to the database: ${error}`);
  }
};

const getAdditionalImages = async(slug: string) => {
  try {
    const additionalImages = await AdditionalImages.findAll({
      where: {
        slug: slug,
      },
    });

    return additionalImages;
  } catch (error) {
    throw new Error(`Unable to connect to the database: ${error}`);
  }
};

const getAbouts = async(slug: string) => {
  try {
    const abouts = await Abouts.findAll({
      where: {
        slug: slug,
      },
    });

    return abouts;
  } catch (error) {
    throw new Error(`Unable to connect to the database: ${error}`);
  }
};

export const getOne = async(slug: string) => {
  const findedPhone = await Phone.findByPk(slug);

  const foundAdditionalImages = await getAdditionalImages(slug);
  const additionalImages = foundAdditionalImages.map(img => img.dataValues.link) || [];

  const foundAbouts = await getAbouts(slug);
  const abouts = foundAbouts.map(about => ({
    header: about.dataValues.header,
    description: about.dataValues.description,
  })) || [];

  if (!findedPhone) {
    return null;
  }

  return {
    ...findedPhone.dataValues,
    additionalImages,
    abouts,
  };
};
