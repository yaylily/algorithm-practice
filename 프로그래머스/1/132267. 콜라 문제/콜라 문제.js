function solution(a, b, n) {
    let count = 0
    let remain = n
    
    // 남은 병수가 교환 가능한 수보다 작을 때까지 반복
    while(remain>=a){
        // 나누었을 때 정수 값을 마트에 줌
        count += Math.floor(remain/a)*b
        // 빈 병 업데이트 시켜주기
        remain = Math.floor(remain/a)*b + remain%a
    }
    
    return count
}