function solution(n) {
    let count = 0;
    
    for(let i=2; i<=n; i++){
        let divCount = 0
        for(let j=1; j<=i; j++){
            if(i%j === 0) divCount++
        }
        if(divCount >=3) count ++
    }
    return count
}