function solution(s) {
    let answer = []
    
    let firstLetter = s[0];
    let firstIndex = 0;
    let firstCount = 0; 
    let remainingCount = 0;    
     for(let i=0; i<s.length; i++){
        s[i] === firstLetter ? firstCount++ : remainingCount++;
         
        if(firstCount === remainingCount){
            answer.push(s.slice(firstIndex, i+1))
            
            firstIndex = i+1
            firstCount = 0;
            remainingCount = 0;
            firstLetter = s[firstIndex]
        }
    }
    return firstCount === remainingCount ? answer.length : answer.length +1
}
