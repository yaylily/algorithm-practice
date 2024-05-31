function solution(t, p) {
    var answer = 0;
    
    for(let i = 0; i <= t.length-p.length; i++){
        let numberT = Number(t.slice(i, p.length+i))

        
        if(numberT <= +p){
            answer ++
        }
    }
    
    return answer;
}