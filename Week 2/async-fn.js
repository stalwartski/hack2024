function onDone() {
    console.log("Hi there from onDone")
}

setTimeout(onDone, 4000);
let sum = 0;
for (let i = 0; i < 10000000000; i++) {
    sum = sum + i;
}
console.log(sum);

// the sum gets printed first and then the setTimeout fn even 
// if the sum function takes 26 seconds and setTimeout fn takes 4 seconds
// because setTimeout fn is async in nature and waits in callback queue until sum gets executed

// other async ex: readFile, sending network request  