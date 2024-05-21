function solution(price, money, count) {
    var answer = 0;
    let sum = 0;
    
    for(let i=1; i<=count; i++){
        sum += price*i
    }
    if(money-sum < 0){
        answer = Math.abs(money-sum)
    }else{
        answer = 0
    }
    
    
    return answer;
}