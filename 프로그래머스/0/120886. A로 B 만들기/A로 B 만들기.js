function solution(before, after) {
    
    for(let i=0; i<before.length; i++){
        for(let j=0; j<after.length; j++){
            if(before[i] === after[j]){
                before = before.replace(before[i], "X")
                after =after.replace(after[j], "Y")
            }
        }
    }
    return before.split("X").join("").length === 0 ? 1 : 0
}