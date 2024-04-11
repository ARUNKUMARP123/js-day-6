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



// 3.Write a “person” class to hold all the details.

class Person{
    constructor(name, age, gender, state, country){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.state = state;
        this.country = country;
    }
}

let person = new Person("Elango", 21, "Male", "Tamil nadu", "India");
console.log(`3.Write a “person” class to hold all the details.
${person.name}
${person.age}
${person.gender}
${person.state}
${person.country}
`)

// 4.write a class to calculate the uber price.

const uber = {
    set kiloMeter(km){    
       this.price = `${km} km = Rs.${km * 50}` ;
    },
    get kiloMeter(){
       return this.price;
    }
}

uber.kiloMeter = 2;

console.log(`4.) write a class to calculate the uber price.
Answer : ${uber.kiloMeter}`)
