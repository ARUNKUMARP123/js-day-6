class movie{
    constructor(movie,studio,rating="PG")
    {
        this.movie=movie;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(){
        return `the movie and rating is: ${new Array(this.movie,this.studio,this.rating)}`
}
}
var Movie1=new movie("asino Royale","Eon Productions","PG­13");
console.log(Movie1);
    console.log(Movie1.getPG());
