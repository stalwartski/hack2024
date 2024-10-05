const p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve();
    },1*4000)
    console.log("Inside promise p1");
});

// p1 even having more timer than p2 still p1 gets resolved first
// because it waits in the callback queue 

const p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve();
    },1* 2000)
    console.log('Inside promise p2');
});

async function handlePromise(){
    const result = await p1;
    console.log("after await p1");
    const result2 = await p2;
    console.log("after await p2");
}

handlePromise();