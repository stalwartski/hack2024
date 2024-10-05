function promisifiedMyOwnSetTimeout(duration) {
    const p = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, duration);
    });
    return p;
}

const ans = promisifiedMyOwnSetTimeout(2000);
ans.then(function () {
    console.log("timeout is done");
});