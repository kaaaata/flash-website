window.to6 = (array) => {
  let divisions = Math.ceil(array.length / 6);
  let ret = Array(divisions);
  for (let i = 0; i < divisions; i++) {
    ret[i] = array.slice(6 * i, 6 * i + 6);
  }
  return ret;
};