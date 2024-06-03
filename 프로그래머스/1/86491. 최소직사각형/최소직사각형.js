function solution(sizes) {
    var answer = 0;
    
    let height =0;
    let width = 0;
    
    for(let i=0; i<sizes.length; i++){
        if(sizes[i][0]>sizes[i][1]){
            sizes[i].reverse()
        }
        if(sizes[i][0] > height){
            height = sizes[i][0]
        };
        if (sizes[i][1]>width){
            width = sizes[i][1]
        }
    }
    
    return answer = height * width;
}