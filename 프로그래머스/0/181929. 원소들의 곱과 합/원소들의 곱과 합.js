function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let star = 1;
    
    for(let i=0; i<num_list.length; i++){
        sum += num_list[i]
        star *= num_list[i]
    }
    
    answer = star< (sum ** 2) ? 1 : 0  
    
    return answer;
}