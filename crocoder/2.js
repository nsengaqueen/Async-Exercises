function myfunc(num) {
  return new Promise((resolve) => {
    resolve(num);
  });
}
function adding(num) {
  return num * 2;
}
function increase(num) {
  return num + 10;
}
myfunc(4)
  .then(adding)
  .then(increase)
  .then((result) => {
    console.log(result);
  });
