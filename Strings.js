//  String Tutorial 
//1) Javascript Strings Are Immutable we cannot change the content inside The String if you changes then new String object Will Be Craeted 

var readlineSync = require('readline-sync');
let str="VISHAL";
// let str=new String("VISHAL");
console.log(str);
console.log(str.charAt(0));
console.log(str.toLowerCase());
console.log(str);
let st=`hello  ${str} Good Morning`;
console.log(st);
console.log("vishwa");

//Concatenation using "+"
let greetings='hello';
let names='vishal';
let newStr=greetings+" "+names;
console.log(newStr);

const string='123';
const num=Number(string);
console.log(typeof num);

// Write A Javascript Program To Count the No Of Vowel In The String
// let sentence=readlineSync.question("Enter The String");
let result=(sentence)=>{
   let count=0;
    for(let i=0;i<sentence.length;i++)
    {
       if(sentence.charAt(i)==='a'||sentence.charAt(i)==='e'||sentence.charAt(i)==='i'||sentence.charAt(i)==='o'||sentence.charAt(i)==='u'||sentence.charAt(i)==='e'){
        count=count+1;
       }
    }
    return count;
    
}
console.log(result(str));

//toString this Mehod is Available for Numbers if you want to convert Number into String

let nums=21;
let numstring=nums.toString();
console.log(typeof numstring);

//if you Want to Find the Length of the String Then
console.log(str.length);

//if you want to Access the Element at Particular Index use Square Bracket like that []
console.log(str[str.length-1]);

//Testing if a string contains a substring 
if(str.includes("ISHAL")){
    console.log(`This is Present Inside The ${str}`);
}


// Check  a particular String Start and End with A particular String

if(str.startsWith("VI"))
{
    console.log(`Yes ${str} is Start With VI`);
}else{
    console.log("Not Start With VI");
}

if(str.endsWith("AL"))
{
    console.log(`Yes ${str} is ends With AL`);
}else{
    console.log("Not Start With AL");
}


//Extracting a substring from a string
//You can extract a substring from a string using the slice() method. You pass it:
//str="VISHAL";
console.log(str.slice(1,3));//not including end Index
//The character at index 1 is "I", and the character at index 3 is "H". So we extract all characters starting at "I" and ending just before "H", giving us "IS".
//Changing case
// The string methods toLowerCase() and toUpperCase() take a string and convert all the characters to lower- or uppercase, respectively. This can be useful for example if you want to normalize all user-entered data before storing it in a database.

// Let's try entering the following lines to see what happens:
console.log(str.toLowerCase());
str=str.toLowerCase();
console.log(str.toUpperCase());
console.log(str);

// program to check if the string is palindrome or not

let strr="madam";
let palindrome=(str)=>{
  let len=str.length-1;
  for(let i=0;i<len;i++)
  {
      if(str[i]!==str[len-i])
      {
          return `${str} is Not Palindrome String`;
      }
  }
   return `${str} is Palindrome String`;
}
console.log(palindrome(strr));



//Updating parts of a string
// You can replace one substring inside a string with another substring using the replace() method.

// In this example, we're providing two parameters ??? the string we want to replace, and the string we want to replace it with:
let updated=str.replace("vi","ki");
console.log(updated);//kishal


//split()

const list = "apples,bananas,cherries"
const fruits = list.split(',');
console.log(fruits);

//1. How to Copy a String Multiple Times
const laughing = "ha".repeat(3);
console.log(laughing); // "hahaha"

// . How to Split a String Into an Array of Characters
// There are multiple ways to split a string into an array of characters. I prefer using the spread-Operator (...).

const word = "apple";
const characters = [...word];
console.log(characters); // ["a", "p", "p", "l", "e"]

// 5. How to Reverse Characters in a String
// Reversing the characters in a string is easily done. Simply combine the spread-Operator (...), the Array#reverse method and the Array#join method.

const words = "apple";
const reversedWord = [...words].reverse().join("");
console.log(reversedWord); // "elppa"

const stringss = 'code';

// using for...in loop


for (let i in stringss) 
{
    console.log(stringss[i]);
}


console.log(stringss.indexOf('ode'));
const first="vishal";
const second="jare";
const third=first.concat(" "+second);
console.log(third);

let letters=noOfWords("We are neoGrammers");
console.log(letters);
let noOfWords=(param)=>{
let count=0;
for(let i=0;i<param.length;i++)
{
    if(param.charAt(i)==" ")
    {
        count=count+1;
    }
}
return count+1;
}
let letters=noOfWords("We are neoGrammers");
console.log(letters);

//1 )Write a program that converts the string into uppercase
console.log("vishal".toLocaleUpperCase());
//2)Write a program that reads two strings and append first string to the second.
// So if first string is Good second string is Morning , the program should print MorningGood

let append = (param1, param2) => {
    return param1 + param2;
}
let sente = append("vishal", "Jare");

//3)Program that reads string and count number of characters present in the string

let countStrings = (param) => {
    let count = 0;
    for (let i = 0; i < param.length; i++) {
        count++;
    }
    return count;
}
console.log(countStrings("Vishal"));

// 4)Write a program that converts string like "124" to 124
let conversion = (param) => {
    return Number(param);
}

console.log(conversion("123"));

//5)Write a program to delete all vowels from a string. Assume string is not more than 80 characters long
let removeVowel = (str) => {
    if (str === " ") {
        return "String does not contain Character";
    }
    else {
        let arr = str.split("");
        return arr.filter((str) => {
            if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u' || str === 'e') {
                return false;
            }
            else {
                return true;
            }
        })

    }

}
let result=removeVowel("Vishal");
console.log(result.toString());
// function fill(ele)
// {
//        return ele%2===0?true:false;
// }
// let arr=[2,3,4,5,6,7,8];
// let result=arr.filter(fill);
// console.log(result);


// 7) A program that reads three strings and prints the longest and smallest one
let smallAndLong = (...args) => {
    let arr = [];
    let a=args.reduce((acc, curr) => {
        return acc.length <curr.length ? acc : curr;
    });
    let b=args.reduce((acc, curr) => {
        return acc.length > curr.length ? acc : curr;
    });
    arr.push(a);
    arr.push(b);

    return arr;
}
let [small, long] = smallAndLong("vishal", "ChandraKant", "SadaShiv");
console.log(`${small},${long}`);

//9)Write a program which receives a string str that calculates the length of a string and 
//return true if the length is greater than 7 without using strlen()
 function Str(param){
         let length=0;
         for(let i=0;i<param.length;i++){
            length++;
         }
         if(length>7)
         {
             return `${param} length is Greater Than 7`
         }
         else{
            return `${param} length is less  Than 7`
        }
 }
 let longOrSmall=Str("VishalJare");
 console.log(longOrSmall);

 //10)Write a program that takes two strings and copies smaller string into bigger string

 
 let mixed=(param1,param2)=>{
       if(param1.length<param2.length)
       {
           return param2.concat(param1);
       }
       else{
           return param1.concat(param2);
       }
 }
 console.log(mixed("jare","vishal"));