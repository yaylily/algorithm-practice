function solution(my_string) {
    
    return Array.from(my_string).filter((n) => !isNaN(n)).map((a) => Number(a)).sort((a, b) => a-b)
}