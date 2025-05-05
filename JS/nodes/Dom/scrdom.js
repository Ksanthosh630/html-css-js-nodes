//console.log(document)
//   let x = document.getElementsByClassName('bujji')
//  console.log(x[0].textContent);
//  console.log(x[1].textContent);
 
 

//  let f= document.getElementById('chitti')
//  console.log(f.textContent);
 
// let y = document.getElementsByClassName('bujji')
// console.log(y[2]); //undefined




// let z = document.getElementById('chitti');
// console.log(z);// showing with tags

// let p = document.querySelector('.bujji');
// console.log(p);

// let q = document.querySelectorAll(".bujji")
// console.log(q[0].textContent+" , "+  q[1].textContent);

function changeChitti ()
{
    let element = document.getElementById("chitti")
		console.log(element.textContent) // thisoutput we can see in console page
		element.textContent = "Bye bye DOM"
}
let value = 0;
let c = document.getElementById("count")
function incr ()
{
    value++;
    c.textContent = value
}
function decr() {
	value--
	c.textContent = value
}
function reset ()
{
    value = 0;
c.textContent = value
}