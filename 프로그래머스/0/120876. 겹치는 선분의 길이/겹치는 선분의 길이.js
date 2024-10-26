function solution(lines) {
    let everyLines = [];
    
    for(let line of lines){
        for(let i= line[0]; i<line[1]; i++){
            everyLines.push(i)
        }
    }
    let countObj = everyLines.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1
        return acc
    }, {})
    
    let matchLines = 0;
    for(let key in countObj){
        if(countObj[key] > 1){
            matchLines ++
        }
    }
    
    return matchLines
}