function solution(sizes) {
    // 짧은쪽 배열, 긴 쪽 배열 만들어서 넣기
    let min = [];
    let max = []
    
    for(let s of sizes){
        min.push(Math.min(...s))
        max.push(Math.max(...s))
    }
    
    
    // 해당 배열에서 가장 큰 값들을 곱해서 지갑 크기 구하기
    return Math.max(...min) * Math.max(...max)
    
}