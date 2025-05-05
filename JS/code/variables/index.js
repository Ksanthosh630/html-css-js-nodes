// function f1(){
//     var a=24
//     {
//          let b=23 
//         const a=23
//         console.log("b:"+b+", const vlaue a:"+a)
//     }
//     console.log(a)
//     console.log(hello)

// }
// f1()

function f2(){
    var a=30;
    if(true){
        const c=30;
        let a=c;
        var D=a+c;
    }
    console.log(D)
    console.log(a)

}
f2()