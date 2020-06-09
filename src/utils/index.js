export default function add (params, base = 0) {
  console.log("utils index update!!!")
  return params.reduce((acc, num) => {
    return acc + num
  }, base)
}
