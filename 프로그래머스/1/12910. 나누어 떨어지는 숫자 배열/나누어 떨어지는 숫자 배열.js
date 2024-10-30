function solution(arr, divisor) {
    let value = arr.filter((a) => a%divisor === 0)

    return value.length > 0 ? value.sort((a, b) => a-b) : [-1]
}