function solution(s) {
    let several = []
    const asc = [...s].sort()
    
    for(let i=0; i<asc.length; i++){
        if(asc[i] === asc[i+1]){
            several.push(asc[i])
        }
    }
    return asc.filter((a) => !several.includes(a)).join("")
}