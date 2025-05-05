function f1(){
    console.log('with space printing * ');

    const n=4;
    const s1="*"
    var s3="";

    for(let i=1;i<=n;i++)
         {
            var s="";
            for(let j=1;j<=i;j++)
            {
                s=s.concat( s1+" "+" ")
            }
           // console.log(s);
           
            s3=s3.concat(s+"\n")
            
         }
         console.log(s3);
}
f1();

console.log()

let arr = [5, 4, 9, 8, 1];
for (let i = 0; i <= arr.length-1; i++) {
	console.log(arr[i])
}
console.log("\n")

// for of
for (let e of arr)//e is element here
{
    console.log(e)
}
console.log("\n")

let obj = {
    name: "prasad",
    age:50
}
// for in
for (let e in obj) // e is key or index here
{
    console.log(obj[e], e)
}