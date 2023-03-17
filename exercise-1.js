class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location
    }

    compareAge(anotherUser){
        if (this.age > anotherUser.age){
            return `{this.firstName} è più vecchio di ${anotherUser.firstName}`
        } else if(this.age < anotherUser.age){
            return `{anotherUser.firstName} è più vecchio di ${this.firstName}`
        } else{
            return `${this.firstName} e ${anotherUser.firstName} hanno la stessa età`
        }
    }
}

person1 = new User("Federico","Riva", 38, "Firenze")
person2 = new User("Annalisa","Bruno", 33, "Milano")
person3 = new User("Mario","Testa", 38, "Bari")
console.log(x.compareAge(y))
console.log(y.compareAge(z))
console.log(x.compareAge(z))