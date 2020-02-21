//搜索闽南语发音
function getHokkienPron(root){
  let prons = root.querySelectorAll('.zhpron')
  //对于每个中文发音，处理不同地方的方音
  for(let i = 0; i < prons.length; i++){
    let dialect = prons[i].querySelector('.vsSwitcher').querySelector('ul').querySelectorAll('li')
    //对于每个方音，搜索闽南语发音所在的位置
    for(let j = 0; j< dialect.length; j++){
      let t = dialect[j].querySelector('a').getAttribute('title')
      if(t==='w:Min Nan'){
        const minNan = dialect[j].querySelector('dl')
        console.log('Pronounciation'+(i+1)+'\n'+minNan.text)
      }
    }
  }
}

//搜索中古汉语发音
function getMiddlePron(root){
  let prons = root.querySelectorAll('.zhpron')
  //对于每个中文发音，找到中古音所在的dom元素
  for(let i = 0; i < prons.length; i++){
    let d = prons[i].querySelectorAll('div')
    for(let j = 0; j<d.length; j++){
      //找到中古音所在的栏目
      if(d[j].getAttribute('class') === undefined){
        let m = d[j].querySelector('.vsSwitcher').querySelector('.vsHide').querySelector('tbody').querySelectorAll('tr')
        for(let k = 0; k<m.length;k++){
          if(m[k].querySelector('td')==null){
            console.log(m[k].text.trim())
          }
          else{
            console.log(m[k].querySelector('th').text.trim()+' '+m[k].querySelector('td').text.trim())
          }
        }
        
      }
    }
  }  
}

module.exports={
    getHokkienPron:getHokkienPron,
    getMiddlePron:getMiddlePron
}