function solution(s) {
    const alph = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    let answer = ''
    
    let temp = ''
    for(let i=0; i<s.length; i++){
        //해당 문자열이 숫자면 answer에 넣어주고 아닐경우 temp에 쌓아주기
        isNaN(s[i]) ? temp += s[i] : answer += s[i]
        //temp가 숫자단어를 완성하면 해당 단어 인덱스를 숫자형에서 찾아준다.
        if(alph.includes(temp)){
            answer += num[alph.indexOf(temp)]
            temp = ''
        }
    }
    return +answer
}