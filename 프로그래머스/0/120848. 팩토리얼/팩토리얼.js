function factorial(i){
    return i===0? i=1 : i * factorial(i-1)
} 

function solution(n) {
    let i = 1
    
    while(factorial(i) <= n){
        i++
    }
    return i-1
}