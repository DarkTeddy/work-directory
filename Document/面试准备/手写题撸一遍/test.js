// async function async1() {
//     console.log("async1 start");
//     await async2();
//     console.log("async1 end");
//   }
//   async function async2() {
//     console.log("async2");
//   }
//   async1();
//   console.log('start')




function async1(){
    console.log('async1 start');
    new Promise(resolve => {
        new Promise(res => console.log('promise1'));
    }).then(_ => {
        console.log('async1 success');
        return Promise.resolve('async1 end');
    })

    return Promise.resolve()
}

console.log('script start');
async1().then(res => console.log(res));
console.log('script end');



3
7
4
1
2
5
promise<resolved> 1
