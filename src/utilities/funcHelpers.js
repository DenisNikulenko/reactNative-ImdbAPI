export const isExist = (movie, bookmarksList) => {
  if (bookmarksList.filter((item) => item.id === movie.id).length > 0) {
    return true;
  }
  return false;
};