export default function add (params, base = 0) {
  return params.reduce((acc, num) => {
    return acc + num
  }, base)
}
