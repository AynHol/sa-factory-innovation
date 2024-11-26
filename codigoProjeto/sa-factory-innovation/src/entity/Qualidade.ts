import {v4 as uuid} from "uuid";

export default class Qualidade {
    private id: string;
    private pneu: string;
    private porta: string;
    private motor: string;
    private lataria: string;
    private interior: string;
    private farol: string;
    private idveiculo: string

    constructor(pneu: string, porta: string, motor: string, lataria: string, interior: string, farol: string, idveiculo: string,  id?: string) {
        this.id = id === undefined ? uuid(): id;
        this.pneu = pneu;
        this.porta = porta;
        this.motor = motor;
        this.lataria = lataria;
        this.interior = interior;
        this.farol = farol;
        this.idveiculo = idveiculo;
    }

    public getId() {
        return this.id;
    }
    public getPneu() {
        return this.pneu;
    }
    public getPorta() {
        return this.porta;
    }
    public getMotor() {
        return this.motor;
    }
    public getLataria() {
        return this.lataria;
    }
    public getIntereior() {
        return this.interior;
    }
    public getFarol() {
        return this.farol;
    }
    public getIdVeiculo() {
        return this.idveiculo;
    }
}