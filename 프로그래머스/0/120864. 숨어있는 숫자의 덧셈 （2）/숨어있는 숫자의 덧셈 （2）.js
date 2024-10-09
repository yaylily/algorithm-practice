function solution(my_string) {
    
    let sum = 0
    let currentNum = ''
    
    for(let str of my_string){
        if(!isNaN(str)){
            currentNum += str
        } else if(currentNum){
            sum += Number(currentNum)
            currentNum = ''
        }
    }
    
    if(currentNum){
        sum += Number(currentNum)
    }
    
    return sum
}