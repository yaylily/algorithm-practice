function solution(k, score) {
    let temp = []
   
    // score 값을 하나씩 넣어준다
    return score.map((s, index) => {
        // index가 k-1 보다 길이가 작을 때는 제일 작은 값 반환        
        if(index < k-1){
            temp.push(s)
            return Math.min(...temp)
        } else {
            // k개 이상이면 내림차순 정렬 후 안덱스 k-1 반환            
            temp.push(s)
            return temp.sort((a, b) => b-a)[k-1]
        }
    })
}
