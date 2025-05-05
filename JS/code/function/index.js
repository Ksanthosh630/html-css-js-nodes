// let a=[1,2,3,4],sum=0
// a.forEach(function(v,i)
// {
// sum=sum+v;
// }
// )
// console.log(sum);


let arr=[[10,20],[30,40]] // input
  //o/p:[30,470]]
  arr2=[]

   arr.forEach( (val)  => // shortcut function usage use '=>'
        {
           console.log(val)
           console.log("above values are inputs,which sum respectively")
            let sum=0;
           val.forEach(function(v)
              {
                     sum=sum+v;
              })
              arr2.push(sum);
         })
         console.log(arr2)
console.log("_________________________________________________________________________")
         console.log("now using '=>' one in function intrnally without writing function keywowrd\n____________________________________________________________________________")


         arr.forEach( function(val)  
        {
           console.log(val)
           console.log("above values are inputs,which sum respectively")
            let sum=0;
           val.forEach((v)=>
              {
                     sum=sum+v;
              })
              arr2.push(sum);
         })
         console.log(arr2)
         
         console.log("_________________________________________________________________________")

   const add=(a,b)=>
      {
        let c=a+b;
        let d= c;
        return d;
                
   };
  console.log( add +" :--->giving function" ) //retuns function
  console.log( add(5,2)+":---> giving value" ) //retunns value

