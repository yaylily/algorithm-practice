function solution(numbers) {
    let plus = 0
    let minus = 0
    
    numbers.sort((a, b) => b-a)
    plus = numbers[0] * numbers[1]
    
    numbers.sort((a, b) => a-b)
    minus = numbers[0] * numbers[1]
    
    return plus>minus ? plus : minus
}
