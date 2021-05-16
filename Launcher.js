class Launcher{

    constructor(a,b){

var options={
bodyA:a,
pointB:b,
length:20,
stiffness:0.004,
}

this.pointB=b
this.sling=Constraint.create(options)
World.add(world,this.sling)

   }

    display(){
if(this.sling.bodyA){
var pointB=this.pointB
var pointA=this.sling.bodyA.position
line(pointA.x,pointA.y,pointB.x,pointB.y)

}


    }
    fly(){

this.sling.bodyA=null

    }

    attach(body){
this.sling.bodyA=body
        
    }




}