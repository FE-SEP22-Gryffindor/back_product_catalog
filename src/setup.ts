/* eslint-disable no-console */
import { Good } from './models/Good';
import { Color } from './models/Color';
import { db } from './utils/db';

(async() => {
  await Good.sync({ force: true });
  await Color.sync({ force: true });

  await Color.create({
    name: 'green',
  });

  await Color.create({
    name: 'blue',
  });

  await Color.create({
    name: 'red',
  });

  await db.close();

  console.log('synced!');
})();
