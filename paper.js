class paper {
    constructor(x, y) {
    var options = {
        isStatic: false,
        restitution: 0.3,
        friction:0.5,
        density:1.2

     }
     this.x=x;
     this.y=y;
     this.body = Bodies.circle(this.x, this.y, 20, options);
     //this.width = 20;
     //this.height = 20;
          
     World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          push();
          translate(pos.x, pos.y);
          //rotate(angle);
          ellipseMode(CENTER);
          fill("green");
          strokeWeight(4);
          stroke("white");
          ellipse(0, 0, 40, 40);
          pop();
        }
     

}