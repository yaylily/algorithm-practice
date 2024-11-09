function solution(s) {
    let object = {}
    
    return s.split("").map((a, index) => {
        if(a in object) {
            const diff = index - object[a]
            object[a] = index
            return diff
        } else {
            object[a] = index
            return -1
        }
    })  
}
