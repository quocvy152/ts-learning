class Phone {
    name: string;
    debut: string;

    constructor({ name, debut }: { name: string, debut: string}) {
        this.name = name;
        this.debut = debut;
    }
}

class SamsungPhone extends Phone {};

const galaxyS21 = new SamsungPhone({ name: 'Samsung Galaxy S21 Ultra', debut: '29/04/2024' });
console.log(galaxyS21);

class IPhone implements Phone {
    name: string;
    debut: string;
    price?: number;

    constructor({ name, debut }: { name: string, debut: string}) {
        this.name = name;
        this.debut = debut;
    }
}