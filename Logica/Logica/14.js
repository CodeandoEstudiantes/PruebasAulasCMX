class Hero {
    constructor(name, position, health, damage, experience) {
        this.name = name;
        this.position = position;
        this.health = health;
        this.damage = damage;
        this.experience = experience;
    }
}

function createHero(name, position, health, damage, experience) {

    return new Hero(name, position, health, damage, experience)
};
createHero('Hero', '00', 100, 5, 0);
