function solution(food) {
    // 각 인덱스의 값/2 한 후 정수화한 값만큼 반복한 배열 생성
    const order = food.map((f, index) => index.toString().repeat(f/2))
    const reverse = [...order].reverse()
    
    //'0'추가해서 합치기
    return order.join("")+"0"+ reverse.join("")
}
