function solution(quiz) {
    var answer = [];
    
    for(let i=0; i<quiz.length; i++){
        const quizArr = quiz[i].split(" ")
        const num1 = quizArr[0]
        const operator = quizArr[1]
        const num2 = quizArr[2] 
        const result = quizArr[4];
        
        let calcResult = 0
        if(operator === '+'){
            calcResult = +num1 + +num2            
        } else {
            calcResult = +num1 - +num2   
        }

        if(calcResult === +result){
            answer.push("O")
        } else {
            answer.push("X")
        }
    }
    
    return answer;
}