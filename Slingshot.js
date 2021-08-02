class Sling{

    constructor(bdyA, bdyB){

        var options = {

            length: 5,
            stiffness: 0.04,
            bodyA: bdyA,
            bodyB: bdyB

        }

         this.Sling = Matter.Constraint.create (options)
        World.add(world,this.Sling)
    }
    display(){

        var pointA = this.Sling.bodyA.position
        var pointB = this.Sling.bodyB.position

        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}