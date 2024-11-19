function solution(n) {
    let count = []
    // 약수의 개수를 배열에 넣어준다
    for(let i=2; i<=n; i++){
        let temp=0
        for(let j=1; j<=Math.sqrt(i); j++){
            if(i%j === 0 ){
                temp ++
                if(j*j !== i) temp ++
            }
            if(temp > 2) break;
        }
        if(temp === 2) count++
    }
    return count
}