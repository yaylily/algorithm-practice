function solution(absolutes, signs) {
    let mix = []
    
    for(let i=0; i<absolutes.length; i++){
        signs[i] === true ? mix.push(absolutes[i]) : mix.push(-1 * absolutes[i])
    }
    
    return mix.reduce((a, b) => a+b)
}