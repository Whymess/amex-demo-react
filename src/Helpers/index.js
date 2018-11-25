const returnArray = (data=[]) => {
  if(data.length === 0) throw new Error('No data')

  let key = Object.keys(data).map((key, i) => {
    return key;
  });

  return data[key].map((el, i) => {
    return el;
  });
};

export { returnArray };
