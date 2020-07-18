class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke("rgb(48, 22, 8)")
            if(pointA.x < 220){
           
             strokeWeight(7);   
             line(pointA.x, pointA.y, pointB.x, pointB.y);
             line(pointA.x,pointA.y,pointB.x+30,pointB.y);
             
            }

            else{

                strokeWeight(3);   
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                line(pointA.x,pointA.y,pointB.x-30,pointB.y);

            } 

            pop();
            
        }

    }
    
}
