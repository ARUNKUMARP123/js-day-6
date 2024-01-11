class circle{
    constructor(radius,color)
    {
        this.radius=radius.toFixed(1);
        this.color=color;
    }
    setInput(radius,color)
    {
        this.radius=radius.toFixed(1);
        this.color=color;
    }
    getdata(){
        return `the cicle data is:
        ${ this.radius,
            this.color}`
    }
     getarea(radius) {

        return `tha circle of area is : ${(Math.PI*Math.pow(this.radius,2)).toFixed(2)}`;

    }
    getcircumference(radius)
    {
        return `the circle of circumference is : ${(2*Math.PI*this.radius).toFixed(2)}`
    }
}
var circle1=new circle(1.0,"red");
console.log(circle1);
circle1.color="blue";
console.log(circle1);
console.log(circle1.getdata());
//circle1.setInput(2.0,"blue");
console.log(circle1);

console.log(circle1.getarea());
console.log(circle1.getcircumference());