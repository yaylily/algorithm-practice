function solution(dartResult) {
    let score = []
    let currentNumber = ''
    
    for(let i=0; i<dartResult.length; i++){
        const char = dartResult[i]
        
        if(!isNaN(dartResult[i])){
            currentNumber += char
        } else {
            if(char === 'S'){
                score.push(Number(currentNumber) ** 1)
                currentNumber = ''
            } else if(char ==='D'){
                score.push(Number(currentNumber) ** 2)
                 currentNumber = ''
            } else if(char ==='T'){
                score.push(Number(currentNumber) ** 3)
                 currentNumber = ''
            } else if(char ==='*'){
                score[score.length-1] *= 2
                if(score.length > 1){
                    score[score.length-2] *= 2
                }
            } else if(char === '#'){
                score[score.length-1] *= -1
            }
        }
    }
    return score.reduce((a,b) => a+b)
}
    