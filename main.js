//get canvas object
const canvas = document.getElementById('canvaz');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let timeToNextEnemy = 0;
let enemyInterval = 666;
let lastTime = 0;

//
let enemies = [];
class Enemy{
     constructor(){
         this.width = 100;
         this.height =50;
         this.x = canvas.width;
         this.y = Math.random() * (canvas.height - this.height);
         this.directionX = Math.random() * 6 + 2;
         this.directionY = Math.random() * 5 - 1.5;
     }
     update(){
         this.x -= this.directionX;
     }
     draw(){
         context.fillRect(this.x, this.y, this.width, this.height);
     }
}

//random animation with rectangles as enemies
           // ADD ART

function animate(timestamp){
    context.clearRect(0, 0, canvas.width, canvas.height);
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    timeToNextEnemy += deltaTime
        if(timeToNextEnemy > enemyInterval){
            enemies.push(new Enemy());
            timeToNextEnemy = 0;
            console.log(enemies)
        }
        [...enemies].forEach(object => object.update());
        [...enemies].forEach(object => object.draw());
    requestAnimationFrame(animate);
}
animate(0);