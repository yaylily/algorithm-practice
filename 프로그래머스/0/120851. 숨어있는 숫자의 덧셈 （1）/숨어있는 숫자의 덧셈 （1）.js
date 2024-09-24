function solution(my_string) {
    return my_string.split("").filter((n) => !isNaN(n)).map(Number).reduce((a, b) => a+b)
}