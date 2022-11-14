// Q1: Write a program that takes a positive integer from user &
// display the following in your browser.
//  a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 

// solution:

let a=Math.trunc(parseInt(prompt("enter any number")));

console.log(`${a}`)

let b=Math.round((prompt("enter any decimal number")));

console.log(` ${b}`);

let c=Math.ceil((prompt("enter any decimal number")));

console.log(` ${c}`);

let d=Math.floor((prompt("enter any decimal number")));

console.log(` ${d}`);

// // Q3: Write a function that squares its argument.  

let x =parseInt(prompt("enter any number to find square"))
let y=Math.sqrt(x);

// console.log(`${y}`)

// // Q4: Write a function that computes factorial of a number.
// // solution:
 var factNum =parseInt((prompt("enter any number to find factorial")));
 var fact=1;
 for(i=fact ; i>=1 ; i--){
    fact =fact*i
 }
console.log(fact)






// Q6: Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence  

//   “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui

// solution:

function findOccurrences() {
  var str = prompt("please enter any sentence");
  var chars = str.toLowerCase().split("");
  var count = 0;
  
  for(let i = 0; i < chars.length - 1; i++) {
    var char = chars[i];
    var test = chars[i + 1];
    
    if(isCorrectCharacter(char) && isCorrectCharacter(test)) {
      count++
    }
  }
  
  return count;
}

// Check if a character is any of the following: aeiou
function isCorrectCharacter(char) {
  switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
}

var result = findOccurrences();

console.log(`vowel found ${result} times`);                                   



// Q5 Write a custom function power ( a, b ), to calculate the value of
// a raised to b

function power(base, exponent) {
  var result = 1;
  if(exponent == undefined) {
    exponent = 2;
  }
  for(var i=1; i<=exponent; i++) {
    result = result * base;
  }
  return result;
}
console.log(`the power is:`);
console.log(power(2,4));
console.log(power(5));




// Q2: Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser. 

// solution:



let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;

    }
    else if(e.target.innerHTML == "C"){
      string = "";
      document.querySelector("input").value = string;

    }
   else{
  console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector("input").value = string;

   }

  })

});

// Q9: Show a counter in browser. Counter should increase on click on increase
//     button and decrease on click on decrease button. And show updated counter
//     value in browse

// solution:
 
let btnadd=document.querySelector('#increament');
let btnsub=document.querySelector('#decreament');
let num=document.getElementById('count');

btnadd.addEventListener("click",()=>{
  num.value=parseInt(num.value) + 1;
})


btnsub.addEventListener("click",()=>{
  num.value=parseInt(num.value) - 1;
})


// Q8: Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout

// solution:

function setnewimage(){
  document.getElementById("image-1").src="img-2.webp"
}
function setoldimage(){
  document.getElementById("image-1").src="img-1.png";

}


// Q10: Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

// solution:


function toggleshow(){
  let Btn=document.getElementById("mybtn");
  let para=document.getElementById("para-2");
  if(para.style.display != 'block'){
    para.style.display='block';
  }
  
  else{
    para.style.display='none';
     }
}
 
// Q7: Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted

// solution:

function togglehide1(){
 let hide1=document.getElementById('row1');
 hide1.style.display='none'
}
function togglehide2(){
  let hide2=document.getElementById('row2');
  hide2.style.display='none'
 }
 function togglehide3(){
  let hide3=document.getElementById('row3');
  hide3.style.display='none'
 }