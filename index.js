module.exports = ({ publish }) => ({ payload }) => {
  const info = [payload];
  console.log(JSON.stringify(info));
};
