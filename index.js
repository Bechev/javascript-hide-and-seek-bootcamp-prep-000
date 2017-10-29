function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(nested,target){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){

  const lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = +(lis[i].innerHTML) + n
  }
}


function deepestChild(){
const main =document.querySelector('#grand-node')
const div=main.children[0]
const div1=div.children[0]
const div2=div1.children[0]
const p = div2.getElementsByTagName('div')[0]
return p
}
