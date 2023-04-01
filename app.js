const canvas = document.querySelector("canvas")
canvas.width = innerWidth
canvas.height = innerHeight
const ctx = canvas.getContext("2d")


class LOJTARI{
    constructor({position,velocity}){
        this.position = position
        this.velocity = velocity
        this.width = 30
        this.height = 250

    }
    vizato(){
    ctx.beginPath();
    ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    ctx.stroke();
    ctx.fillStyle = "white"
    }
    update(){
        this.vizato()
        this.position.y += this.velocity.y
    }
}

class TOPI{
    constructor({position,velocity}){
        this.position = position
        this.velocity = velocity
        this.width = 40
        this.height = 40 
    }

    vizato(){
        ctx.beginPath();
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
        ctx.stroke();
        ctx.fillStyle = "white"
    }
    update(){
        this.vizato()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

    }
}

const topi = new TOPI({
    position:{
        x:canvas.width/2,
        y:350
    },
    velocity:{
        x:Math.random() < 0.5 ? -10 :10,
        y:0
    }
})

const lojtari = new LOJTARI({
    position:{
        x:0,
        y:230
    },
    velocity:{
        y:0
    }
})
const lojtari2 = new LOJTARI({
    position:{
        x:canvas.width - lojtari.width,
        y:230
    },
    velocity:{
        y:0
    }
})

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    lojtari.update()
    lojtari2.update()
    topi.update()

    if(topi.position.y == 0){

        topi.velocity.y = 20
        console.log("kapi")
    }
    if(topi.position.y == 800){

        topi.velocity.y = -20
        console.log("kapi")
    }
    if (topi.position.x < lojtari.position.x + lojtari.width &&
        topi.position.x + topi.width > lojtari.position.x &&
        topi.position.y < lojtari.position.y + lojtari.height &&
        topi.position.y  + topi.height > lojtari.position.y) {
         // collision detected!
            topi.velocity.x = 10
            topi.velocity.y = Math.random() < 0.5 ? -10 :10   
        }
     if (topi.position.x < lojtari2.position.x + lojtari2.width &&
        topi.position.x + topi.width > lojtari2.position.x &&
        topi.position.y < lojtari2.position.y + lojtari2.height &&
        topi.position.y + topi.height > lojtari2.position.y) {
         // collision detected!
         topi.velocity.x = -10
            console.log("lojtari2")
     }
    requestAnimationFrame(update)
}
update()
addEventListener("keydown",(e)=>{
    if (e.key == "ArrowUp") {
        // up arrow
        lojtari2.velocity.y = -13

        
    }
    if (e.key == "ArrowDown") {
        // up arrow
        lojtari2.velocity.y = 13
    }
 
    if (e.key == "w") {
        lojtari.velocity.y = -13

        console.log("p")
    }
    if (e.key == "s") {
        lojtari.velocity.y = 13
        console.log("p")
    }
})

addEventListener("keyup",(e)=>{
    if (e.key == "ArrowUp") {
        // up arrow
        lojtari2.velocity.y = 0
    }
    if (e.key == "ArrowDown") {
        // up arrow
        lojtari2.velocity.y = 0

    }
 
    if (e.key == "w") {
        // up arrow
        lojtari.velocity.y = 0

    }
    if (e.key == "s") {
        // up arrow
        lojtari.velocity.y = 0
    }
})


