const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

class Player{
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
    }
}

class Projectile{
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
    }
}

const player = new Player(canvas.width/2, canvas.height/2, 30, 'blue');
player.draw();

window.addEventListener('click', (event) => {
    const projectile = new Projectile(event.clientX, event.clientY, 10, 'black', 10);
    projectile.draw();
});