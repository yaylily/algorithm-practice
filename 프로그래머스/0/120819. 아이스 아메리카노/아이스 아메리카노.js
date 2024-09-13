function solution(money) {
    var answer = [];
    const cup = Math.floor(money/5500)
    answer.push(cup)
    answer.push(money-(cup*5500))
    return answer;
}