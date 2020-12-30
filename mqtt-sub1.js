var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://127.0.0.1:1883')

client.on('connect', function () {
    client.subscribe('theme-basketball')
    console.log('订阅：theme-basketball')
    client.subscribe('theme-football')
    console.log('订阅：theme-football')

})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log('-------sub1-------');
    console.log(topic);
    console.log(message.toString());
    //   client.end()
})