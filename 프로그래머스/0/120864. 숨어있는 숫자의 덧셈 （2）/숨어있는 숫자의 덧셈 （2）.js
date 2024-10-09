function solution(my_string) {
    
    return my_string.split("").map(a => isNaN(a) ? "A": a).join("").split("A").reduce((acc, b) => acc + Number(b), 0)
}