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
}

//checks if the string starts with letter 'A'
if (str.startsWith("A")){
    console.log("Starts with A");
}
else {
    console.log("Does not start with A");
}*/
//replace 'sad' with 'happy'
let str1 = "I am sad today";
let str2 = str1.replace("sad", "happy");
console.log(str2)

//checks if string includes symbol @
if (str.includes("@")){
    console.log("Valid email");
}
else{
    console.log("Invalid email");
}