create table produto (
	id uuid primary key not null,
	nome varchar(50) not null,
	descricao varchar(400) not null,
	quantidade integer not null,
	fabricante varchar(100) not null
);

create table veiculo (
	id uuid primary key not null,
	modelo varchar(50) not null,
	chassi varchar(20) unique not null,
	cor varchar(50) not null,
	ano_fabricacao integer not null,
	motor_id uuid not null,
	foreign key (motor_id) references produto(id),
	portas_id uuid not null,
	foreign key (portas_id) references produto(id),
	pneus_id uuid not null,
	foreign key (pneus_id) references produto(id),
	varol_id uuid not null,
	foreign key (varol_id) references produto(id),
	pecas_id uuid not null,
	foreign key (pecas_id) references produto(id)
);

create table controle_qualidade (
	id uuid primary key not null,
	pneu boolean not null,
	porta boolean not null,
	motor boolean not null,
	lataria boolean not null,
	interior boolean not null,
	vidro boolean not null,
	veiculo_id uuid not null,
	foreign key (veiculo_id) references veiculo(id)
);

create table conta {
	id uuid primary key not null,
	nome varchar(50) not null,
	email varchar(50) unique not null,
	cpf varchar(14) unique not null,
	password_hash varchar not null
};