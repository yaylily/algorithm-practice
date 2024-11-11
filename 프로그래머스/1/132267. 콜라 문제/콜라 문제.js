function solution(a, b, n) {
    let count = 0
    let remain = n
    
    // 남은 병수가 교환 가능한 수보다 작을 때까지 반복
    while(remain>=a){
        // 나누었을 때 정수 값을 마트에 줌
        const give = remain % a !==0 ? remain-(remain % a) : remain
        const get = give/a * b
        count += get
        
        // 빈 병 나머지 값 remain 업데이트 시켜주기
        remain = get + (remain - give)
    }
    
    return count
}