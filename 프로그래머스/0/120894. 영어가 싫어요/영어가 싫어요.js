function solution(numbers) {
    const engNum = {"zero":0, "one":1, "two":2, "three":3, "four":4,
                   "five":5, "six":6, "seven":7, "eight":8, "nine":9}
    
    for(let n in engNum){
        while(numbers.includes(n)){
            numbers = numbers.replace(n, engNum[n])
        }
    }
    return +numbers
}