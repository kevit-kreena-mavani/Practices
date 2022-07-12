let getCounter = () => {
    let count=0;
    return function(){
    
        return count++;
    }
}
let app = getCounter();

console.log(app)
let data = app()
console.log(data);
let data2 = app();
console.log(data2)