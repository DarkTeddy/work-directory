const a = [1,2,3];

Object.defineProperty(a,3,{
    set(newValue){
        console.log('新的值',newValue);
    }
})
a[3] = 20;