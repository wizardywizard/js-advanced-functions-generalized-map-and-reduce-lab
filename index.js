function map(array, func){
  let answer = []
  let i = 0
  while(i < array.length){
    answer.push(func(array[i]))
    i += 1
  }
  return answer
}

function reduce(array, sv=0){
    if (sv){
        let sum =sv
        let i =0
    }else{
        let sum = array[0]
        let i = 1
    }
    while (i < array.length){
        console.log(sum)
        i += 1
    }
    return sum
}