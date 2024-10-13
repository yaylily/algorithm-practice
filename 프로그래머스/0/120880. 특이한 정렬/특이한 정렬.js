function solution(numlist, n) {
    let differences =[]
    
    for(let i=0; i<numlist.length; i++){
        differences[i] = []
        differences[i][0] = numlist[i]
        differences[i][1] = Math.abs(numlist[i] - n)
    }
   
    differences.sort((a, b) => {
        if(a[1] === b[1]){
            return b[0] - a[0]
        } else {
            return a[1] - b[1]
        }
    })
    
    return differences.map((a) => a[0])
}