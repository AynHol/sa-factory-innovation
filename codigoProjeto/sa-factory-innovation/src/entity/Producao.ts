import {v4 as uuid} from "uuid";

export default class Producao {
    private id: string;
    private modelo: string;
    private chassi: string;
    private cor: string;
    private anoFabricacao: number;
    private motorid: string;
    private portaid: string;
    private pneuid: string;
    private farolid: string;
    private extraid: string;

    constructor(modelo: string, chassi: string, cor: string, anoFabricacao: number, motorid: string, portaid: string, pneuid: string, farolid: string, extraid: string ,id?: string) {
        this.id = id === undefined ? uuid(): id;
        this.modelo = modelo;
        this.chassi = chassi;
        this.cor = cor;
        this.anoFabricacao = anoFabricacao;
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
        return this.anoFabricacao;
    }
    public getMotor() {
        return this.motorid;
    }
    public getPorta() {
        return this.portaid;
    }
    public getPneu() {
        return this.pneuid;
    }
    public getFarol() {
        return this.farolid;
    }
    public getExtra() {
        return this.extraid;
    }
}