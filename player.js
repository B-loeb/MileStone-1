class Player {
    constructor(x, y, radius, color){
    this.x = x
    this.y = y
    this.radius = radius
    this.color= color
    }
    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0 Math.PI * 2, false)
        context.fillStyle = this.color
        context.fill()
    }
}
    const x = canvas.width / 2
    const y = canvas.height / 2
const player = new Player(x, y, 30, 'blue')
player.draw()