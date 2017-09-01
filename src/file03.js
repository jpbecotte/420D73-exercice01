const f = function (x) {
  return x*x
}

const g = function (y) {
  return y+y
}

compose = (f1,f2,x)=> f2(f1(x))

console.log('La composition est '+compose(f,g,4))
