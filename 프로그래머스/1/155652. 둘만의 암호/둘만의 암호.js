function solution(s, skip, index) {
    var answer = '';
    
    const Alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const arrS = s.split('')
    const arrSkip = skip.split('')
    const newAlph = Alph.filter(a => !arrSkip.includes(a))

    
    for(let i=0; i<s.length; i++){
        let currentChar = s[i]
        let currentIndex = newAlph.indexOf(currentChar)
        
        let newPosition = (currentIndex + index) % newAlph.length;
        
        answer += newAlph[newPosition]
    }
    
    return answer;
}