function solution(age) {
    const alph = "abcdefghij"
    
    return [...age.toString()].map((i) => alph[i]).join("")
}