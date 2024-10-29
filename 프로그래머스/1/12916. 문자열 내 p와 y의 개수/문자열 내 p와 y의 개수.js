function solution(s){
    const lowerS = s.toLowerCase()
    let p = lowerS.split("").filter((a) => a === "p")
    let y = lowerS.split("").filter((a) => a === "y")
    
    return p.length === y.length ? true : false
}