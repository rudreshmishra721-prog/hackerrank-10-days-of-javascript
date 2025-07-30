class  Polygon{
    constructor(sides){
        this.sides = sides;
    }
    perimeter(){
        return this.sides.reduce((acc , sides ) => acc + sides, 0);
    }
}