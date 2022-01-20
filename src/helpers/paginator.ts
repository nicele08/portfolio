const Paginate = (size, toPaginate = []) => {
  const chunks = [];
  const times = size || 3;
  let i = 0;
  const n = toPaginate !== null ? toPaginate.length : 0;

  while (i < n) {
    chunks.push(toPaginate.slice(i, (i += times)));
  }
  return chunks;
};

export default Paginate;
