class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }

    fly(){
        this.slingShot.bodyA = null;
    }

    display(){
    
      if(this.slingShot.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(4);
            stroke("turquoise")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            
               }








        
    
    
}