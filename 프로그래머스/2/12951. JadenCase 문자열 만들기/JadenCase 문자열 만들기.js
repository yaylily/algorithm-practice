function solution(s) {
    var answer = '';
    
    let words = s.split(' ').map(word => {
        if(word.length === 0){
        return ''
        } else {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
        }
    }).join(' ')
    
    answer = words
    
    return answer;
}