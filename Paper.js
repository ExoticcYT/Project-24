class Paper{
    constructor(x, y, radius){
        var options={
            isStatic:false,
            restitution:0.9,
            friction:0.9,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("pink");
      circle(0, 0, this.radius);
      pop();
    }
};