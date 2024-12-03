function solution(participant, completion) {
    let completionObj = completion.reduce((obj, p) => (obj[p] = obj[p]? obj[p]+1 : 1,obj),{})
    
    return participant.find((p) => {
        if(completionObj[p]){
            completionObj[p] = completionObj[p]-1
        } else {
            return true
        }
    })
}


