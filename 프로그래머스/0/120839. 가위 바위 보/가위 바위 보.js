function solution(rsp) {
    const victory = {
        "2":"0", "0":"5", "5":"2" 
    }
    
    return [...rsp].map((a)=>victory[a]).join("")
}