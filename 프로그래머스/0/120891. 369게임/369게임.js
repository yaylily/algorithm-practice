function solution(order) {
    const game = order.toString().split("").filter(num => ["3", "6", "9"].includes(num))
    return game.length
}