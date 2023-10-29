const userPaymentStatus = {
    userId: 1,
    status: 'pendente'
};


// Rota para verificar o status do pagamento do usuário
app.get('/paymentStatus', (req, res) => {
    if (userPaymentStatus.status === 'confirmado') {
        res.json({ status: 'confirmado' });
    } else {
        res.json({ status: 'pendente' });
    }
})


//verifica a modalidade escolhida pelo usuario
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/verificarModalidade', (req, res) => {
    // Suponha que o valor da modalidade seja enviado no corpo da requisição
    const modalidadeEscolhida = req.body.modalidade;

    if (modalidadeEscolhida === 'online') {
        res.json({ aviso: 'Você escolheu a modalidade online. Não é necessário escolher atividades.' });
    } else {
        res.json({ aviso: 'Você escolheu outra modalidade. Escolha suas atividades.' });
    }
});

const modalidadeEscolhida = 'online';

fetch('/verificarModalidade', {
    method: 'POST',
    headers: {
        'Content-Type': '',
    },
    body: `modalidade=${modalidadeEscolhida}`,
})
.then(response => response.json())
.then(data => {
    alert(data.aviso);
})
.catch(error => {
    console.error('Erro ao verificar a modalidade:', error);
});


//listas de atividades
const atividades = {
    "atividades": [
    ]
  };
  
  app.get('/atividades/:data', (req, res) => {
    const data = req.params.data;
    const atividadesDoDia = atividades.atividades.filter(atividade => atividade.data === data);
  
    if (atividadesDoDia.length === 0) {
      res.status(404).json({ message: 'Nenhuma atividade encontrada para esta data.' });
    } else {
      res.json(atividadesDoDia);
    }
  });