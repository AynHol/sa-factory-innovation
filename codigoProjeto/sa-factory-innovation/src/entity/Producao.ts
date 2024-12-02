import {v4 as uuid} from "uuid";

export default class Producao {
    private id: string;
    private modelo: string;
    private chassi: string;
    private cor: string;
    private ano_fabricacao: number;
    private motorid: string;
    private portaid: string;
    private pneuid: string;
    private farolid: string;
    private extraid: string;

    constructor(modelo: string, chassi: string, cor: string, ano_fabricacao: number, motorid: string, portaid: string, pneuid: string, farolid: string, extraid: string ,id?: string) {
        this.id = id === undefined ? uuid(): id;
        this.modelo = modelo;
        this.chassi = chassi;
        this.cor = cor;
        this.ano_fabricacao = ano_fabricacao;
        this.motorid = motorid;
        this.portaid = portaid;
        this.pneuid = pneuid;
        this.farolid = farolid;
        this.extraid = extraid;
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
    public getAno() {
        return this.ano_fabricacao;
    }
    public getIdMotor() {
        return this.motorid
    }
    public getIdPorta() {
        return this.portaid;
    }
    public getIdPneu() {
        return this.pneuid;
    }
    public getIdFarol() {
        return this.farolid;
    }
    public getIdExtra() {
        return this.extraid;
    }
}