// question no1
let x =prompt("enter city name")
if( x == "Karachi"){
    console.log("welcome to city of lights");
}

else if (x == "karachi"){
    console.log("please write first letter capital");
}
else{
    console.log("please enter city of lights");
}
// question no2

let y = prompt("enter gender")
if(  y == "male"){
    console.log("good morning sir");
}

else if (y == "female"){
    console.log("good morning ma'am");
}
else{
    console.log("enter gender please!");
}

// question no3:
let toyota = prompt("enter your fuel record")
if(toyota >= 0.25 ){
    console.log("your fuel condition is good");
}
else if (toyota <= 0.25){
    console.log("please refill the fuel in car");
}
else{
    console.log("please enter in liters")
}

// question no4
let integers=prompt("write an integer")

    if(integers >=500){
        console.log("integer is graeater ")
    }
    else if(integers <= 400){
        console.log( "integer is small")

    }
    else  {
        console.log( "the greater integer is 500")
    }







// question no5
let number=prompt("enter any number")
if (number > 0){
    console.log(number + " " + "is a positive number");
}
else if(number == 0){
    console.log(number + "" + "is a zero");

}
else if(number < 0){
    console.log(number + " " + "is a negative number" );
}
else{
    console.log("it is not a number");
}

// question no6
let vowel=prompt("write a letter")
console.log(vowel.length)
if(vowel.length = 1){

    if(vowel =="a" || vowel =="e" || vowel =="i" || vowel =="o" || vowel =="u" ){
        console.log(vowel  + " " +  "is a vowel")
    }
    else{
        console.log(vowel + "" + "is not a vowel")
    }
}

else{
    console.log("enter at least one character")
}


// question no7:
let password=prompt("enter your password")
    password="123",
    password="abc"
if(password =="123"){
    console.log("your password verified/correct");
}
else if(password == "abc"){
    console.log("your password verified/correct");
}
else {
    console.log("wrong password")
}


