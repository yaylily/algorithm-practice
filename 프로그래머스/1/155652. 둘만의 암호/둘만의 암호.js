function solution(s, skip, index) {
    let answer = ''
    const alph = "abcdefghijklmnopqrstuvwxyz"
    
    for(let i=0; i<s.length; i++){
        let current = alph.indexOf(s[i])
        let steps = 0
                  
        while(steps < index){
            current = (current+1) % 26
            if(!skip.includes(alph[current])){
                steps++
            }
        }
        answer += alph[current]
    }
    return answer
}