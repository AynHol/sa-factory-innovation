import { Client } from "pg";
import Qualidade from "../entity/Qualidade";

export default class QualidadeRepository {
    private connection: Client;

    constructor() {
        if (!this.connection) {
            this.connection = new Client({
                host: "localhost",
                port: 5432,
                // database: "sistema_factory",
                database: "sistema_sa",
                user: "postgres",
                // password: "senai",
                password: "alder",
            });
        }
    }

    async save(Qualidade: Qualidade) {
        try {
            this.connection.connect();
            const sql =
                "insert into controle_qualidade (id, pneu, porta, motor, lataria, interior, farol, veiculo_id) values ($1, $2, $3, $4, $5, $6, $7, $8)";
            const values = [
                Qualidade.getId(),
                Qualidade.getPneu(),
                Qualidade.getPorta(),
                Qualidade.getMotor(),
                Qualidade.getLataria(),
                Qualidade.getIntereior(),
                Qualidade.getFarol(),
                Qualidade.getIdVeiculo()
            ];
            await this.connection.query(sql, values);
        } catch (error) {
            console.log(error);
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }
}
