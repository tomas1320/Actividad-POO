class Helice {
    num: number;
    constructor(n: number) {
        this.num = n;
    }
}

class Aeroplano {
    helice: Helice;

    constructor() {
        this.helice = new Helice(3); // se crea adentro
    }
}

export {};