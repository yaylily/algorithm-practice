function solution(food) {
    var answer = '';
    
    for(let i=1; i<food.length; i++){
        if(food[i]>=2){
            answer+= String(i).repeat(parseInt(food[i]/2))
        }
    }
    answer += "0"
    
    for(let i= food.length-1; i>0; i--){
        if(food[i]>=2){
           answer+= String(i).repeat(parseInt(food[i]/2))
    }
    }
    return answer;
}
