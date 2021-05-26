class Sling{
    constructor(bodyA,bodyB){
        var options={
          bodyA:bodyA,
          bodyB:bodyB,
          stifness:1,
          length:400  
        }
    this.bodyA = bodyA;
    this.bodyB = bodyB;
    this.sling = Constraint.create(options);
    World.add(world,this.sling)
    }
      
    
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var bodyB = this.bodyB;
            push();
            stroke(0);
            strokeWeight(3);
            line(pointA.x,pointA.y,bodyB.x,bodyB.y);
            pop(); 
         }
    }
}