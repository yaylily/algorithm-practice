function solution(wallpaper) {
    let lux = 0
    let luy = 0
    let rdx = 0
    let rdy = 0
    
    for(let i=0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[i].length; j++){
            if(wallpaper[i][j] === "#"){
                // 처음 기준
                if(lux===0 && luy===0 && rdx===0 && rdy===0){
                lux = i
                luy = j
                rdx = i+1
                rdy = j+1
                }
                // 기준점 보다 작거나 큰 경우 갱신
                if(i < lux) lux = i
                if(j < luy) luy = j
                if(i+1 > rdx) rdx = i+1
                if(j+1 > rdy) rdy = j+1
            }
        }
    }
    return [lux, luy, rdx, rdy]
}