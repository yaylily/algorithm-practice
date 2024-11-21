function solution(n, m, section) {
    let count =0;
    
    for(let i=section[0]; i<=section[section.length-1]; i++){
        if(section.includes(i)) {
            i+=(m-1)
             count ++            
        }
    }
    return count
}