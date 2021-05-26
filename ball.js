class Ball{
    constructor(x,y){
    var options ={
     density : 0.8,
     friction: 0,
     restitution: 1
     }
     this.body = Bodies.circle(x,y,20,options);
     this.radius = 100 ;
     World.add(world,this.body);
 }
    display(){
        var pos = this.body.position;
        var angle =  this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("pink")
        ellipseMode(RADIUS);
        angleMode(RADIANS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}