// get dynamic image url
export const getImgURL = (fileName) => {
  return new URL(`../assets/images/${fileName}`, import.meta.url).href;
};
