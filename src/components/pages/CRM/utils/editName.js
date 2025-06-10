export const editName = (text) => {
  const startName = text.trim().slice(0, 1).toUpperCase();
  const endName = text.trim().slice(1).toLowerCase();
  const result = startName + endName;
  return result;
};
