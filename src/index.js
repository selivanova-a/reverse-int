module.exports = function reverse (n) {
  if (n < 0) n *= -1;
  let string = n.toString();
  return string.split('').reverse().join('');
};
