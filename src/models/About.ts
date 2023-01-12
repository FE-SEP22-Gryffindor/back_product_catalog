import { sequelize } from '../utils/db';
import { DataTypes } from 'sequelize';

export const Abouts = sequelize.define(
  'abouts',
  {
    header: {
      field: 'header',
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      field: 'description',
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'abouts',
    createdAt: false,
    updatedAt: false,
  },
);
