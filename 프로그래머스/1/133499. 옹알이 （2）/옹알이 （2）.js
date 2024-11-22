function solution(babbling) {
    const can = ["aya" ,"ye", "woo", "ma"]
    
    const speak = babbling.map((b) => {
        for(let c of can){
            while(b.includes(c)){
                console.log(c+c)
                if(b.includes(c+c)) break
                b = b.replace(c, "X")
            }
        }
        b = b.split("X").join("")
        return b
    })
    return speak.filter((a) => a === "").length
}