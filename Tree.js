class Tree {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = 300;
        this.height = 480;
        this.image = loadImage("tree.png");
        this.body = Bodies.rectangle(this.x, this.y, 140, 300, options);
        World.add(world, this.body);
    }

    display() {
        var treePos = this.body.position;
        push();
        translate(treePos.x, treePos.y);
        //rectMode(CENTER);
        //rect(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}