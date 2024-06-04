function solution(s, n) {
    var answer = '';
    
    for(let i=0; i<s.length;i++){
        if(s[i]=== " "){
            answer += " "
        } else{
            let asc = s.charCodeAt(i)
            if(asc <= 90){
                asc += n
                if(asc>90){
                    asc -= 26
                }
            } else{
                asc += n;
                if(asc > 122){
                    asc -= 26
                }
            }   
      answer += String.fromCharCode(asc);
        }
    }
    return answer;
}