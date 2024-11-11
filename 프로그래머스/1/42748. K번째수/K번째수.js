function solution(array, commands) {
    let answer = [];
    
    //array에 대해 commands 돌리기
    commands.forEach((a) => {
        const temp = [...array]
        //array i부터 j까지 잘라 정렬
        const Kth = temp.slice(a[0]-1, a[1]).sort((a, b)=> a-b)[a[2]-1]
        answer.push(Kth)
    })
    return answer
}