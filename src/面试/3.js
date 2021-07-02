function checkAge(data) {
    if (data === { age: 18 }) {    // 类型
        console.log("You are an adult!");
    } else if (data == { age: 18 }) {  // 
        console.log("You are still an adult.");
    } else {
        console.log(`Hmm.. You don't have an age I guess`); // 输出
    }
}

checkAge({ age: 18 });
// 因为对象的相等判断，要比较两个对象的栈地址是否相等


// { age: 18 } === { age: 18 }  // 不相等
// {} = {}

// Object.is()  NaN，+0，-0

// 基本类型

// str
// Num


function fn(obj) {
    obj.title = 'xxx';  // 输出
    obj = { title: 'yyy' };
    obj.title = 'aaa';
}
let obj = { title: 'bbb' };
fn(obj);
console.log('第二题：', obj.title);

// xxx?
// 函数参数传递，按值传递



var company = {
    address: 'beijing'
}
var yideng = Object.create(company);
delete yideng.address   // 没有删除原型上的属性
console.log('第三题：', yideng.address); // beijing

