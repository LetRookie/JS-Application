// async function start() {
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(resolve, 2000, 5);
//     });
//     const result = await myPromise;
//     console.log(result);
// }
// start();

async function promiseAll() {
    try {
        const [r1, r2, r3] = await Promise.all([
            fetch('https://swapi.dev/api/planets/1'),
            fetch('https://swapi.dev/api/planets/2'),
            fetch('https://swapi.dev/api/planets/3')
        ]);
    
        const [d1, d2, d3] = await Promise.all([
            r1.json(),
            r2.json(),
            r3.json(),
        ]);
        console.log(d1, d2, d3);
    } catch (error) {
        console.log(error.message);   
    }

}
promiseAll(); 

module.exports = promiseAll();