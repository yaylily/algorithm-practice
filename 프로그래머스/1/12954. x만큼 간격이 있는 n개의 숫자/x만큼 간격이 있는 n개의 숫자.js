function solution(x, n) {
    let arr = []
    let i = 1
    
     while(arr.length < n){
         arr.push(x*i)
         i++
     }
    return arr
}
