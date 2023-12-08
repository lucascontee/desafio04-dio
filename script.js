class hero{
    constructor(heroName, heroAge, heroType){
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroType = heroType
    }
    atacar(){
        if(this.heroType == 'Guerreiro'){
            console.log(`O ${this.heroType} atacou usando espada`)
        }else if(this.heroType == 'Mago'){
            console.log(`O ${this.heroType} atacou usando magia`)
        }else if(this.heroType == 'Monge'){
            console.log(`O ${this.heroType} atacou usando artes marciais`)
        }else if(this.heroType == 'Ninja'){
            console.log(`O ${this.heroType} atacou usando shuriken`)
        }
        
    }
}

let heroOne = new hero("Lucas", "20", "Ninja")
let heroTwo = new hero("Mateus", "24", "Guerreiro")
let heroThree = new hero("Felipe", "28", "Mago")
let heroFor = new hero("Maria", "21", "Monge")
heroOne.atacar()
heroTwo.atacar()
heroThree.atacar()
heroFor.atacar()