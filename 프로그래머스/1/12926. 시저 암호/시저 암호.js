function solution(s, n) {
    const smallAlph = ["a", "b", "c", "d" ,"e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const bigAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
   // 하나씩 돌려서 해당 값의 인덱스 구해줌
    const siser = s.split("").map((a) => {
        // 공백인 경우
        if(a===" "){
        return " "
            
        // 대문자인 경우
        } else if(a === a.toUpperCase()){
            let index = bigAlph.indexOf(a)
            return  index+n <= 25 ? bigAlph[index+n] : bigAlph[index+n-26]
        } else {
            // 소문자인 경우
            let index = smallAlph.indexOf(a)
            return index+n <= 25 ? smallAlph[index+n] : smallAlph[index+n-26]
        }})
    
    return siser.join("")
}