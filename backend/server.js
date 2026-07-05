const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // QUIRK FIX: O porteiro que deixa o front-end entrar!

const app = express();
app.use(express.json());
app.use(cors());

// Conexão com o banco (mantenha a senha que você usou!) [cite: 63]
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin', // <-- COLOQUE SUA SENHA DO WORKBENCH AQUI 
    database: 'petfy_db'
});

connection.connect((erro) => {
    if (erro) {
        console.error('Tivemos um problema ao conectar no banco:', erro);
        return;
    }
    console.log('Banco de dados PetFy(ndr) conectado com sucesso!');
});

// ==========================================
// 🚀 ROTAS MÁGICAS COMEÇAM AQUI
// ==========================================

// Rota 1: LISTAR PETS (O que vai mostrar os animais pro usuário Adotante)
app.get('/pets', (req, res) => {
    // Pede pro MySQL selecionar tudo da tabela Pet
    connection.query('SELECT * FROM Pet', (erro, resultados) => {
        if (erro) {
            return res.status(500).json({ erro: 'Erro ao buscar os pets no banco!' });
        }
        res.json(resultados);
    });
});

// Rota 2: CADASTRAR PETS (O que o Administrador faz no sistema)
app.post('/pets', (req, res) => {
    const { nome, especie, genero, raca, cor, idade, vermifugado, personalidade, imagem, status } = req.body;

    // Validação: campos obrigatórios
    if (!especie || !cor) {
        return res.status(400).json({
            erro: "Atenção: Os campos 'especie' e 'cor' são obrigatórios!"
        });
    }

    const statusFinal = status || 'Disponível';

    const query = `INSERT INTO Pet (nome, especie, genero, raca, cor, idade, vermifugado, personalidade, imagem, status)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    connection.query(
        query,
        [nome || null, especie, genero || null, raca || null, cor, idade || null, vermifugado || null, personalidade || null, imagem || null, statusFinal],
        (erro, resultados) => {
            if (erro) {
                console.error('Erro ao salvar pet:', erro);
                return res.status(500).json({ erro: 'Erro ao salvar o pet! Verifique se todas as colunas existem na tabela.' });
            }
            res.status(201).json({
                mensagem: 'Pet cadastrado com sucesso!',
                id_novo_pet: resultados.insertId
            });
        }
    );
});


// Rota 3: ATUALIZAR STATUS DO PET (O método atualizarStatus do diagrama!)
app.put('/pets/:id', (req, res) => {
    const idPet = req.params.id;
    const { status } = req.body;

    const query = 'UPDATE Pet SET status = ? WHERE idPet = ?';
    connection.query(query, [status, idPet], (erro, resultados) => {
        if (erro) {
            return res.status(500).json({ erro: 'Erro ao atualizar o pet!' });
        }
        if (resultados.affectedRows === 0) {
            return res.status(404).json({ erro: 'Pet não encontrado para atualizar!' });
        }
        res.json({ mensagem: `Sucesso! Status do pet ${idPet} mudou para: ${status}` });
    });
});

// Rota 4: DELETAR PET (Apagar o registro do banco)
app.delete('/pets/:id', (req, res) => {
    const idPet = req.params.id;
    const query = 'DELETE FROM Pet WHERE idPet = ?';
    connection.query(query, [idPet], (erro, resultados) => {
        if (erro) {
            return res.status(500).json({ erro: 'Erro ao tentar deletar o pet!' });
        }
        if (resultados.affectedRows === 0) {
            return res.status(404).json({ erro: 'Pet não encontrado para deletar!' });
        }
        res.json({ mensagem: `O pet com ID ${idPet} foi removido do sistema com sucesso!` });
    });
});

// ==========================================
// 🚀 FIM DAS ROTAS 
// ==========================================

app.listen(3000, () => {
    console.log('Servidor rodando lindamente na porta 3000!');
});