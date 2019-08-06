
var ALERT_TITLE = "Oops!";
var ALERT_BUTTON_TEXT = "Ok";

if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }

    alertObj.style.display = "block";

}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var grid = 16;
var count = 0;
       var flag=false; 
var dum=0;
var highscore=0;
var snake = {
  x: 160,
  y: 160,
    score:0,
  // snake velocity. moves one grid length every frame in either the x or y direction
  dx: grid,
  dy: 0,
  
  // keep track of all grids the snake body occupies
  cells: [],
  
  // length of the snake. grows when eating an apple
  maxCells: 4
};
var apple = {
  x: 320,
  y: 320
};
var obstacle={
    x:-1,
    y:-1
};
var obstacle1={
    x:-1,
    y:-1
};    
var obstacle2={
  x:-1,
  y:-1
};
var obstacle3={
  x:-1,
  y:-1
};
var obstacle4={
  x:-1,
  y:-1
};
var obstacle5={
  x:-1,
  y:-1
};

// get random whole numbers in a specific range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// game loop
function loop() {
  requestAnimationFrame(loop)
  
      
    document.getElementById('score').innerHTML="<font color='white'>"+snake.score+"</font>";
    if(snake.score>=highscore){
//        document.getElementById('score2').innerHTML="<font color='white'>"+ "Highscore" + "</font>";
        document.getElementById('score2').innerHTML="<font color='white'>"+ highscore + "</font>";
    }   
    else{
//        document.getElementById('score2').innerHTML="<font color='white'>"+ "Highscore: </font>";
        document.getElementById('score2').innerHTML="<font color='white'>"+ highscore + "</font>";
    }

  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  if (++count < 4) {
    return;
  }
  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);
  // move snake by it's velocity
  snake.x += snake.dx;
  snake.y += snake.dy;
  // wrap snake position horizontally on edge of screen
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }
  
  // wrap snake position vertically on edge of screen
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }
  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({x: snake.x, y: snake.y});
  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }
  // draw apple
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid-1, grid-1);
    
   
    //draw poison/obstacle
