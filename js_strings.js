//create variable and prompt a string
let str = prompt("Enter a string");
//console.log(str);
//check if string is UPPERCASE
if (str === str.toUpperCase()){
    console.log("UPPERCASE");
}
//check string if is lowercase
else if (str === str.toLowerCase()){
    console.log("lowercase");
}
//check if string is mixed
else{
    console.log("Mixed")
}

//checks if the string starts with letter 'A'
//let startWith = str.startsWith("A");
if (str.startsWith("A")){
    console.log("Starts with A")
}
else {
    console.log("Does not start with A")
}