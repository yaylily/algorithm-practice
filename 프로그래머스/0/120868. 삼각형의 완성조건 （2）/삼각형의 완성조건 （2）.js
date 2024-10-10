function solution(sides) {
    let answer= 0
    const long = Math.max(...sides)
    const short = Math.min(...sides)
    
    for(let i=0; i<long+short; i++){
        let arr = [short, long, i].sort((a, b) => a - b)
        let [a, b, c] = arr
        
        if(a+b > c){
            answer++
        }
    }
    return answer
}