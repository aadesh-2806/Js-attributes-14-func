//////////////////////////////////////////////////////////////line in func /////////////////////////////////////////

/*
function sort()
{console.log('cxgd')}

sort()
VM555:2 cxgd

function sort(asd)
{console.log(asd)}
undefined

sort('aadesh')
VM620:2 aadesh
undefined

function sort(f1,f2)
{console.log(f2);console.log(f1)}
undefined

sort('asd','asdfsa')
VM745:2 asdfsa
VM745:2 asd
undefined

function sort(f1,f2)
{return (f1+f2);}
undefined

let t=sort(2,3)
undefined
t
5

function collec()
{col=6;}
undefined

collec();
undefined

col
6

function collec()
{let col=6;}
collec();
console.log(col)
VM1106:4 6
undefined

let col=0;
function collec()
{col=6;}
console.log(col)
collec();
console.log(col)
VM1136:4 0
VM1136:6 6
undefined

//defined at part from main------func-------main

let col=0;
function collec()
{let col=6;}
console.log(col)
collec();
console.log(col)
VM1181:4 0
VM1181:6 0


//defined at part of------func-------


let col=0;
function collec()
{let col=6;console.log(col)}
collec();
console.log(col)

VM1195:3 6
VM1195:5 0


//here unlike c outer variable is as global vairable


const col=0;
function collec()
{const col=6;console.log(col)}
collec();
console.log(col)
6
0

*/
//////////////////////////////////////////////////////////////block scope/////////////////////////////////////////

/*

let radius=8;

if(radius>0)
{
    const PI=3.14;
    let msg = "hi";
}

console.log(radius);                //scope defined in block are stabltre till block end
console.log(msg)
VM1791:6 8
VM1791:7 Uncaught ReferenceError: msg is not defined
    at <anonymous>:7:13

*/
/*
//lexical------>nested function
undefined
const add = function (x,y){
    return x+y ;
}
undefined
add
ƒ (x,y){
    return x+y ;
}
//are values-------can be passed anywhere
undefined
add(1,2)
3
//high order-------image
undefined
*/
/////////////////////////////////////////////lexical and return type/////////////////////////////////////////////////////

/*
function mx(min,max){
    return function mx1(num){
        return num>=min && num<= max;
    }
}

const x=mx(100,200)
undefined

x(150)
true

x(15)
false

*/