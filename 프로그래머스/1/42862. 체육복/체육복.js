function solution(n, lost, reserve) {
    
    let realLost = lost.filter((l) => !reserve.includes(l)).sort((a, b) => a-b)
    let realReserve = reserve.filter((r) => !lost.includes(r)).sort((a, b) => a-b)
    
    let available = n-realLost.length
    
    realLost.forEach((l) => {
        if(realReserve.includes(l-1)){
            realReserve = realReserve.filter((r) => r !== l-1)
            available ++
        } else if(realReserve.includes(l+1)){
            realReserve = realReserve.filter((r) => r !== l+1)
            available ++
        }
    })
    
    return available  
}