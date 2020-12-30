function sayHello(){
	var out = document.createElement("input");
  document.body.innerHTML = '';
  document.body.appendChild(out);
  out.addEventListener("keydown", (e) => {
    if(e.code === 'Enter') {
      _(e.target.value)
    }
  })
  out.addEventListener("blur", (e) => {
      _(e.target.value)
  })
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) { //判断响应的状态码是否正常
    return response //正常返回原响应对象
  } else {
    var error = new Error(response.statusText) //不正常则抛出一个响应错误状态信息
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}
var m = {
  "A": "1",
  "B": "2",
  "C": "3",
  "D": "4"
}
function _(name='', content='') {
  fetch('http://dev-api.flytiger.net/PRODUCT608060_demo/study/anon/list', 
      {
        method: 'POST',
         headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
        body: JSON.stringify({
    "content": content,
    "name": name,
    "rightAnswer": "",
    "current": 0,
    "size": 1000000
  })
}).then(checkStatus)
  .then(parseJSON)
  .then(function(data) {
    if(data.data && data.data.records[0]) {
      console.log(data.data.records.length)
      console.log(data.data.records[0].rightAnswer)
    }
  }).catch(function(error) {
    console.log('request failed', error)
  })
}

window.onload = sayHello;