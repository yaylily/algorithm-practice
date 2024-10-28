function solution(n) {
    let i=1
    
    while(n>=1){
        if(n%i === 1){
            break;
        }
        i++ 
    }
    return i
}