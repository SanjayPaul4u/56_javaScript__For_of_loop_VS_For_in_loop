console.log("This is tutorial 56");
//FOR OF LOOP VS FOR IN LOOP

let array = ["Rohan", "Subham", "Payel", "Ricky9", "Sanjay" ];



//TRADITIONAL FOR LOOP❌❌❌
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }


//📌📌📌FOR-IN-LOOP📌📌📌

//1> ITERATING AN OBJECT📌
let obj = {
    name: "sanjay",
    language:"javaScript",
    hobbies: "Hacking"
}

//1.1> ITERATING an OBJECT USING TRADITIONAL FOR LOOP❌❌❌
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

//1.2> ITERATING AN OBJECT USING FOR IN LOOP ✔✔✔
for(let keys in obj){
    // console.log(obj[keys]);
    // console.log(obj.name);
    // console.log(obj["name"]);
}



//2> ITERATING A STRING📌 
let myString = "This is my string.";

//2.1> ITERATING A STRING USING TRADITIONAL FOR LOOP❌❌❌
for (let index = 0; index < Object.keys(myString).length; index++) {
    const element = myString[Object.keys(myString)[index]];
    // console.log(element);
    
}


//2.2> ITERATING A STRING USING FOR IN LOOP✔✔✔
for(let char in myString){
    // console.log(myString[char]);
}




//📌📌📌FOR-OF-LOOP📌📌📌

array = ["Rohan", "Subham", "Payel", "Ricky9", "Sanjay" ];
for(let name of array){
    console.log(name);
}
for(let char of myString){//myStirng is initialize above.
    console.log(char);
}
