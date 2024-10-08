function solution(polynomial) {
    
    const lineArr = polynomial.split(" ")
    let xSum = 0
    let numSum = 0
    
    for(let i=0; i<lineArr.length; i+=2){
        if(lineArr[i].includes("x")){
            let xNum = lineArr[i].split("x")[0]
            xSum += xNum === "" ? 1 : Number(xNum)
        } else {
            numSum += Number(lineArr[i])
        }
    }
    let result = []
    if(xSum > 0) result.push(xSum===1 ? "x" : xSum + "x")
    if(numSum > 0) result.push(numSum)
    
    return result.join(" + ")
}