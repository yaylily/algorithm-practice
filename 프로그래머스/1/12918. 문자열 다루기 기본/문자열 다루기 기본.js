function solution(s) {
    var answer = true;
    
    if((s.length === 4) || (s.length === 6)){
        answer = s.split("").every(c => !isNaN(c))
    } else {
        answer = false
    }
    
    return answer;
}