function solution(d, budget) {
    let count = 0
    
    // 신청 금액 정렬
    d.sort((a, b) => a-b)

    // 남은 예산이 제일 작은 신청 금액보다 작아질때까지 돌리며 count
    while(d[0]<= budget){     
        count++
        budget = budget - d[0]
        d.shift()

    }
        return count  
}