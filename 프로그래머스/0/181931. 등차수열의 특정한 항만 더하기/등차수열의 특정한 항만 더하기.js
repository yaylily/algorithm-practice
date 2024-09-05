function solution(a, d, included) {
    let sumValue = 0
    
    for(let i=0; i<included.length; i++){
        if(included[i]){
           sumValue += (a + d*i)
        } 
    }
    
    return sumValue;
}