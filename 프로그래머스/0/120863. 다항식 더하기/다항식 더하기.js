function solution(polynomial) {
    let answer = ""
    const poly = polynomial.split(" + ");
    let xSum = 0;
    let numSum = 0;
    
    for(let p of poly){
        if(p.includes("x")){
            const xValue = p.split("x")[0]
            xSum += xValue === "" ? 1 : +xValue
        } else {
            numSum += +p
        }
    }
    
    if(xSum > 0){
        answer += xSum === 1 ? "x" : xSum + "x"
    }
    if(numSum > 0){
        answer += xSum>0 ? " + " + numSum : numSum
    }
    
    return answer
    
}