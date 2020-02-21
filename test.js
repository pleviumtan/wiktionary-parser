const uTool = require('./utility.js');
const axios = require('axios');
const { Toolkit } = require('actions-toolkit')
//解析返回的数据
function parseWiki(json,cb){
  const root = HTMLParser.parse(json)
  //获取所有中文发音
  cb(root)
}
const getHokkienPron = uTool.getHokkienPron;
const getMiddlePron = uTool.getMiddlePron
const HTMLParser = require('node-html-parser');
//just for test
var w = '中'
var reg = /\/\*\*\/\((.*)\)/
const baseURL = 'http://en.wiktionary.org';
Toolkit.run(
    async tools =>{
        tools.log.debug('running....')
        let st = new Date().getTime(); 
        // Make a request
        axios.get(baseURL+'/w/api.php?action=parse&format=json&prop=text|revid|displaytitle&callback=?&page='+encodeURI(w))
        .then(function (response) {
        // handle success
        let json = reg.exec(response.data)[1]
        //Html
        let parse = JSON.parse(json).parse.text['*']
        parseWiki(parse,getMiddlePron)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

        let et = new Date().getTime();
        tools.log.debug(et-st)
    }
)
