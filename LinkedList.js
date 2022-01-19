class Node{
    constructor(val){
      this.data=val;
      this.next=null;
    }
}
const head=new Node(10);
let temp=head;
let t=head;
const b=new Node(20);
head.next=b;
const c=new Node(30);
b.next=c;
const d=new Node(40);
c.next=d;
const f=new Node(50);
d.next=f;

let traverse=(head)=>{
    let curr=head;
      if(curr===null)
      {
          return;
      }
      console.log(curr.data);
      traverse(curr.next);
}

let values = [];
let linkedlistvalues=(head,values)=>{
    let curr=head;
    fillvalue(curr,values);
    return values;

}
fillvalue=(head,values)=>{
    if(head==null)
    {
        return;
    }
    values.push(head.data);
    fillvalue(head.next,values);
}

let totalsum=(head)=>{
  let sum=0;
  while(head!=null)
  {
      sum=sum+Number(head.data);
      head=head.next;
  }
  return sum;
}
let sum=totalsum(temp);
console.log(`sum of The Linkedlist element is ${sum}`);
// let search=(head,target)=>{
//     if(head==null)
//     {
//         return false;
//     }
//     while(head!=null){
//       if(head.data===target)
//        {
//          return true;
//       }
//       head=head.next;
//      }
//      return false;
// }

// if(search(t,40)){
//     console.log(" 40 is present in LinkedList");
// }else{
//     console.log("Not Present");
// }
let reverse=(head)=>{
    let prev=null;
    let current=head;
    while(current!=null)
    {
    const nexts=current.next;
      current.next=prev;
      prev=current;
      current=nexts;
    }
    return prev;

}
let Headpointer=reverse(t);
linkedlistvalues(Headpointer,values).map((ele)=>{
       console.log(ele);
})