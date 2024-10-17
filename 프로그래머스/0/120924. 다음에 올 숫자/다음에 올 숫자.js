function solution(common) {
    if(common[1]-common[0] === common[2]-common[1]){
        const difference1 = common[1]-common[0]
        return common[0] + (difference1*common.length)
    } else {
        const difference2 = common[1]/common[0]
        return common[0] * (difference2 ** common.length)
    }
}
