function solution(s) {
    let answer = 0;
    let i = 0;
    
    while (i < s.length) {
        let x = s[i];
        let countX = 0;
        let countY = 0;

        while (i < s.length) {
            if (s[i] === x) {
                countX++;
            } else {
                countY++;
            }
            
            i++;
            
            if (countX === countY) {
                break;
            }
        }
        
        answer++;
    }
    
    return answer;
}
