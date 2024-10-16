function solution(A, B) {
    const compareB = B+B
    
    if(compareB.includes(A)){
        return compareB.split(A)[0].length
    } else {
        return -1
    }
}