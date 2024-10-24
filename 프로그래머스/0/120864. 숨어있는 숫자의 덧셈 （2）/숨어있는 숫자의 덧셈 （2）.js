function solution(my_string) {
    let tempNum = '';
    let sum = 0;
    
    for(let s of my_string){
        if(!isNaN(s)){
            tempNum += s
        } else {
            sum += +tempNum
            tempNum = ''
        }
    }
    if(tempNum !== "") sum += +tempNum
    
    return sum
}