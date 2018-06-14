function getFirstSelector(selector){
  var s = document.querySelector(selector)
  return s;
}

function nestedTarget(){
  var n = document.getElementById('nested').querySelector('div.target')
  return n;
}

function increaseRankBy(n){
  var rank = document.querySelectorAll('ul.ranked-list')
  for(var i = 0; i < rank.length; i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
  return rank;
}

function deepestChild(){
  var deep = document.querySelector('div#grand-node').querySelectorAll('div')
  var next = [];
  for(var i = 0; i< deep.length; i++){
    next.push(deep[i]);
  }
  deep = next.pop();

  return deep;
}