// 实现sleep 函数
await sleep(3)
console.log('run') 

// 

function sleep(fn, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(fn)
        }, time)
    })
}

let callback = ()=>{
    console.log('lal')
}

async function test(){
    await sleep(callback, 1000)
}


// 5.
// 实现 fn(5).add(3).minus(2).equal()  === 6

// 6. 
// 写方法实现在一个区间随机抓去n个整数且不能重复，最少执行Math.random方案
function res(start, end, num){

}

// 7. 泛型
fun1(p:T)<T>:T{

} 
















