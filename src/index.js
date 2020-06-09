import add from "./utils"
// const lotus = require("./assets/lotus.gif").default

import "./assets/styles/index.css"

import "./assets/styles/less-style.less";
import "./assets/styles/scss-style.scss";
// import "./assets/styles/stylus-style.styl";


import lotus from './assets/imgs/lotus.gif';

console.log(lotus)

const img = document.createElement('img')
img.src = lotus
img.classList.add('img-wrapper')
// img.classList.add(localStyle['img-wrapper'])
const root = document.getElementById('root')
root.append(img)

const res = add([1,2,3,4], 15)
console.log(res)
