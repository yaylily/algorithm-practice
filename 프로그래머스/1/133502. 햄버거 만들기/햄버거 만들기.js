function solution(ingredient) {
    let count = 0;
    
    const pattern = '1231'
    let stack = []
    
    for(let i=0; i<ingredient.length; i++){
        stack.push(ingredient[i])

        if(stack.length >= 4 && stack.slice(-4).join("") === pattern){
            count ++
            stack.splice(-4, 4)
        }
    }
    return count
}