function solution(n) {
    let count = 0
    let currentNum = 0
    
    while(count < n){
        currentNum++
        
        if((currentNum % 3 !==0) && !String(currentNum).includes("3")){
            count++
        }
    }
    return currentNum
}