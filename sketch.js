function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(127);
  noStroke();
  for( var i = 0  ; i < height ; i+=20 ){
    fill(129, 206, 15);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
  }
}

var PromiseCount = 0;

function testPromise() {
  var thisPromiseCount = ++PromiseCount;
  
  var log = document.getElementById("log");
  log.insertAdjacentHTML('beforeend', thisPromiseCount + 
      ') Started (<small>Sync code started</small>)<br/>');
  
  var p1 = new Promise(
    function(resolve, reject){
      
      log.insertAdjacentHTML('beforeend', thisPromiseCount + 
          ') Promise Started (<small>Async code started</small>)<br/>');
      
      window.setTimeout(
        function(){
          resolve(thisPromiseCount)
        }, Math.random() * 2000 + 1000);
    });
    
    
    p1.then(
      function(val){
        log.insertAdjacentHTML('beforeend', thisPromiseCount + 
            ') Promise Fulfilled (<small>Async code terminated</small>)<br/>');
    });
    
    log.insertAdjacentHTML('beforeend', thisPromiseCount + 
        ') Promise made (<small>sync code terminated</small>)<br/>');
}