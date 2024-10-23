function solution(polynomial) {
    let answer = ""
    const poly = polynomial.split(" + ");
    let xSum = 0;
    let numSum = 0;
    
    for(let p of poly){
        if(p.includes("x")){
            xSum += p.split("x").join('') === "" ? +1 : +p.split("x").join('')
        } else {
            numSum += +p
        }
    }
    
    if(numSum === 0){
        answer = xSum + "x"
    } else if(xSum === 0){
        answer = String(numSum)
    } else {
        answer = xSum + "x + " + numSum
    }
    
    return answer
    
}