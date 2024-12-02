import { Client } from "pg";
import Producao from "../entity/Producao";

export default class ProducaoRepository {
    private connection: Client;

    constructor() {
        if (!this.connection) {
            this.connection = new Client({
                host: "localhost",
                port: 5432,
                database: "sistema_factory",
                user: "postgres",
                password: "senai",
            });
        }
    }

    public async save(producao: Producao) {
        try {
            this.connection.connect();
            const sql = "INSERT INTO veiculo (id, modelo, chassi, cor, ano_fabricacao, motorid, portasid, pneusid, farolid, pecasid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
            const values = [
                producao.getId(),
                producao.getModelo(),
                producao.getChassi(),
                producao.getCor(),
                producao.getAno(),
                producao.getIdMotor(),
                producao.getIdPorta(),
                producao.getIdPneu(),
                producao.getIdFarol(),
                producao.getIdExtra()
            ];
            await this.connection.query(sql, values);
        } catch (error: any) {
            console.log(error);
        } finally {
            this.connection.end();
        }
    }

    async findAllVeiculo(){
        try {
            this.connection.connect();
            const sql = "select * from veiculo";
            const result = await this.connection.query(sql);
            return result.rows;
        } catch (error: any) {
            console.log(error)
            return [];
        } finally{
            this.connection.end();
        this.connection = null;
        }
    }
}