import { Client } from "pg";
import Producao from "../entity/Producao";

export default class ProducaoRepository {
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

    async save(Producao: Producao) {
        try {
            this.connection.connect();
            const sql =
                "insert into veiculo (id, modelo, chassi, cor) values ($1, $2, $3, $4)";
            const values = [
                Producao.getId(),
                Producao.getModelo(),
                Producao.getChassi(),
                Producao.getCor(),
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