// curl--location--request POST 'https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=%25s&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e&' \
// --header 'Content-Type: application/x-www-form-urlencoded' \
// --data - urlencode 'sl=de' \
// --data - urlencode 'tl=en' \
// --data - urlencode 'q=Hallo'

var axios = require('axios');
var qs = require('qs');

var data = qs.stringify({
 'sl': 'en',
'tl': 'pt-br',
'q': 'Hello' 
});

var config = {
  method: 'post',
  url: 'https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=%25s&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e&',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
  },
  data : data
};

const api = axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

export default api;