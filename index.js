const app = "I don't do much."
function destructivelyAppendKitten(name){
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
