function solution(id_pw, db) {
    const inputId = id_pw[0]
    const inputPw = id_pw[1]
    
    for(let info of db){
        if(inputId === info[0]){
            if(inputPw === info[1]){
                return "login"
            } else {
                return "wrong pw"
            }
        }
    }
    return "fail"
}