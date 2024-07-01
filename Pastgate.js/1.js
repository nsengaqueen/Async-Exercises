function repeatEvery(func, interval) {
  setInterval(func, interval);
}

function hi() {
  console.log("hello");
}

repeatEvery(hi, 2000);
