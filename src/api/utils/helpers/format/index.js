export const toThousands = number => {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const ucFirst = value => {
  if (typeof value !== 'string') return 'Lorem';

  return value.charAt(0).toUpperCase() + value.slice(1);
};
