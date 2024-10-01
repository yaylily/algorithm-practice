function solution(s) {
    let answer = ''
    let temp = {}
    
    //한 번만 등장하는 문자 찾기
    for(let char of s){
        if(char in temp){
            temp[char] +=1
        } else {
            temp[char] = 1
        }
    }
    //객체 값이 1인 것 찾기
    for(let t in temp){
        if(temp[t] === 1){
            answer += t
        }
    }
    
    //문자 오름차순
    return answer.split("").sort().join("")
    
}