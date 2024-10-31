function solution(absolutes, signs) {
    let mix = 0
    
    for(let i=0; i<absolutes.length; i++){
        signs[i] === true ? mix += absolutes[i] : mix -= absolutes[i]
    }
    
    return mix
}