function solution(num, total) {
    
    //등차수열
    const first = Math.ceil((((2*total)/num)-num)/2)
    return Array(num).fill(0).map((a, index) => first + index)
}
