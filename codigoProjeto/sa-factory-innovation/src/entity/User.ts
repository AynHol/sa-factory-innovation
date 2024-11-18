import {v4 as uuid} from "uuid";

export default class User {
    private id: string;
    private nome: string;
    private email: string;
    private cpf: string;
    private password: string;

    constructor(nome: string, email: string, cpf: string, password: string) {
        this.id = uuid();
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.password = password;
    }

    public getId() {
        return this.id;
    }
    public getNome() {
        return this.nome;
    }
    public getEmail() {
        return this.email;
    }
    public getCPF() {
        return this.cpf;
    }
    public getPassword() {
        return this.password;
    }
}
