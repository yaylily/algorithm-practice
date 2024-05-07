function solution(n) {
    var answer = 0;
    
    for(let x=1; (x*x) <= n; x++){
        if(n === x*x){
            answer = (x+1)*(x+1)
        } else{
            answer = -1
        };
    };

    return answer;
}