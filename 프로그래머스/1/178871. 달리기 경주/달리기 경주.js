function solution(players, callings) {
    const playersPosition = new Map()
    players.forEach((player, index) => {
        playersPosition.set(player, index)
    })
    
    callings.forEach((call) => {
        const currentIndex = playersPosition.get(call)
        const previousPlayer = players[currentIndex-1]
        
        players[currentIndex] = previousPlayer
        players[currentIndex-1] = call
        
        playersPosition.set(call, currentIndex-1)
        playersPosition.set(previousPlayer, currentIndex)
    })
    
    return players
}