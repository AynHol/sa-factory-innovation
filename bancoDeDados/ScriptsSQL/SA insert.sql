insert into estoque (id, nome, descricao, quantidade, estoque_minimo, fabricante) values ('da8da000-89c7-4d57-8ac4-86ec6505dde0', 'pneus', 'largura: 235/60R16 100H', '74', '50', 'Speedmax');
insert into estoque (id, nome, descricao, quantidade, estoque_minimo, fabricante) values ('cac69570-9d75-4b9e-8448-8bf2ba31475e', 'portas', '', '56', '32', '');
insert into estoque (id, nome, descricao, quantidade, estoque_minimo, fabricante) values ('e5676640-0347-4f85-926a-d5537f1d9a60', 'motores', '', '63', '43', '');
insert into estoque (id, nome, descricao, quantidade, estoque_minimo, fabricante) values ('6b1e6ac7-6764-484c-bd12-372f76aca832', 'lataria', '', '45', '33', '');
insert into estoque (id, nome, descricao, quantidade, estoque_minimo, fabricante) values ('3823b89a-d435-4b68-861e-f51c47757299', 'vidros', '', '143', '107', '');

insert into producao (id, modelo, chassi, ano_fabricacao, produto) values ('9bcd6fc0-a508-44a9-9a86-f138f85e5fd5', 'FIAT Mobi', '4xR cT2Pd7 BP 6s3504', '2024', 'da8da000-89c7-4d57-8ac4-86ec6505dde0');

insert into qualidade (pneu, porta, motor, lataria, interior, vidro, veiculo) values ('', '', '', '', '', '', '');

select * from estoque
select * from producao