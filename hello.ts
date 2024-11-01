// ts描述对象有哪些方法？
type A1 = {
    name: string,
    age: number
}

type A2 = {
    [k: string]: string | number; // 这种方式就是索引签名
};


type A3 = Record<string, number>;


// ts声明数组有呢些方法？
type Arr1 = string[];
type Arr2 = Array<string>;
type Arr3 = [string,number] // 这个其实是元祖，是规定了数量以及对应属性的数组


type FnA = (a: number, b: number) => number;
const a: FnA = (x,y) =>{
    return 1;
}


type Person = {
    name: string,
    age: number,
}

type FnWithThis = (this: Person, name: string) => void
const sayHi: FnWithThis = function(){
    console.log('hi' + this.name);
}

const x: Person = {
    name:' lgq',
    age: 10,
}

x.sayHi('123');