function callback_BasedFunction(arg1, arg2, callback) {
  // Perform asynchronous operations
  // Call the callback with the result or error
  setTimeout(() => {
    const result = arg1 + arg2;
    if (result % 2 !== 0) {
      callback(null, result);
    } else {
      callback(new Error("Result is not odd!"), null);
    }
  }, 1000);
}
function Call() {
  console.log("hiiiii");
}
console.log(callback_BasedFunction(1, 3, Call));
