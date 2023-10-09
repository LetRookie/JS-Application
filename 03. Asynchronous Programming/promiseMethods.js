let alwaysResolvedPromise = Promise.resolve('YES');
let alwaysRejectedPromise = Promise.reject('NO');
let multiplePromises = [ ]

alwaysResolvedPromise
.then(res => console.log(res))
.catch(() => console.log('Never Used'));

alwaysRejectedPromise
.then(()=> console.log('Never Used'))
.catch((res) => console.log(res));