class Bucket{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }

        this.image=loadImage("dustbingreen.png")

        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width;
        this.height=height;
       
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}