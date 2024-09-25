export class Character {
    constructor(name, type) {  
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;
        this.name = name;
        this.type = type;
        this.arrOftype = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Неверный формат имени');
        }

        if (!this.arrOftype.includes(type)) {
            throw new Error('Такого класса не существует');
        }  

    }
}

