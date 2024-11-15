create table estoque (
	id uuid primary key not null,
	nome varchar(50) not null,
	descricao varchar(400) not null,
	quantidade integer not null,
	estoque_minimo integer not null,
	fabricante varchar(100) not null
);

create table producao (
	id uuid primary key not null,
	modelo varchar(50) not null,
	chassi varchar(20) unique not null,
	ano_fabricacao integer not null,
	produto uuid not null,
	foreign key (produto) references estoque(id)
);

create table qualidade (
	id uuid primary key not null,
	pneu boolean not null,
	porta boolean not null,
	motor boolean not null,
	lataria boolean not null,
	interior boolean not null,
	vidro boolean not null,
	veiculo uuid not null,
	foreign key (veiculo) references producao(id)
);