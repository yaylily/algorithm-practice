function solution(left, right) {
    let count = 0
    let answer = 0
    
    for(let i=left; i<= right; i++){
        for(let j=1; j<=i; j++){
            if(i%j ===0) count ++
        }
        count % 2 === 0 ?  answer += i : answer -= i
        count = 0
    }
    
    return answer

}