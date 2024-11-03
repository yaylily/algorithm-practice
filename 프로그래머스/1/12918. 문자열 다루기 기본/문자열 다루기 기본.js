function solution(s) {
    const booleanS = s.split('').map((a) => {
        return isNaN(a) ? false : true
    })
    if((s.length === 4 || s.length === 6) && !booleanS.includes(false)){
        return true
    } else {
        return false
    }
    
}