function display(time) {
  return new Promise(function (myResolve, myReject) {
    setInterval(() => {
      myResolve("Wake up person");
    }, time * 2000);
  })
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
}

display(7);
