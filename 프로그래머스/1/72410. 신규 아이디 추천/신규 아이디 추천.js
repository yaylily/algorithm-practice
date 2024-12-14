function solution(new_id) {
    // 1단계
    new_id = new_id.toLowerCase()
    // 2단계
    new_id = new_id.replace(/[^a-z0-9-_.]/g, "")
    // 3단계
    new_id = new_id.replace(/\.{2,}/g, ".")
    // 4단계
    new_id = new_id.replace(/^\.|\.$/g,"")
    // 5단계
    new_id = new_id==="" ? "a" : new_id
    // 6단계
    new_id = new_id.substring(0, 15).replace(/\.$/g, "")
    // 7단계
    while(new_id.length < 3){
        new_id += new_id[new_id.length-1]
    }
    
    return new_id
}