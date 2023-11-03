class Heroi {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        if (this.tipo === "mago") {
            ataque = "usando magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usando espada";
        } else if (this.tipo === "monge") {
            ataque = "usando artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usando shuriken";
        } 

        console.log(`O ${this.tipo} atacou ${ataque}`);
    }
}



const heroi = new Heroi("Aragorn","guerreiro");

heroi.atacar();

