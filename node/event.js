const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('sugalle', (name)=>{
    console.log("sugamanu ", name)
})

myEmitter.emit("sugalle", 'athul')