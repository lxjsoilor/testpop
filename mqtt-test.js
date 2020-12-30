var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://127.0.0.1:1883')

client.on('connect', function () {
    client.subscribe('presence')
    // client.publish('presence', 'Hello mqtt' + (+new Date()))
    // setInterval(() => {
    //     client.publish('presence', 'Hello mqtt' + (+new Date()))
    // }, 1000)
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(topic)
    console.log(message.toString())
    //   client.end()
})