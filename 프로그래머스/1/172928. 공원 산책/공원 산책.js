function solution(park, routes) {
    let currentPosition = [];
    let MaxW = park[0].length;
    let MaxH = park.length;
    
    //currentPosition 값을 담는다.
    for(let i=0; i<park.length; i++){
        park[i] = park[i].split("")
        for(let j=0; j<park[i].length;j++){
            if(park[i][j] === "S"){
                currentPosition = [i, j]
            }
        }
    }

    //routes를 돌려 위치 이동
    for(let route of routes){
        const [dir, steps] = route.split(" ")
        let tempH = currentPosition[0];
        let tempW = currentPosition[1];
        const moveSteps = +steps
        
        if(dir === "E") tempW += moveSteps
        if(dir === "W") tempW -= moveSteps
        if(dir === "S") tempH += moveSteps
        if(dir === "N") tempH -= moveSteps
        
        // 이동 가능 범위 확인
        if(tempW >=0 && tempW < MaxW && tempH >= 0 && tempH <MaxH){
             //장애물 확인
            let isBlocked = false
        if(dir === "E" || dir === "W"){
            const start = Math.min(currentPosition[1], tempW)
            const end = Math.max(currentPosition[1], tempW)
            for(let i= start; i<= end; i++){
                if(park[currentPosition[0]][i] === "X"){
                    isBlocked = true
                    break;
                }
            }
        } else {
            const start = Math.min(currentPosition[0], tempH)
            const end = Math.max(currentPosition[0], tempH)
            for(let i=start; i<= end; i++){
                if(park[i][currentPosition[1]] === "X"){
                    isBlocked = true
                    break;
                }
            }
        }
        if(!isBlocked){
        currentPosition = [tempH, tempW]    
        }
     } 
    }
    return currentPosition
}