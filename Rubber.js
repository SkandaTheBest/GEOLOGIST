class Rubber {
    constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y,(this.r-20)/2, options);
      World.add(world, this.body);
    }
    display(){
      var rubberPos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(rubberPos.x, rubberPos.y);
      //rotate(angle);
      rectMode(CENTER);

      fill("green");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
  