function solution(num, k) {
    const location = String(num).indexOf(String(k))
    return location > -1 ? location + 1 : -1
}