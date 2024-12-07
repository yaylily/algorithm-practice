function solution(board, moves) {
    let count = 0
    let bucket = []
    
    moves.forEach((m) => {
        for(let i=0; i<board.length; i++){
            if(board[i][m-1] !== 0){
                bucket.push(board[i][m-1])
                board[i][m-1] = 0
                break
            }
        }
                if(bucket.length >= 2 &&
                 bucket[bucket.length-1] === bucket[bucket.length-2]){
                count += 2
                bucket.splice(-2, 2)
            }
        
        
    })
    
    return count
}