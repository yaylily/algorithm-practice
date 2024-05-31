function solution(t, p) {
    var answer = 0;
    const numberP = Number(p)  
    
    for(let i = 0; i <= t.length-p.length; i++){
        let numberT = Number(t.slice(i, p.length+i))

        
        if(numberT <= numberP){
            answer ++
        }
    }
    
    return answer;
}