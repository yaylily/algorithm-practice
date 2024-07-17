function solution(s) {
    var answer = '';
    
    let str = s.split(' ').map(Number);
    let min = Math.min(...str)
    let max = Math.max(...str)
    
    answer = `${min} ${max}`
    
    return answer;
}