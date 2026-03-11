function sum()
{
    let a=10;
    return function()  //inner function
    {
        let b=20;
        return a+b;
    };
}


let result=sum() //outer function ,it stores the data which  is return by the sum() i.e it return  function
console.log(result())


//^ Rest parameter : it can receive 'n' number of values ,whereas normal parameter can receive only one value
// when we keep ... before spread operator it is called the rest parameter

function getSum(...a){
   return a.reduce((x,y)=>x+y)
}

console.log(getSum(10,20))
console.log(getSum(10,20,50,35,37,90))
console.log(getSum(76,56,32,12,87))


/*Controllers

const getUsers=(req,res)=>{} //controller 
    app.get(path,getUsers) //api route


app.route.js 
app.controller.js 
*/

