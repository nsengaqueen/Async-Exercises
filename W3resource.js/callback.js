

function Cally (callback){
    setTimeout(()=>{
    console.log('am the callback')
    callback()
    },2000)


}

//or
 
function invokeAfterDelay(callback) {
  setTimeout(callback, 2000);
}


function delayed(){
    console.log('am the callback')
}

invokeAfterDelay(delayed);