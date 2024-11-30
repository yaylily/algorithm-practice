function solution(s) {
    let answer = 0
    
    let firstLetter = s[0];
    let firstCount = 0; 
    let remainingCount = 0;    
     for(let i=0; i<s.length; i++){
        s[i] === firstLetter ? firstCount++ : remainingCount++;
         
        if(firstCount === remainingCount){
            answer++
            
            firstCount = 0;
            remainingCount = 0;
            firstLetter = s[i+1]
        }
    }
    return firstCount === remainingCount ? answer : answer +1
}
