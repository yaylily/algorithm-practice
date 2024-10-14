function solution(score) {
   const average = score.map((a) => (a[0]+a[1])/2)
   const grade = [...average].sort((a, b) => b - a)
   
   return average.map((a) => grade.indexOf(a)+1)
}