if(snake.score>=1){
    
    context.fillStyle='mediumseagreen';
    context.fillRect(obstacle.x, obstacle.y, grid-1, grid-1);
}
    if(snake.score>=5){
    context.fillStyle='mediumseagreen';
    context.fillRect(obstacle1.x, obstacle1.y, grid-1, grid-1);

}
    if(snake.score>=10){
    context.fillStyle='mediumseagreen';
    context.fillRect(obstacle2.x, obstacle2.y, grid-1, grid-1);

}
    if(snake.score>=15){
    context.fillStyle='mediumseagreen';
    context.fillRect(obstacle3.x, obstacle3.y, grid-1, grid-1);

}
    if(snake.score>=20){
    context.fillStyle='mediumseagreen';
    context.fillRect(obstacle4.x, obstacle4.y, grid-1, grid-1);
}
    if(snake.score>=25){
    context.fillStyle='mediumseagreen';
    context.fillRect(obstacle5.x, obstacle5.y, grid-1, grid-1);
}

  // draw snake one cell at a time
  context.fillStyle = 'green';
    
  snake.cells.forEach(function(cell, index) {
    // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
    context.fillRect(cell.x, cell.y, grid-1, grid-1);  
    // snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
        snake.score++;
 
       apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;

             if(snake.score>=1){
        if (apple.x === obstacle1.x && apple.y === obstacle1.y){
    obstacle1.x = getRandomInt(0, 25) * grid;
      obstacle1.y = getRandomInt(0, 25) * grid;
     }
        obstacle.x = getRandomInt(0, 25) * grid;
      obstacle.y = getRandomInt(0, 25) * grid;
}
if(snake.score>=5){
    
         if (apple.x === obstacle2.x && apple.y === obstacle2.y){
    obstacle2.x = getRandomInt(0, 25) * grid;
      obstacle2.y = getRandomInt(0, 25) * grid;
     }
    obstacle1.x = getRandomInt(0, 25) * grid;
      obstacle1.y = getRandomInt(0, 25) * grid;
} 
if(snake.score>=10){
    
         if (apple.x === obstacle3.x && apple.y === obstacle3.y){
    obstacle3.x = getRandomInt(0, 25) * grid;
      obstacle3.y = getRandomInt(0, 25) * grid;
     }
     obstacle2.x = getRandomInt(0, 25) * grid;
      obstacle2.y = getRandomInt(0, 25) * grid;
}if(snake.score>=15){
           if (apple.x === obstacle4.x && apple.y === obstacle4.y){
    obstacle4.x = getRandomInt(0, 25) * grid;
      obstacle4.y = getRandomInt(0, 25) * grid;
     }
   obstacle3.x = getRandomInt(0, 25) * grid;
      obstacle3.y = getRandomInt(0, 25) * grid;
}if(snake.score>=20){
   
        obstacle4.x = getRandomInt(0, 25) * grid;
      obstacle4.y = getRandomInt(0, 25) * grid;
}if(snake.score>=25){
      
         if (apple.x === obstacle5.x && apple.y === obstacle5.y){
    obstacle5.x = getRandomInt(0, 25) * grid;
      obstacle5.y = getRandomInt(0, 25) * grid;
     }
   obstacle5.x = getRandomInt(0, 25) * grid;
      obstacle5.y = getRandomInt(0, 25) * grid;
        
}
	var audio = new Audio("eating_sound_effect.wav");
	audio.play();
}

     if (cell.x === obstacle.x && cell.y === obstacle.y){
                     alert("SCORE: "+ snake.score);
            highscore=snake.score;
        alert("Oops! You ate a poisoned apple! Try again.");
        console.log(snake.score);
        snake.score=0;
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
		    obstacle.x = -1;
      obstacle.y = -1;
        obstacle1.x = -1;
      obstacle1.y = -1;
        obstacle2.x = -1;
      obstacle2.y = -1;
        obstacle3.x = -1;
      obstacle3.y = -1;
        obstacle4.x = -1;
      obstacle4.y = -1;
        obstacle5.x = -1;
      obstacle5.y = -1;
		var audio = new Audio("death_sound_effect.wav");
		audio.play();
     }
        if (cell.x === obstacle1.x && cell.y === obstacle1.y){
                        alert("SCORE: "+ snake.score);
            highscore=snake.score;
      alert("Oops! You ate a poisoned apple! Try again.");
        console.log(snake.score);
        snake.score=0;
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
             obstacle.x = -1;
      obstacle.y = -1;
        obstacle1.x = -1;
      obstacle1.y = -1;
        obstacle2.x = -1;
      obstacle2.y = -1;
        obstacle3.x = -1;
      obstacle3.y = -1;
        obstacle4.x = -1;
      obstacle4.y = -1;
        obstacle5.x = -1;
      obstacle5.y = -1;  
		var audio = new Audio("death_sound_effect.wav");
		audio.play();
     }
      if (cell.x === obstacle2.x && cell.y === obstacle2.y){
                      alert("SCORE: "+ snake.score);
            highscore=snake.score;
      alert("Oops! You ate a poisoned apple! Try again.");
        console.log(snake.score);
        snake.score=0;
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
		    obstacle.x = -1;
      obstacle.y = -1;
        obstacle1.x = -1;
      obstacle1.y = -1;
        obstacle2.x = -1;
      obstacle2.y = -1;
        obstacle3.x = -1;
      obstacle3.y = -1;
        obstacle4.x = -1;
      obstacle4.y = -1;
        obstacle5.x = -1;
      obstacle5.y = -1;
		var audio = new Audio("death_sound_effect.wav");
		audio.play();
     }
      if (cell.x === obstacle3.x && cell.y === obstacle3.y){
                      alert("SCORE: "+ snake.score);
            highscore=snake.score;
     alert("Oops! You ate a poisoned apple! Try again.");
        console.log(snake.score);
        snake.score=0;
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
		    obstacle.x = -1;
      obstacle.y = -1;
        obstacle1.x = -1;
      obstacle1.y = -1;
        obstacle2.x = -1;
      obstacle2.y = -1;
        obstacle3.x = -1;
      obstacle3.y = -1;
        obstacle4.x = -1;
      obstacle4.y = -1;
        obstacle5.x = -1;
      obstacle5.y = -1;
		var audio = new Audio("death_sound_effect.wav");
		audio.play();
     }
      if (cell.x === obstacle4.x && cell.y === obstacle4.y){
                      alert("SCORE: "+ snake.score);
            highscore=snake.score;
        alert("Oops! You ate a poisoned apple! Try again.");
        console.log(snake.score);
        snake.score=0;
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
		    obstacle.x = -1;
      obstacle.y = -1;
        obstacle1.x = -1;
      obstacle1.y = -1;
        obstacle2.x = -1;
      obstacle2.y = -1;
        obstacle3.x = -1;
      obstacle3.y = -1;
        obstacle4.x = -1;
      obstacle4.y = -1;
        obstacle5.x = -1;
      obstacle5.y = -1;
		var audio = new Audio("death_sound_effect.wav");
		audio.play();
     }
      if (cell.x === obstacle5.x && cell.y === obstacle5.y){
         alert("Oops! You ate a poisoned apple! Try again.");
                      alert("SCORE: "+ snake.score);
            highscore=snake.score;
        console.log(snake.score);
        snake.score=0;
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
		    obstacle.x = -1;
      obstacle.y = -1;
        obstacle1.x = -1;
      obstacle1.y = -1;
        obstacle2.x = -1;
      obstacle2.y = -1;
        obstacle3.x = -1;
      obstacle3.y = -1;
        obstacle4.x = -1;
      obstacle4.y = -1;
        obstacle5.x = -1;
      obstacle5.y = -1;
		var audio = new Audio("death_sound_effect.wav");
		audio.play();
     }
    
      
    // check collision with all cells after this one (modified bubble sort)

    for (var i = index + 1; i < snake.cells.length; i++) {
      
      // snake occupies same space as a body part. reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
      
          flag=true;
          
		  var audio = new Audio("death_sound_effect2.wav");
		  audio.play();
   
      }
    }
    
  
      
      
        if(flag==true){
            alert("SCORE: "+ snake.score);
            highscore=snake.score;
			alert("You just ate yourself! Try again.");
			flag=false;
			console.log(snake.score);
			snake.score=0;
			snake.x = 160;
			snake.y = 160;
			snake.cells = [];
			snake.maxCells = 4;
			snake.dx = grid;
			snake.dy = 0;
			apple.x = getRandomInt(0, 25) * grid;
			apple.y = getRandomInt(0, 25) * grid;
               obstacle.x = -1;
      obstacle.y = -1;
        obstacle1.x = -1;
      obstacle1.y = -1;
        obstacle2.x = -1;
      obstacle2.y = -1;
        obstacle3.x = -1;
      obstacle3.y = -1;
        obstacle4.x = -1;
      obstacle4.y = -1;
        obstacle5.x = -1;
      obstacle5.y = -1;
			 
      }
      
     
  });
 
     

}
      
// listen to keyboard events to move the snake
document.addEventListener('keydown', function(e) {
  // prevent snake from backtracking on itself by checking that it's 
  // not already moving on the same axis (pressing left while moving
  // left won't do anything, and pressing right while moving left
  // shouldn't let you collide with your own body)
  
  // left arrow key
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  // up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});
// start the game
requestAnimationFrame(loop);