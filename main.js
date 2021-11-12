const $ = require('jquery');
const {Queue} = require('@datastructures-js/queue');

var globalStop = false;

function webgrep(pattern) {
  globalStop = false;
  window.addEventListener('mousedown',(e) => {
    globalStop = true;
  });


  let visited = new Set();
  const urlQueue = Queue.fromArray([window.location]);
  while(!urlQueue.isEmpty() && !globalStop) {
    const currLink = urlQueue.front().slice();
    urlQueue.dequeue();
    
  }

}

