/* Map Like Object they Have  Unique Key And Values
Map.set(key,value)
Map.delete(key)
Map.clear();
Map.forEach(()=>{

})
Map.keys()--->Return  iterator of Array Of keys we can use for of
Map.values()--->Return iterator of Array of Values we can use for of
Map.size
Map.entries()---->return iterator of Array of {key,value} we can use for of and object destructing
Map.has(key)
//Set

*/
const country=new Map();
country.set("India","Delhi");
country.set("Pakistan","Karachi");
country.set("Japan","Tokyo");
country.set("Germany","Barlin"); 
country.set("India","New Delhi");

for(let [key,value] of country.entries()){
   console.log(key,value);
}

//iterating over the Map By Using  for of

// for(const[key,value] of country){
//     console.log(`${key} ${value}`)
// }

//iterating over the map By using forEach


 //The clear() method removes all elements from a Map object.
// country.clear();
/*Map.prototype.delete()

The delete() method removes the specified element from a Map object by key.*/
country.delete("India");

/*The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order.
country.forEach((value,key)=>{
    console.log(`${key} ${value}`);
})*/

/*Map.prototype.keys()
The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order.*/
let keyarr=country.keys();
//console.log(` size of country is ${country.size}`);

/*for(let key of country.keys()){
    console.log(`${country.get(key)}`);
}*/
//values();


var no=new Set();
no.add(10);
no.add(20);
no.add(30);
no.add(30);
no.add(50);
no.add(40);
no.add(50);
for(let value of no)
{
    console.log(value);
}

/*Set Just Like Array But Do not Stored A Duplicates in That
size
add()
delete()
entries() return iterator of Array[value,value]
values()
has(value)
clear()
forEach()
*/

let names=["Vishal","Sudhir","Kiran","Sadashiv","Somnath","Savalya"]
names.push("Vishal");
let set=new Set(names);
set.add("Sudhir");
set.add("Sadashiv")
set.delete("Sadashiv");
console.log(set.has("Sudhir"));
set.forEach((ele)=>{
    console.log(ele);
});

// Write a javascript program to print all anagrams

function anagram(arr) {
  let map = new Map();

  for (let word of arr) {
   let sorted=word.toLowercase().split('').sort().join('');
   map.set(sorted,word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(anagram(arr));
