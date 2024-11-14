function solution(name, yearning, photo) {
    //photo 배열 map으로 하나씩 돌린다.
    return photo.map((p) => {
      //for문 index로 사진속 인물 하나씩 돌린다  
        for(let i=0; i<p.length; i++){
            //name배열에서 photo를 포함하고있으면 name배열의 같은 인덱스를 가진 yearning으로 바꿔준다
            if(name.includes(p[i])){
                p[i] = yearning[name.indexOf(p[i])]
            } else {
                p[i] = 0
            }
        }
    //배열 reduce를 통해 더해준 후 반환        
        return p.reduce((a, b) => a+b)
    })
}