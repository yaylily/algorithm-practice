function solution(num, total) {
    
    const first = Math.ceil(total/num - Math.floor(num/2))
    return Array(num).fill(0).map((a, index) => first + index)
}
