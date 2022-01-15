/* Q-1Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1*/
let findMin=(...arr)=>{
    return arr.reduce(prev,curr){
        if(prev<curr){
            return prev;
        }
        else{
            return curr;
        }
    }
}
let number=findMin(3,5,9,1) 
console.log(number);