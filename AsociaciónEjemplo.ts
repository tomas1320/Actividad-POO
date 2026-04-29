class Motor {
    tipo: string;
    constructor(tipo: string) {
        this.tipo = tipo;
    }
}

class Auto {
    encender(motor: Motor) {
        console.log("Encendiendo motor " + motor.tipo);
    }
}

let motor = new Motor("V8");
let auto = new Auto();

auto.encender(motor);