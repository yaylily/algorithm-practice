function solution(s) {
    const sArr = s.split(" ")
    let answer = 0
    
    for(let i=0; i<sArr.length; i++){
        if(sArr[i] === "Z"){
            answer -= Number(sArr[i-1])
        } else {
            answer += Number(sArr[i])
        }
    }
    return answer
}