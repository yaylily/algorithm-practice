function solution(keyinput, board) {
    let x = 0,
        y = 0;
    
    const maxX = Math.floor(board[0]/2)
    const maxY = Math.floor(board[1]/2)
    
    for(let key of keyinput){
         switch(key){
        case "left":
            if(x > -maxX) x -= 1;
            break;
        case "right":
            if(x < maxX) x += 1;
            break;
        case "up":
            if(y < maxY) y += 1;
        break;
        case "down":
            if(y > -maxY) y -= 1;
             break;
    }   
    }
    
    return [x, y]

}