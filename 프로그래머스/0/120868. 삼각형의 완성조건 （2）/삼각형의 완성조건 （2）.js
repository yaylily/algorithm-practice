function solution(sides) {
    let answer= 0
    const longest = sides[0] + sides[1] - 1
    const short = Math.min(...sides)
    const long = Math.max(...sides)
    
    for(let i=1; i<=longest; i++){
        if((i+short)>long && i <= long){
            answer++
        } else if(i < (short+long) && i>= long){
            answer++
        }
    }
    return answer
    
}