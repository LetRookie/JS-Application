let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (Math.random() > 0.5){
            resolve('Fulfiled');
        }else{
            reject('Not-fulfilled')
        }
    }, 3000)
});

console.log(promise);

promise
.then((result) => console.log(result))
.catch((err)=> console.log(err));
