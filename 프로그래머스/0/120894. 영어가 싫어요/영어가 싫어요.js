function solution(numbers) {
    const engNum = { "zero":0, "one":1, "two":2, "three":3, "four":4,
                    "five":5, "six":6, "seven":7, "eight":8, "nine":9}
    let answer = numbers
    
    for(let word in engNum){
        while(answer.includes(word)){
            answer = answer.replace(word, engNum[word])
        }
    }
    return Number(answer)
}