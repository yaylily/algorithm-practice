function solution(lines) {
    let overLap = new Array(201).fill(0)
    
    lines.forEach(([start, end]) => {
        for(let i=start; i<end; i++){
            overLap[i+100] ++
        }
    })
    
    return overLap.filter((a) => a > 1).length
}