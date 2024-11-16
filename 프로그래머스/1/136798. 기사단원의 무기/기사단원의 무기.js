function solution(number, limit, power) {
    let sum = 0
    
    //약수의 개수를 구한다
    for(let i=1; i<=number; i++){
        let temp = 0
        for(let j=1; j<=Math.sqrt(i); j++){
           if(i%j === 0) {
               temp ++
               if(i !== j*j) temp ++
           }
        }
    // 약수의 개수가 limit을 넘을 경우, power로 바꿔준다.  
        temp > limit ? sum += power : sum += temp
    }
    return sum
}