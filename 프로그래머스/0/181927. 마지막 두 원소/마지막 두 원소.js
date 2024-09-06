function solution(num_list) {

    const lastIndex = num_list[num_list.length-1]
    const secondIndex = num_list[num_list.length-2]
    
    const newOne  = lastIndex > secondIndex ? lastIndex - secondIndex : lastIndex * 2
    num_list.push(newOne)
    
    return num_list;
}