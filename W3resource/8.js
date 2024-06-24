function repeatedly (fn,interval){
   let interval = setInterval(()=>{
        console.log('repeated')

    },1000)
    setTimeout(()=>{
  clearInterval(interval)
    },3000)


}


