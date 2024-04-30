// Seleciona o elemento de botão de alternância
const languageToggle = document.getElementById('languageToggle');

// Adiciona um ouvinte de clique ao botão
languageToggle.addEventListener('click', function() {
  // Verifica se o botão está marcado (checked)
  if (languageToggle.checked) {
    // Se está marcado, definimos o idioma como inglês
    alterarIdioma('en');
  } else {
    // Se não está marcado, definimos o idioma como português
    alterarIdioma('pt');
  }
});

// Função para alternar idiomas
function alterarIdioma(idioma) {
  // Código para alterar os textos da sua aplicação com base no idioma selecionado
  // Exemplo: você pode ter uma lógica aqui para alterar os textos da interface
  // Pode envolver a troca de classes, atualização de conteúdo, etc.
    const traducoes={
        'pt': {
            'txt02-hbox': 'Investimento de Prestígio: Oportunidade Exclusiva para Empreendedores Visionários. Otima oportunidade de retorno e além disso otima qualidade em serviços',
            'btn': 'Entrar em contato!',
            'btn01': 'Entrar em contato!',
            'btn02': 'Entrar em contato!',
            'txtQuem' : 'Magnifica Arquitetura',
            'txtDesi' : 'Curvas Exubereantes | Vista incrível | Oportunidade | Valorização',
            'txtSeja' : 'Desperte seu interesse pelo luxo com este magnífico apartamento na sofisticada no Humaitá. Para momentos de contemplação e relaxamento, o espaço zen oferece um refúgio tranquilo para escapar do ritmo acelerado do dia a dia. Temos academia para se manter ativo nossa academia é completa do HUM Residencial, equipada para atender a todas as suas necessidades fitness. O terraço descoberto proporciona uma vista inspiradora durante seus exercícios.',
            'txtProf' : 'Atenção investidores!',
            'txtSati' : 'Seja você um empreendedor em busca de rentabilidade ou um apaixonado por exclusividade, este é o investimento que alia sofisticação, conforto e potencial de retorno. Agende sua visita hoje mesmo e faça parte do seleto grupo de visionários que valorizam o melhor da vida.'

        },
        'en':{
			'txt02-hbox': 'Prestigious Investment: Exclusive Opportunity for Visionary Entrepreneurs. Great opportunity for return and, furthermore, great quality in services.',
			'btn': 'Get in touch!',
			'btn01': 'Get in touch!',
			'btn02': 'Get in touch!',
			'txtQuem': 'Magnifica Arquitetura',
			'txtDesi': 'Exuberant Curves | Incredible View | Opportunity | Valorization',
			'txtSeja': 'Awaken your interest in luxury with this magnificent apartment in the sophisticated Humaitá. For moments of contemplation and relaxation, the Zen space offers a peaceful haven to escape the fast pace of everyday life. We have gym to stay active our gym is full of Residential HUM, equipped to meet all your fitness needs. The open terrace offers an inspiring view during your workouts.',
			'txtProf': 'Attention investors!',
			'txtSati': 'Whether you are an entrepreneur seeking profitability or passionate about exclusivity, this is the investment that combines sophistication, comfort, and potential return.'

        }

    }

  console.log(`Idioma alterado para: ${idioma}`);
    // Adicione aqui a lógica para atualizar os textos na sua aplicação
        // Obtém todas as chaves de tradução para o idioma selecionado
    const chavesTraducao = Object.keys(traducoes[idioma]);

    // Itera sobre as chaves e atualiza o texto de cada elemento
    chavesTraducao.forEach(chave => {
        const elemento = document.getElementById(chave);
        if (elemento) {
            elemento.textContent = traducoes[idioma][chave];
        }
    });





}
