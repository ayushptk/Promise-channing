let p1=new Promise ((resolve,reject)=>
  {
    setTimeout(()=>
      {
        resolve("resolved after 2 seconds");
      },2000);
  });
p1.then((value)=>
  {
    console.log(value);
    let p2=new Promise((resolve,reject)=>
      {
        setTimeout(()=>{
          resolve("promise 2");
        },2000)
        
        
      })
    return p2
    
  }).then(value=>{ // we can use .then() to chain promises and make them pass the resolved value to another .then() handler.
  console.log("we are done");
  return 2
  }).then(()=>{
  console.log("now we are sure  done");
  })