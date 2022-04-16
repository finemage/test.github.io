const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

const dino = {
x : 10;
y : 200;
width : 50;
height :50;
draw(){
ctx.fillStyle = 'green';
ctx.fillRect(this.x,dthis.y,this.width,this.height);
}
}

class cactus{
constructor(){
this.x = 500;
this.y = 200;
this.width = 50;
this.height = 50;
draw(){
ctx.fillStyle = 'red';
ctx.fillRect(this.x,dthis.y,this.width,this.height);
}
}
}
const cactus = new cactus();
cactus.draw();

function frame(){
 requestAnimationFrame(frame)
 dino.x++;
 dino.draw();
}

frame();
