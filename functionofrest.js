let add = (...a) => {
    let sum=0;  
    for(i of a){
        sum=sum+i;
    }       
    return sum;
}
    
let sum=add(20,30);
console.log(sum);  

sum=add(200,3,34);
console.log(sum);  
 
sum=add(2000,302,34,45);
console.log(sum);  