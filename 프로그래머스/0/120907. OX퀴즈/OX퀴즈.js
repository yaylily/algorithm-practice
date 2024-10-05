function solution(quiz) {
    var answer = [];
    
    for(let i=0; i<quiz.length; i++){
        const [X, operator, Y, , Z] = quiz[i].split(" ")
        
        
        let sum = 0
        if(operator === '+'){
            sum = +X + +Y          
        } else {
            sum = +X - +Y
        }

        if(sum === +Z){
            answer.push("O")
        } else {
            answer.push("X")
        }
    }
    
    return answer;
}