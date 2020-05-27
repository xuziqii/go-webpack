import add from "./utils"
// const lotus = require("./assets/lotus.gif").default

import lotus from './assets/lotus.gif';
console.log(lotus)

const img = document.createElement('img')
img.src = lotus
const root = document.getElementById('root')
root.append(img)

const res = add([1,2,3,4], 10)
console.log(res)
