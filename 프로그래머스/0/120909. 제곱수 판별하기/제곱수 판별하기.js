function solution(n) {
    let answer = 0
    for(let i=2; i<=Math.sqrt(n); i++){
        if(i*i === n){
            answer = 1
        }
    }
    return answer === 1 ? 1 : 2
}