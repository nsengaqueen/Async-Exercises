function createAlarm(name, time) {
  return new Promise(function (myResolve, myReject) {
    if (time < 2) {
      myReject(" Delay is not sufficient");
    } else {
      setTimeout(() => {
        myResolve("Wake up person");
      }, time * 1000);
    }
  })
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
}

createAlarm("john", 7);
