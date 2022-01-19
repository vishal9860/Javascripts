const country=new Map();
country.set("India","Delhi");
country.set("Pakistan","Karachi");
country.set("Japan","Tokyo");
country.set("Germany","Barlin");
country.set("India","New Delhi");

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

//The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order.
country.forEach((value,key)=>{
    console.log(`${key} ${value}`);
})

/*Map.prototype.keys()
The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order.*/
let keyarr=country.keys();
// console.log( country.get(keyarr.next().value));
console.log(` size of country is ${country.size}`);


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