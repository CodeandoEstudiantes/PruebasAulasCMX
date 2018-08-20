function uniqueInOrder(iterable){
  if(Object.prototype.toString.call(iterable) == '[object Array]'){
    if(iterable.length<1){
      return [];
    }else{
      iterable=iterable.join('')
    }
  }
  return iterable.match(/([a-zA-Z0-9])\1*/g) == null? []:iterable.match(/([a-zA-Z0-9])\1*/g).map(x=> isNaN(+x.substring(0,1))?x.substring(0,1):+x.substring(0,1))
}


function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}

