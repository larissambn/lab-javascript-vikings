// Soldier
class Soldier {
    constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    this.attack = function(){return this.strength}

    this.receiveDamage =
    function(damage){this.health-=damage}

    }
  }
// Vikings

class Viking extends Soldier  {
    constructor (name,health,strength) {
    super(health, strength);
    this.name = name;

    this.battleCry = function(){return Odin onws you all};
 
    this.receiveDamage =
    function(damage){this.health-=damage}

        }
    }

if (this.health > 0);  {
console.log(${this.name} has received ${this.receiveDamage} points of damage); {

else (this.health = 0)
console.log(${this.name} has died in act of combat); 
}

}
// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        
    }
    if (this.health > 0);  {
        console log(A Saxon has received ${this.receiveDamage} points of damage); } {
        
        else (this.heatlh = 0)
        console.log(A Saxon has died in combat); 
        }

}

// War
class War {
    constructor(vikingArmyproperty,saxonArmyproperty){
    this.vikingArmyproperty = [""];
    this.saxonArmyproperty = [""];

    addViking(Viking) {
      this.vikingArmy.push(Viking);
  }

    addSaxon(Saxon) {
      this.saxonArmy.push(Saxon);
  }

    }
}

class Armies Attack extends War 
  constructor (vikingAttack,saxonAttack,showstatus) {

this.vikingAttack = 
  {
    let randomSaxon = Math.floor(Math.random(this.saxonArmy.length) * 1);
    let randomViking = Math.floor(Math.random(this.vikingArmy.length) * 1);

    let finalString = String(this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength));
    this.saxonArmy = this.saxonArmy.filter(saxon => {
        return saxon.health > 0
    });
    return finalString;
}

this.saxonAttack = {
    let randomSaxon = Math.floor(Math.random(this.saxonArmy.length) * 1);
    let randomViking = Math.floor(Math.random(this.vikingArmy.length) * 1);

    let finalString = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
    this.vikingArmy = this.vikingArmy.filter(viking => {
        return viking.health > 0
    });
    return finalString;
}

this.showstatus= {
if(this.saxonArmy.length == 0){
    console.log (Vikings have won the war of the century!);
}
else if(this.vikingArmy.length == 0){
    console.log (Saxons have fought for their lives and survive another day..);
}
else if(this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
    console.log (Vikings and Saxons are still in the thick of battle);
}
}
  } 


  

