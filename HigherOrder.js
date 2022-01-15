let number=[1,2,3,4,5];
let doubled=number.map((num)=>{
    return num*2;
})
console.log(doubled)

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
// artists.forEach((ele)=>console.log(ele));
// artists.map((ele)=>{
//     console.log(ele);
// })


console.log("");
console.log("");
console.log("Buckets");
let buckets=[10,"vishal",20,"Sudhir",30,40,50,"Sushant"];
let arrays=buckets.filter(ele=>typeof ele=='number').map(ele=>ele*ele);


arrays.forEach((ele)=>{
    console.log(ele);
})
console.log("");
let reducer=(previous,curr)=>{
    return previous+curr;
}
let sum=arrays.reduce(reducer,5);
console.log(`sum isn ${sum}`);


  let persons=[{firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];
persons.map((person)=>{
    console.log(` firstName is ${person.firstName} and Last Name is ${person.lastName} `)
})