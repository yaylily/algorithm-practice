function solution(board) {
    const n = board.length
    let map = Array.from(Array(n), () => Array(n).fill(0))
    
    const directions = [[-1, 1], [0, 1], [1, 1],
                       [-1, 0], [1, 0],
                       [-1, -1], [0, -1], [1, -1]]
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(board[i][j] === 1){
                map[i][j] = 1
            
            for(let dir of directions){
                const[x, y] = dir
                const xi = i+x
                const yj = j+y
                
                if(xi>=0 && xi<n && yj>=0 && yj<n){
                    map[xi][yj] = 1
                }
                } 
            }
        }
    }

    let safeArea = 0
    map.forEach((a) => {
        a.forEach((b) => {
         if(b !== 1) safeArea ++    
        })
    })
    return safeArea
}