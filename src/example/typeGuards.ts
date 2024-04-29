/**
 * typeof Type Guards
 */
const handleLogParam = ({ param }: { param: number | string }) => {
    if (typeof param === 'number') {
        console.log({ newParam: param * 10 });
    } else {
        console.log('This is string', param);
    }
}
handleLogParam({ param: 5 });
handleLogParam({ param: 'Hello World' });

/**
 * instance of Type Guards
 */
class Animal { }
class Lion extends Animal { };

const animalOne = new Animal();
const animalTwo = new Lion();

const isLion = (animal: Animal): animal is Lion => {
    return animal instanceof Lion;
}

console.log(isLion(animalOne))
console.log(isLion(animalTwo))

/**
 * in Type Guards
 * Note: it like algorithm to check Stuctual Type System
 */
interface Macbook {
    chip: string;
    debut: string;
}

const isMacbook = (obj: object): obj is Macbook => {
    return 'chip' in obj && 'debut' in obj;
}

const myMac = {
    chip: 'M3 Pro',
    debut: '2023',
}

console.log(isMacbook(myMac))
