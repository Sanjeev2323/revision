const EventEmitter=require('events');
const emitter=new EventEmitter();


emitter.on('message',()=>{
    console.log('hello');
})
emitter.on('message',()=>{
    console.log('hi');
})
emitter.emit('message');