function solution(N, stages) {
    let position = {}
    let people = stages.length
    
    for(let i=1; i<=N; i++){
            position[i] = 0
            for(let stage of stages){
                if(i === stage) position[i] += 1
            }
            let person = position[i]
            position[i] = position[i]/people
            people -=  person
    }

    return Object.entries(position).sort((a, b) =>{
        if(a[1] === b[1]) return a[0] - b[0]
        return b[1] - a[1]
    }).map(([key]) => +key)
}