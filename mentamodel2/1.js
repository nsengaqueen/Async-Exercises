// Write a javascript function that displays
//  a number every two seconds and stops displaying after 5 seconds

function display (){
    let interval = setInterval(() => {
      console.log(5);
    }, 2000);
   setTimeout(() => {
     clearInterval(interval)
   }, 5000);


}
display()

