const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p1')
    },10000)
   
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2");
  }, 40000);
});
async function handlePromise(){
   
     console.log("hello");

    const val1 = await p1;
    console.log('namaste1')
    console.log(val1)

    const val2 = await p2;
    console.log("namaste2");
    console.log(val2);
}

handlePromise();
