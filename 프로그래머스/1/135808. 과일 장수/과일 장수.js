function solution(k, m, score) {
    if(score.length < m) return 0
    
    //score 내림차순
    score = score.sort((a, b) => b-a)
    
    // m씩 더해가며 해당 박스의 최저 사과 점수 구함
    let total = 0
    for (let i=m-1; i<score.length; i+=m){
        total += score[i]*m
    }
    
    //박스 점수 모두 더해서 반환
    return total
}