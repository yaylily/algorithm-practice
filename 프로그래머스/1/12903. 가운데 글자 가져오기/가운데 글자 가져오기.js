function solution(s) {
    const center = Math.floor(s.length/2)
    return s.length % 2 === 1 ? s[center] : s[center-1] + s[center]
}