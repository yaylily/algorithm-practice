function solution(array) {
    let answer = 0
    for(let a of array){
        const strArr = String(a).split("")
        for(let i=0; i<strArr.length; i++){
            if(strArr[i] === "7"){
                answer += 1
            }
        }
    }
    
    return answer
}