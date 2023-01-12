const accessories: any[] = [];

export const getaccessoriesCount = () => {
  return accessories.length;
};

export const getAll = async(page: number, perPage: number) => {
  const count = getaccessoriesCount();

  const startPageItem = perPage * page - perPage + 1;
  const finishPageItem = perPage * page < count ? perPage * page : count;

  const currentPageItems = accessories.slice(startPageItem - 1, finishPageItem);

  return currentPageItems;
};
