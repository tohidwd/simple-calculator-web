let li = document.getElementsByClassName('one');
let display = document.getElementById('display');
let plase = document.getElementById('plase');
let minase = document.getElementById('two');
let final = document.getElementById('three');
let intu = document.getElementById('six');
let bag = document.getElementById('nine');


let Number1 = '';
let Number2 = '';
let calc = '';
let justDone = false;

function instructor(){
    display.innerHTML = Number1 + calc + Number2;
} ;

for(let i of li){
    i.addEventListener('click',function(){
            if(justDone === true){
            Number1 = '';
            Number2 = '';
            calc = '';
            justDone = false;
        }
        if(calc === ""){
            Number1 += i.textContent;
        }else{
            Number2 += i.textContent;
        }
        instructor();
    })
};

plase.addEventListener('click',function(){
    calc = '+';
});
minase.addEventListener('click',function(){
    calc = '-';
});
intu.addEventListener('click',function(){
    calc = '*';
});
bag.addEventListener('click',function(){
    calc = '/';
});



final.addEventListener('click',function(){

    let result;
    let a = Number(Number1);
    let b = Number(Number2);

    if(calc === "+"){ result = a + b};
    if(calc === "-"){result = a - b};
    if(calc === "*"){result = a * b};
    if(calc === "/"){result = a / b};

    display.innerHTML = result;

    Number1 = String(result);
    Number2 = '';
    calc = '';

    justDone = true;

});







// let num1 = '';       // প্রথম সংখ্যা
// let num2 = '';       // দ্বিতীয় সংখ্যা
// let op = '';         // + - * /
// let justDone = false; // = চাপার পর true হবে

// function show() {
//     display.innerHTML = num1 + ' ' + op + ' ' + num2;
// }

// // সংখ্যা বোতাম (0-9)
// for (let i of li) {
//     i.addEventListener('click', function () {
//         if (justDone) {          // আগের হিসাব শেষ, নতুন করে শুরু
//             num1 = '';
//             justDone = false;
//         }
//         if (op === '') {
//             num1 += i.textContent;
//         } else {
//             num2 += i.textContent;
//         }
//         show();
//     });
// }

// // হিসাব করার ফাংশন
// function calculate() {
//     let a = parseFloat(num1);
//     let b = parseFloat(num2);
//     let result;

//     if (op === '+') result = a + b;
//     else if (op === '-') result = a - b;
//     else if (op === '*') result = a * b;
//     else if (op === '/') { if (b === 0) {
//             display.innerHTML = 'Error';
//             num1 = '';
//             num2 = '';
//             op = '';
//             return;
//         }
//         result = a / b;
//     }

//     num1 = String(result);
//     num2 = '';
//     op = '';
// }

// // অপারেটর বোতাম
// function setOperator(symbol) {
//     if (num1 === '') return;
//     if (num2 !== '') calculate();   // 5 + 3 + ... হলে আগে ৮ হবে
//     op = symbol;
//     justDone = false;
//     show();
// }

// plase.addEventListener('click', function () { setOperator('+'); });
// minase.addEventListener('click', function () { setOperator('-'); });
// intu.addEventListener('click', function () { setOperator('*'); });
// bag.addEventListener('click', function () { setOperator('/'); });

// // = বোতাম
// final.addEventListener('click', function () {
//     if (num1 === '' || op === '' || num2 === '') return;
//     calculate();
//     justDone = true;
//     display.innerHTML = num1;
// });