function map(array, func){
  let answer = []
  let i = 0
  while(i < array.length){
    answer.push(func(array[i]))
    i += 1
  }
  return answer
}

function reduce(array, func, sv=0){
    if (sv){
        var sum = sv
        var i = 0
    }else{
        var sum = array[0]
        var i = 1
    }
    while (i < array.length){
        sum = func(sum, array[i])
        i += 1
    }
    return sum
}