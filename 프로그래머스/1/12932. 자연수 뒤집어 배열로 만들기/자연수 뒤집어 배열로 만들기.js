function solution(n) {    
    let answer = []
    String(n).split("").forEach((a) => {
        return answer.unshift(+a)
    })
    return answer
}