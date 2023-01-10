import { sequelize } from '../utils/db';
import { DataTypes } from 'sequelize';

export const Phone = sequelize.define(
  'phone',
  {
    slug: {
      field: 'slug',
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      field: 'name',
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      field: 'price',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discountPrice: {
      field: 'discountPrice',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    color: {
      field: 'color',
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      field: 'year',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    screen: {
      field: 'screen',
      type: DataTypes.STRING,
      allowNull: false,
    },
    resolution: {
      field: 'resolution',
      type: DataTypes.STRING,
      allowNull: false,
    },
    processor: {
      field: 'processor',
      type: DataTypes.STRING,
      allowNull: false,
    },
    ram: {
      field: 'ram',
      type: DataTypes.STRING,
      allowNull: false,
    },
    memory: {
      field: 'memory',
      type: DataTypes.STRING,
      allowNull: false,
    },
    camera: {
      field: 'camera',
      type: DataTypes.STRING,
      allowNull: false,
    },
    zoom: {
      field: 'zoom',
      type: DataTypes.STRING,
      allowNull: false,
    },
    cell: {
      field: 'cell',
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      field: 'image',
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'phones',
    createdAt: false,
    updatedAt: false,
  },
);
