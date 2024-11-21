function solution(n, m, section) {
    let count =0;
    let painted = 0
    
    section.forEach((a) => {
        if(a>painted){
            painted = a+m-1
            count ++
        }
    })
    return count
}