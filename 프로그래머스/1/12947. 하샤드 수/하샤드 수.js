function solution(x) {
    var answer = true;
    
    let hsd = String(x).split('').reduce((a,b)=> a + Number(b), 0)
    x % hsd === 0 ? answer = true : answer = false
    
    return answer;
}