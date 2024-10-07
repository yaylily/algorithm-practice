function solution(dots) {
    let width = []
    let hight = []
    
    for(let i=0; i<dots.length; i++){
        width.push(dots[i][0])
        hight.push(dots[i][1])
    }
    
    const wLength = Math.max(...width) - Math.min(...width)
    const hLength = Math.max(...hight) - Math.min(...hight)
    
    return wLength*hLength
}