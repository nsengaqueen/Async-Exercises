const obj = {
  name: "Object",
  method: function () {
    console.log(this); // `this` refers to `obj`
  },
};

setTimeout(obj.method, 1000); // `this` will not refer to `obj` because `obj.method` is passed as a regular function
