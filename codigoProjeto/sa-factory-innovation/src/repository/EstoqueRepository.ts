import { Client } from "pg";
import Estoque from "../entity/Estoque";

export default class EstoqueRepository {
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

    async save(Estoque: Estoque) {
        try {
            this.connection.connect();
            const sql =
                "insert into produto (id, nome, descricao, quantidade, fabricante) values ($1, $2, $3, $4, $5)";
            const values = [
                Estoque.getId(),
                Estoque.getNome(),
                Estoque.getDescricao(),
                Estoque.getQuantidade(),
                Estoque.getFabricante(),
            ];
            await this.connection.query(sql, values);
        } catch (error) {
            console.log(error);
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }

    async findAll(){
        try {
            this.connection.connect();
            const sql = "select * from produto";
            const result = await this.connection.query(sql);
            return result.rows;
        } catch (error) {
            console.log(error)
            return [];
        } finally{
            this.connection.end();
        this.connection = null;
        }
    }
}
