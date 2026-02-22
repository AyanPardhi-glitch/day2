//largest nu. in array
let arr = [10,20,30,40];
let largest=arr[0];
for(i of arr){
    if(i>largest){
        largest=i;
    }
}
console.log("largest number is "+largest);  