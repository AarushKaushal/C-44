class Background{
    constructor(x,y,width,height){
    this.body = Bodies.rectangle(x,y,width,height);
    this.width=width;
    this.height=height;
    this.image=loadImage("bg.png");
    World.add(world,this.body);
}
display(){
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
}
}