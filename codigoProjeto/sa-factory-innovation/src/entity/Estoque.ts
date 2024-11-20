import {v4 as uuid} from "uuid";

export default class Estoque {
    private id: string;
    private nome: string;
    private descricao: string;
    private quantidade: number;
    private fabricante: string;

    constructor(nome: string, descricao: string, quantidade: number, fabricante: string, id?: string) {
        this.id = id === undefined ? uuid(): id;
        this.nome = nome;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.fabricante = fabricante;
    }

    public getId() {
        return this.id;
    }
    public getNome() {
        return this.nome;
    }
    public getDescricao() {
        return this.descricao;
    }
    public getQuantidade() {
        return this.quantidade;
    }
    public getFabricante() {
        return this.fabricante;
    }
}