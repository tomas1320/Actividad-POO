class Helice {
    num: number;
    constructor(n: number) {
        this.num = n;
    }
}

class Aeroplano {
    helice: Helice;

    constructor(h: Helice) {
        this.helice = h;
    }
}

let h = new Helice(3); // existe solo
let a = new Aeroplano(h);
export {};