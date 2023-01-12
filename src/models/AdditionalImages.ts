import { sequelize } from '../utils/db';
import { DataTypes } from 'sequelize';

export const AdditionalImages = sequelize.define(
  'additionalImages',
  {
    link: {
      field: 'link',
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'additionalImages',
    createdAt: false,
    updatedAt: false,
  },
);
