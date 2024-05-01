function solution(n)
{
    var answer = 0;
    let str = String(n);
    let arr = str.split("");
    answer = arr.reduce((a, b) => a + parseInt(b), 0);

    return answer;
}