function solution(survey, choices) {
    let answer = ''
    let personality = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0}
    
    for(let i=0; i<choices.length; i++){
        if(choices[i]<4){
            personality[survey[i][0]] += Math.abs(choices[i]-4)
        } else if(choices[i]>4){
            personality[survey[i][1]] += (choices[i]-4)
        }
    }
    console.log(personality)
    const keys = Object.keys(personality)    
    const values = Object.values(personality)
    console.log(values)
    console.log(keys)
    
    for(let i=0; i<keys.length; i+=2){
        if(values[i] > values[i+1]){
            answer += keys[i]
        } else if(values[i] < values[i+1]){
            answer += keys[i+1]
        } else {
            const same = [keys[i], keys[i+1]].sort()
            answer += same[0]
        }
    }
    return answer
    
}