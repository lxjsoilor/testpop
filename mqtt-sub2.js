var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://127.0.0.1:1883')

client.on('connect', function () {
    client.publish('theme-basketball', '篮球周刊来啦啦啦啦啦！！！！！！')
    console.log('发布：theme-basketball')

})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log('-------sub2-------');
    console.log(topic);
    console.log(message.toString());
    //   client.end()
})