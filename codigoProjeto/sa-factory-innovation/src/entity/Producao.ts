import {v4 as uuid} from "uuid";

export default class Producao {
    private id: string;
    private modelo: string;
    private chassi: string;
    private cor: string;

    constructor(modelo: string, chassi: string, cor: string, id?: string) {
        this.id = id === undefined ? uuid(): id;
        this.modelo = modelo;
        this.chassi = chassi;
        this.cor = cor;
    }

    public getId() {
        return this.id;
    }
    public getModelo() {
        return this.modelo;
    }
    public getChassi() {
        return this.chassi;
    }
    public getCor() {
        return this.cor;
    }
}