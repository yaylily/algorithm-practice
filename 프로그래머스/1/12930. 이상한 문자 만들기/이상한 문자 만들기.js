function solution(s) {
    
    //각 배열 짝수 홀수 별로 대소문자 바꿔주기
    const changedS = s.split(" ").map((a) => {
        let char = a.split("")
        for(let i=0; i<char.length; i++){
            i%2 ===0 ? char[i] = char[i].toUpperCase() : char[i] = char[i].toLowerCase()
        }
        return char.join("")
    })
    
    //사이에 공백 넣어서 문자열로 합쳐주기
    return changedS.join(" ")
}