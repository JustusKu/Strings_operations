//create variable and prompt a string
let str = prompt("Enter a string");
//console.log(str);
//check if string is UPPERCASE
/*if (str === str.toUpperCase()){
    console.log("UPPERCASE");
}
//check string if is lowercase
else if (str === str.toLowerCase()){
    console.log("lowercase");
}
//check if string is mixed
else{
    console.log("Mixed");
}*/

/*//checks if the string starts with letter 'A'
if (str.startsWith("A")){
    console.log("Starts with A");
}
else {
    console.log("Does not start with A");
}*/
   /*//replace 'sad' with 'happy'
let str1 = "I am sad today";
let str2 = str1.replace("sad", "happy");
console.log(str2)*/

/*//checks if string includes symbol @
if (str.includes("@", ".")){
    console.log("Valid email");
}
else{
    console.log("Invalid email");
}*/
//checks if strings is a question
/*if (str.endsWith("?")){
    console.log("This is a question");
}
else{
    console.log("Not a question");
}*/
//getting last 3 digits
/*let num = str.slice(-3);
//replacing rest of numbers
let num2 = "*".repeat(str.length-3) + num;
console.log(num2)*/
//middle character
/*let middle = Math.floor(str.length/2);
//return 2 middle characters
if(str.length%2 === 0){
    console.log(str.slice(middle -1, middle +1));
}
//return 1 character
else{
    console.log(str.charAt(middle));
}*/
/*//compare 2 strings
let str3 = prompt("Enter a string2");
//convert to lowercase
if (str.toLowerCase()=== str3.toLowerCase()){
    console.log("Match");
}
else{
    console.log("Not a match");
}*/
//checking dot include
/*if (str.includes("dumb")){
    let filteredtWord = str.replace("dumb", "***");
    console.log("Inappropriate word filtered");
    console.log(filteredtWord);
}
else{
    console.log("Clean sentence");
}*/
//getting last index space
let space = str.lastIndexOf(" ");
//extract last word
let lastWord = str.slice(space +1);
console.log("Last word is:", lastWord);





