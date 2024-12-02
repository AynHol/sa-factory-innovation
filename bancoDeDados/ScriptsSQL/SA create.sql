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
	motorid uuid not null,
	foreign key (motorid) references produto(id),
	portasid uuid not null,
	foreign key (portasid) references produto(id),
	pneusid uuid not null,
	foreign key (pneusid) references produto(id),
	farolid uuid not null,
	foreign key (farolid) references produto(id),
	pecasid uuid not null,
	foreign key (pecasid) references produto(id)
);

create table controle_qualidade (
	id uuid primary key not null,
	pneu boolean not null,
	porta boolean not null,
	motor boolean not null,
	lataria boolean not null,
	interior boolean not null,
	farol boolean not null,
	veiculo_id uuid not null,
	foreign key (veiculo_id) references veiculo(id),
	stato boolean not null,
	time timestamp not null,
	trimestre integer not null
);

create table conta (
	id uuid primary key not null,
	nome varchar(50) not null,
	email varchar(50) unique not null,
	cpf varchar(14) unique not null,
	password_hash varchar not null,
	status boolean not null
);