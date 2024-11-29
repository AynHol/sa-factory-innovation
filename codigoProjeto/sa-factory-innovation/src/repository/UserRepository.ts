import { Client } from "pg";
import User from "../entity/User";

export default class UserRepository {
    private connection: Client;

    constructor() {
        if (!this.connection) {
            this.connection = new Client({
                host: "localhost",
                port: 5432,
                database: "sistema_factory",
                // database: "sistema_sa",
                user: "postgres",
                password: "senai",
                // password: "alder",
            });
        }
    }

    async save(user: User) {
        try {
            this.connection.connect();
            const sql =
                "insert into conta (id, nome, email, cpf, password_hash, status) values ($1, $2, $3, $4, $5, $6)";
            const values = [
                user.getId(),
                user.getNome(),
                user.getEmail(),
                user.getCPF(),
                user.getPassword(),
                true,
            ];
            await this.connection.query(sql, values);
        } catch (error) {
            console.log(error);
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }

    async findName(cpf: string) {
        try {
            this.connection.connect();
            const sql = "select nome from conta where cpf = $1";
            const result = await this.connection.query(sql, [cpf]);
            return result.rows[0];
        } catch (error) {
            console.log(error);
            return [];
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }

    async findByCPF(cpf: string) {
        try {
            this.connection.connect();
            const sql = "select * from conta where cpf = $1";
            const result = await this.connection.query(sql, [cpf]);
            return result.rows[0];
        } catch (error) {
            console.log(error);
            return [];
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }

    async deleteUser(id: string) {
        try {
            this.connection.connect();
            const sql = "update conta set status = $1 where id = $2";
            await this.connection.query(sql, [false, id]);
        } catch (error) {
            console.log(error);
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }
}
