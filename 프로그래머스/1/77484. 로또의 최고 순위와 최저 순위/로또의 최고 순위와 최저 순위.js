function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1]
    
    const min = lottos.filter((a) => win_nums.includes(a)).length
    const max = min + lottos.filter((a) => a === 0).length
    
    return [rank[max], rank[min]]
}