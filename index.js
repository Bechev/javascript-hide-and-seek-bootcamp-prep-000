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


function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
