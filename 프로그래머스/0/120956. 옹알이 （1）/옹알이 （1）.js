function solution(babbling) {
    const possible = ["aya", "ye", "woo", "ma"]
    
    for(let i=0; i< babbling.length; i++){
        for(let pos of possible){
            if(babbling[i].includes(pos)){
               babbling[i] = babbling[i].replace(pos, "X")
            }
        }
    }
    
    return babbling.filter((a) => a.split("X").join("") === "").length
}