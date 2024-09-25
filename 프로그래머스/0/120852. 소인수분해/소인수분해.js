function solution(n) {
    var answer = [];
    
    for(let i=2; i<= Math.sqrt(n); i++){
        while(n%i === 0){
            answer.push(i)
            n /= i
        }
    }
    
    if(n>1){
        answer.push(n)
    }
    
    return [...new Set(answer)]
}