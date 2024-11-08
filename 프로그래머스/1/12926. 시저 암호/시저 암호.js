function solution(s, n) {
    const smallAlph = "abcdefghijklmnopqrstuvwxyz"
    const bigAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
   // 하나씩 돌려서 해당 값의 인덱스 구해줌
    const siser = s.split("").map((a) => {
        // 공백인 경우
        if(a===" ") return " "
        
        const type = smallAlph.includes(a) ? smallAlph : bigAlph
        let index = type.indexOf(a) + n
        
        if(index >= type.length) index -= type.length
        
        return type[index]
    })
            
    return siser.join("")
}