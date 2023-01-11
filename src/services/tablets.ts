const tablets: any[] = [];

export const getTabletsCount = () => {
  return tablets.length;
};

export const getAll = async(page: number, perPage: number) => {
  const count = getTabletsCount();

  const startPageItem = perPage * page - perPage + 1;
  const finishPageItem = perPage * page < count ? perPage * page : count;

  const currentPageItems = tablets.slice(startPageItem - 1, finishPageItem);

  return currentPageItems;
};
