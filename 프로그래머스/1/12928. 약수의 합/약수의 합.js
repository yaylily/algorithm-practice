function solution(n) {
    let sum = 0;
    
    let i
    for(i=1; i<=Math.sqrt(n); i++){
        if(n%i === 0){
            sum += i + n/i
        }
    }
    i--
    
    return n/i === Math.sqrt(n) ? sum - Math.sqrt(n) : sum
}