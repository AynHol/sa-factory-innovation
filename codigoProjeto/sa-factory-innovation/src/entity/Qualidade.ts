import {v4 as uuid} from "uuid";

export default class Qualidade {
    private id: string;
    private pneu: boolean;
    private porta: boolean;
    private motor: boolean;
    private lataria: boolean;
    private interior: boolean;
    private farol: boolean;
    private veiculoid: string;
    private stato: boolean;
    private time: Date;
    private trimestre: number;

    constructor(pneu: boolean, porta: boolean, motor: boolean, lataria: boolean, interior: boolean, farol: boolean, veiculoid: string, stato: boolean, trimestre: number, id?: string) {
        this.id = id === undefined ? uuid(): id;
        this.pneu = pneu;
        this.porta = porta;
        this.motor = motor;
        this.lataria = lataria;
        this.interior = interior;
        this.farol = farol;
        this.veiculoid = veiculoid;
        this.stato = stato;
        this.time = new Date();
        this.trimestre = trimestre;
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
        return this.veiculoid;
    }
    public getStatusQA() {
        return this.stato;
    }
    public getTime() {
        return this.time;
    }
    public getTrimestre() {
        return this.trimestre;
    }
}