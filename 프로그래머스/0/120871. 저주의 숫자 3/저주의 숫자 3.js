function solution(n) {
    let currentNumber = 0;
    let threeNumber = 0;
    
     while(currentNumber<n){
         threeNumber++
         if(!(String(threeNumber).includes("3")) && !(threeNumber%3===0)){
             currentNumber++
         }
     }
    return threeNumber
}