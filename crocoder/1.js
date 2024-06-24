function myfunc(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number === 4) {
        resolve("Hello World");
      } else {
        reject("Error occurred");
      }
    }, 2000);
  });
}
myfunc(4)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
