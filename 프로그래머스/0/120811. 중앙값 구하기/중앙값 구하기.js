function solution(array) {
    
    array.sort((a, b) => a-b)
    let answer = array.splice(array.length/2, 1)
    return answer[0]
}