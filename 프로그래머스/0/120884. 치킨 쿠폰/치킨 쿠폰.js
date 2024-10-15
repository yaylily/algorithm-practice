function solution(chicken) {
    
    let service = Math.floor(chicken/10);
    let remainingCp = chicken%10 + service;
    
    while(remainingCp >= 10){
        service += Math.floor(remainingCp/10)
        remainingCp = remainingCp%10 + (Math.floor(remainingCp/10))
    }
    
    return service
}

//chicken 시켜먹은 치킨의 수
//return 받을 수 있는 최대 서비스 치킨의 수
