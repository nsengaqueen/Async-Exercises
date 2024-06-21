/*
Write a javascript function that changes the background color of the body (HTML tag) every 3 seconds.
*/
const changeColor = () => {
  let colors = ["#636cff", "#f0f2f5", "#18171f"];
  setInterval(() => {
    let random = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[random];
  }, 3000);
};

changeColor();
