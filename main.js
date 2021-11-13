const {Queue} = require('@datastructures-js/queue');
const axios = require('axios');

var globalStop = false;

function processPage(link, page,
  queue, visited, pattern) {
  
  visited.add(link);
  // Print out all matches.

  let el = document.createElement('template');
  el.innerHTML = page;
  let text = el.innerText;
  let matches = [...text.matchAll(new RegExp(pattern,'g'))];

  if(matches.length > 0) {
    console.log('Match: ',link);
  }


  // Extract links on the page and add them to the queue

  let linksRE = /href="(\/wiki\/.*?)"/g;
  let newLinks = [...page.matchAll(linksRE)];

  const currOrigin = window.location.origin;

  for(let nl of newLinks) if(nl.length > 1) {
    let newLink = nl[1];
    console.log(newLink);
    queue.enqueue(newLink);
  }

}


async function webgrep(pattern) {
  globalStop = false;
  window.addEventListener('mousedown',(e) => {
    console.log('Stopping webgrep!');
    globalStop = true;
  });


  let visited = new Set();
  const urlQueue = Queue.fromArray([window.location.toString()]);
  while(!urlQueue.isEmpty() && !globalStop) {
    const currLink = urlQueue.front().slice();
    urlQueue.dequeue();
    if(visited.has(currLink)) {
      continue;
    }
    
    let currPage = undefined;
    await axios.get(currLink)
      .then(value => {
        currPage = value.data;
      })
      .catch(err => {
        console.log('Error GETing ', currLink);
      });

    // Current page has been retrieved. Search text and
    // scrape links.

    if(currPage) {
      processPage(currLink, currPage, 
        urlQueue, visited, pattern);
    }
  }

}

module.exports = webgrep;
