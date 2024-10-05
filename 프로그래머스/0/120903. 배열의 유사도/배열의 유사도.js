function solution(s1, s2) {
    const newArr = s1.filter((a) => s2.indexOf(a) >= 0)
    return newArr.length
}