function solution(numbers) {
    let sum = []

    for(let i=0; i<numbers.length-1; i++){
        for(let j=i+1; j<numbers.length; j++){
            sum.push(numbers[i]+numbers[j])
        }
    }
    
    return [...new Set(sum)].sort((a, b) => a-b)
}