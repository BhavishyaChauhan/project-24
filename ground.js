class Ground{
    constructor(x,y,width,height){
        var option={
            isStatic: true,
            restitution: 0,
            friction: 2,
            density: 1,
        }

        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width=width;
        this.height=height;

        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        push()
        rectMode(CENTER);
        fill("purple")
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }
}