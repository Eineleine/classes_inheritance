import { Character } from '../character';

describe('Character class', () => {
    test('should create a character with valid name and type', () => {
        const character = new Character('Archer', 'Bowerman');
        expect(character.name).toBe('Archer');
        expect(character.type).toBe('Bowerman');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(0);
        expect(character.defence).toBe(0);
    });

    test('should throw error if name is not a string', () => {
        expect(() => new Character(123, 'Bowerman')).toThrow('Неверный формат имени');
    });

    test('should throw error if name is less than 2 characters', () => {
        expect(() => new Character('A', 'Bowerman')).toThrow('Неверный формат имени');
    });

    test('should throw error if name is more than 10 characters', () => {
        expect(() => new Character('A very long name', 'Bowerman')).toThrow('Неверный формат имени');
    });

    test('should throw error if type is not in arrOftype', () => {
        expect(() => new Character('Archer', 'Warrior')).toThrow('Такого класса не существует');
    });

    test('should throw error if type is an empty string', () => {
        expect(() => new Character('Archer', '')).toThrow('Такого класса не существует');
    });

    test('should throw error if type is undefined', () => {
        expect(() => new Character('Archer')).toThrow('Такого класса не существует');
    });

    test('should allow other valid character types', () => {
        const validTypes = ['Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        validTypes.forEach(type => {
            const character = new Character('ValidName', type);
            expect(character.type).toBe(type);
        });
    });
});