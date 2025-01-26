import Questao from "../questao/Questao";

const listaDeQuestoes: Questao[] = [
    {
        id: 1,
        pergunta: {
            enunciado: "Analise as infrações abaixo e assinale a alternativa correta:",
            listaEnumerada: [
                'I. Dirigir veículo sem possuir CNH.',
                'II. Estacionar em vaga reservada a idosos sem a credencial exigida.',
                'III. Transitar pela contramão em vias de sentido único.',
            ],
            complementoDoEnunciado: "Quais dessas infrações são consideradas graves?",
        },
        categoria: 'legislacao',
        alternativas: [
            { conteudo: "Apenas I e II.", certa: false },
            { conteudo: "Apenas II e III.", certa: true },
            { conteudo: "Apenas I e III.", certa: false },
            { conteudo: "Todas as infrações.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "As infrações II e III são graves, pois estacionar em vaga de idosos sem a credencial e transitar pela contramão são comportamentos que oferecem grande risco à segurança no trânsito.",
    },
    {
        id: 2,
        pergunta: {
            enunciado: "Qual é a penalidade para quem dirige sob a influência de álcool?",
        },
        categoria: 'legislacao',
        alternativas: [
            { conteudo: "Multa e suspensão do direito de dirigir.", certa: true },
            { conteudo: "Apenas advertência por escrito.", certa: false },
            { conteudo: "Multa simples.", certa: false },
            { conteudo: "Nenhuma penalidade, apenas orientação.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Dirigir sob a influência de álcool é uma infração gravíssima, que resulta em multa e suspensão do direito de dirigir, de acordo com a legislação de trânsito.",
    },
    {
        id: 3,
        pergunta: {
            enunciado: "Qual é a velocidade máxima permitida em uma via urbana sem sinalização?",
        },
        categoria: 'legislacao',
        alternativas: [
            { conteudo: "40 km/h.", certa: false },
            { conteudo: "50 km/h.", certa: true },
            { conteudo: "60 km/h.", certa: false },
            { conteudo: "70 km/h.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Em vias urbanas sem sinalização, a velocidade máxima permitida é 50 km/h, conforme o Código de Trânsito Brasileiro (CTB).",
    },
    {
        id: 4,
        pergunta: {
            enunciado: "Sobre o uso do cinto de segurança, é correto afirmar:",
        },
        categoria: 'legislacao',
        alternativas: [
            { conteudo: "É obrigatório apenas para o condutor.", certa: false },
            { conteudo: "É obrigatório apenas em rodovias.", certa: false },
            { conteudo: "É obrigatório para todos os ocupantes do veículo.", certa: true },
            { conteudo: "É opcional para passageiros no banco traseiro.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O cinto de segurança é obrigatório para todos os ocupantes do veículo, tanto no banco da frente quanto no banco traseiro, de acordo com a legislação.",
    },
    {
        id: 5,
        pergunta: {
            enunciado: "O que caracteriza infração gravíssima com multiplicador por 10 vezes o valor da multa?",
        },
        categoria: 'legislacao',
        alternativas: [
            { conteudo: "Transitar em velocidade superior a 20% da máxima permitida.", certa: false },
            { conteudo: "Dirigir sob influência de álcool.", certa: true },
            { conteudo: "Estacionar em local proibido.", certa: false },
            { conteudo: "Ultrapassar pela direita em vias de mão única.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Dirigir sob a influência de álcool é uma infração gravíssima e está sujeita a uma penalidade multiplicada por 10 vezes o valor da multa, além de outras penalidades.",
    },
    {
        id: 6,
        pergunta: {
            enunciado: "O uso da buzina em vias urbanas é permitido em quais situações?",
        },
        categoria: 'legislacao',
        alternativas: [
            { conteudo: "Para alertar pedestres ou veículos em situações de emergência.", certa: true },
            { conteudo: "Para saudar outros motoristas.", certa: false },
            { conteudo: "Para apressar o veículo da frente.", certa: false },
            { conteudo: "Em qualquer situação, sem restrição.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A buzina pode ser utilizada apenas em situações de emergência ou para alertar outros motoristas e pedestres, como em situações de perigo iminente.",
    },
    {
        id: 7,
        pergunta: {
            enunciado: "Qual o prazo máximo para renovar a CNH vencida sem incorrer em multa?",
        },
        categoria: 'legislacao',
        alternativas: [
            { conteudo: "15 dias.", certa: false },
            { conteudo: "30 dias.", certa: true },
            { conteudo: "60 dias.", certa: false },
            { conteudo: "Não há prazo, é permitido dirigir com a CNH vencida.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O prazo para renovar a CNH vencida é de 30 dias, após o qual o motorista poderá ser multado caso continue a dirigir sem a devida renovação.",
    },
    {
        id: 8,
        pergunta: {
            enunciado: "Ao transportar crianças, é obrigatório:",
        },
        categoria: 'legislacao',
        alternativas: [
            { conteudo: "O uso de cadeirinha ou assento de elevação para menores de 10 anos.", certa: true },
            { conteudo: "Que todas as crianças usem cinto de segurança, independentemente do peso ou idade.", certa: false },
            { conteudo: "Que as crianças menores de 5 anos sentem no banco da frente.", certa: false },
            { conteudo: "Nenhuma regra específica se aplica ao transporte de crianças.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A legislação exige o uso de cadeirinhas ou assentos de elevação para crianças menores de 10 anos, conforme as normas de segurança no trânsito.",
    },
    {
        id: 9,
        pergunta: {
            enunciado: "Quais veículos têm prioridade no trânsito, mesmo sem sinal sonoro ou luminoso?",
        },
        categoria: 'legislacao',
        alternativas: [
            { conteudo: "Táxis em serviço.", certa: false },
            { conteudo: "Ônibus coletivos.", certa: false },
            { conteudo: "Veículos prestadores de serviços públicos essenciais em operação.", certa: true },
            { conteudo: "Motocicletas em corredor.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Veículos que prestam serviços públicos essenciais, como ambulâncias e carros de bombeiros, têm prioridade no trânsito, independentemente de usarem sinais sonoros ou luminosos.",
    },
    {
        id: 10,
        pergunta: {
            enunciado: "O que é considerado uma infração de trânsito ao realizar uma conversão à esquerda?",
        },
        categoria: 'legislacao',
        alternativas: [
            { conteudo: "Sinalizar com antecedência mínima de 30 metros.", certa: false },
            { conteudo: "Não sinalizar com a luz de seta ou outro meio regulamentar.", certa: true },
            { conteudo: "Realizar a conversão em vias de sentido único.", certa: false },
            { conteudo: "Realizar a conversão com velocidade reduzida.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Não sinalizar corretamente antes de realizar uma conversão é uma infração, pois impede que outros motoristas se preparem para a manobra.",
    },
    {
        id: 11,
        pergunta: {
            enunciado: "Qual a função do sistema de suspensão de um veículo?",
        },
        categoria: 'mecanica',
        alternativas: [
            { conteudo: "Ajustar a pressão dos pneus.", certa: false },
            { conteudo: "Absorver os impactos da estrada e melhorar o conforto.", certa: true },
            { conteudo: "Aumentar a velocidade do veículo.", certa: false },
            { conteudo: "Reduzir o consumo de combustível.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A principal função do sistema de suspensão é absorver os impactos da estrada, melhorando o conforto e a estabilidade do veículo.",
    },
    {
        id: 12,
        pergunta: {
            enunciado: "O que pode causar o desgaste prematuro dos pneus?",
        },
        categoria: 'mecanica',
        alternativas: [
            { conteudo: "Inflar os pneus acima da pressão recomendada.", certa: false },
            { conteudo: "Conduzir com excesso de carga.", certa: true },
            { conteudo: "Manter a rotação do motor muito baixa.", certa: false },
            { conteudo: "Usar combustível de baixa qualidade.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Excesso de carga faz com que os pneus suportem mais peso do que o recomendado, o que acelera o desgaste.",
    },
    {
        id: 13,
        pergunta: {
            enunciado: "O que caracteriza um problema no sistema de freios de um veículo?",
        },
        categoria: 'mecanica',
        alternativas: [
            { conteudo: "Ruído ao frear e dificuldade para o carro parar.", certa: true },
            { conteudo: "Vibração no volante.", certa: false },
            { conteudo: "Desgaste irregular dos pneus.", certa: false },
            { conteudo: "Acendimento da luz do óleo no painel.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Ruídos e dificuldade para o carro parar são sinais claros de problemas no sistema de freios, que pode comprometer a segurança.",
    },
    {
        id: 14,
        pergunta: {
            enunciado: "O que deve ser verificado periodicamente no motor de um veículo?",
        },
        categoria: 'mecanica',
        alternativas: [
            { conteudo: "O nível de óleo e a temperatura.", certa: true },
            { conteudo: "A cor da pintura.", certa: false },
            { conteudo: "A pressão dos pneus.", certa: false },
            { conteudo: "O sistema de áudio.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "É essencial verificar o nível de óleo e a temperatura do motor periodicamente para evitar danos graves ao motor.",
    },
    {
        id: 15,
        pergunta: {
            enunciado: "Qual é a função do alternador em um veículo?",
        },
        categoria: 'mecanica',
        alternativas: [
            { conteudo: "Recarregar a bateria do carro enquanto o motor está em funcionamento.", certa: true },
            { conteudo: "Garantir o funcionamento do sistema de ar condicionado.", certa: false },
            { conteudo: "Controlar a pressão dos pneus.", certa: false },
            { conteudo: "Gerar energia para o sistema de áudio.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O alternador é responsável por recarregar a bateria do carro enquanto o motor está em funcionamento, fornecendo energia para os componentes elétricos do veículo.",
    },
    {
        id: 16,
        pergunta: {
            enunciado: "Quando deve ser feita a troca do filtro de óleo do motor?",
        },
        categoria: 'mecanica',
        alternativas: [
            { conteudo: "A cada 5.000 km ou conforme orientação do fabricante.", certa: true },
            { conteudo: "A cada 10.000 km, independentemente do uso.", certa: false },
            { conteudo: "A cada troca de pneus.", certa: false },
            { conteudo: "A cada troca de combustível.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A troca do filtro de óleo deve ser feita a cada 5.000 km ou conforme as recomendações do fabricante do veículo, para garantir o bom funcionamento do motor.",
    },
    {
        id: 17,
        pergunta: {
            enunciado: "O que pode indicar um problema no sistema de arrefecimento do motor?",
        },
        categoria: 'mecanica',
        alternativas: [
            { conteudo: "Aquecimento excessivo do motor e luz de alerta acesa.", certa: true },
            { conteudo: "Vibração ao acelerar.", certa: false },
            { conteudo: "Falhas no sistema de câmbio.", certa: false },
            { conteudo: "Ruído excessivo no sistema de exaustão.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O aquecimento excessivo do motor e o acendimento da luz de alerta indicam que o sistema de arrefecimento pode não estar funcionando corretamente, o que pode causar danos ao motor.",
    },
    {
        id: 18,
        pergunta: {
            enunciado: "Para que serve o sistema de escapamento de um veículo?",
        },
        categoria: 'mecanica',
        alternativas: [
            { conteudo: "Reduzir a emissão de gases poluentes e reduzir o ruído do motor.", certa: true },
            { conteudo: "Garantir a lubrificação do motor.", certa: false },
            { conteudo: "Aumentar a potência do motor.", certa: false },
            { conteudo: "Controlar a temperatura do motor.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O sistema de escapamento reduz as emissões de gases poluentes e também diminui o ruído do motor, ajudando na conformidade com normas ambientais.",
    },
    {
        id: 19,
        pergunta: {
            enunciado: "Quando a correia dentada de um motor deve ser substituída?",
        },
        categoria: 'mecanica',
        alternativas: [
            { conteudo: "A cada 30.000 km.", certa: false },
            { conteudo: "A cada 100.000 km ou conforme recomendação do fabricante.", certa: true },
            { conteudo: "Somente quando aparecer desgaste visível.", certa: false },
            { conteudo: "Não necessita substituição, ela é vitalícia.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A correia dentada deve ser substituída a cada 100.000 km ou conforme a recomendação do fabricante para evitar danos graves ao motor.",
    },
    {
        id: 20,
        pergunta: {
            enunciado: "Qual é a função do sistema de direção de um veículo?",
        },
        categoria: 'mecanica',
        alternativas: [
            { conteudo: "Controlar a velocidade do veículo.", certa: false },
            { conteudo: "Permitir que o motorista direcione as rodas do veículo.", certa: true },
            { conteudo: "Ajustar a altura do volante.", certa: false },
            { conteudo: "Manter o veículo estável durante a frenagem.", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O sistema de direção permite que o motorista controle a direção do veículo, movendo as rodas para onde deseja ir.",
    },
    {
        id: 21,
        pergunta: {
            enunciado: "O que é direção defensiva?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "É uma prática para evitar colisões e acidentes.", certa: true },
            { conteudo: "É dirigir rapidamente para evitar engarrafamentos.", certa: false },
            { conteudo: "É priorizar a rapidez ao invés da segurança.", certa: false },
            { conteudo: "É seguir apenas as regras de trânsito sem prever situações.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A direção defensiva consiste em práticas de direção que priorizam a segurança e a prevenção de acidentes."
    },
    {
        id: 22,
        pergunta: {
            enunciado: "Qual é a atitude mais defensiva ao se aproximar de um cruzamento?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Aumentar a velocidade para cruzar rapidamente.", certa: false },
            { conteudo: "Reduzir a velocidade e verificar os dois lados.", certa: true },
            { conteudo: "Focar apenas no sinal de trânsito e seguir adiante.", certa: false },
            { conteudo: "Passar pelo cruzamento sem parar, desde que não haja veículos visíveis.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Ao se aproximar de um cruzamento, é importante reduzir a velocidade e verificar os dois lados para evitar colisões."
    },
    {
        id: 23,
        pergunta: {
            enunciado: "O que fazer em condições de chuva para dirigir defensivamente?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Dirigir com os faróis baixos ligados e reduzir a velocidade.", certa: true },
            { conteudo: "Aumentar a velocidade para chegar ao destino mais rapidamente.", certa: false },
            { conteudo: "Usar faróis altos para melhorar a visibilidade de outros motoristas.", certa: false },
            { conteudo: "Desligar os faróis para economizar bateria.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Durante a chuva, os faróis baixos aumentam a visibilidade sem ofuscar outros motoristas, e reduzir a velocidade minimiza os riscos de aquaplanagem."
    },
    {
        id: 24,
        pergunta: {
            enunciado: "Qual é a distância mínima recomendada para manter de outro veículo em movimento?",
            complementoDoEnunciado: "Considere as condições normais de trânsito e boa visibilidade."
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "A distância equivalente a 2 segundos do veículo à frente.", certa: true },
            { conteudo: "A distância de 1 segundo para economizar espaço na via.", certa: false },
            { conteudo: "O mais próximo possível para evitar que outros veículos entrem na sua frente.", certa: false },
            { conteudo: "Manter sempre 5 metros, independente da velocidade.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A regra dos 2 segundos ajuda a manter uma distância segura, considerando o tempo necessário para reagir em caso de emergência."
    },
    {
        id: 25,
        pergunta: {
            enunciado: "Quais são os princípios básicos da direção defensiva?",
            listaEnumerada: [
                "Conhecer as leis de trânsito.",
                "Estar atento aos outros motoristas.",
                "Manter o veículo em boas condições."
            ]
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Ignorar outros motoristas e seguir apenas as regras básicas.", certa: false },
            { conteudo: "Adotar práticas de segurança e prever riscos no trânsito.", certa: true },
            { conteudo: "Focar apenas no veículo à sua frente.", certa: false },
            { conteudo: "Apenas respeitar o limite de velocidade.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Os princípios básicos incluem conhecer as leis, antecipar riscos e manter o veículo em boas condições."
    },
    {
        id: 26,
        pergunta: {
            enunciado: "Qual é a finalidade da sinalização de trânsito?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Garantir a segurança e fluidez do tráfego.", certa: true },
            { conteudo: "Estabelecer o controle total sobre os motoristas.", certa: false },
            { conteudo: "Impedir a circulação de veículos em áreas específicas.", certa: false },
            { conteudo: "Apenas informar os motoristas sobre o limite de velocidade.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A sinalização tem como objetivo principal garantir a segurança e fluidez do tráfego, orientando os motoristas sobre as condições da via."
    },
    {
        id: 27,
        pergunta: {
            enunciado: "Qual é a função da sinalização de advertência?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Indicar um perigo ou situação que exige atenção.", certa: true },
            { conteudo: "Determinar o limite de velocidade em uma via.", certa: false },
            { conteudo: "Indicar a presença de um estacionamento permitido.", certa: false },
            { conteudo: "Indicar a localização de um posto de combustível.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A sinalização de advertência serve para indicar possíveis perigos ou situações que exigem atenção especial dos motoristas."
    },
    {
        id: 28,
        pergunta: {
            enunciado: "Quando você se deparar com uma sinalização de 'PARE', o que deve fazer?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Reduzir a velocidade e continuar se não houver veículos.", certa: false },
            { conteudo: "Parar completamente e observar se há outros veículos ou pedestres.", certa: true },
            { conteudo: "Ignorar a sinalização, pois não há outros carros visíveis.", certa: false },
            { conteudo: "Acelerar para evitar bloqueio no trânsito.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A sinalização de 'PARE' exige que o motorista pare completamente, garantindo a segurança de todos no local."
    },
    {
        id: 29,
        pergunta: {
            enunciado: "O que significa uma sinalização de 'Proibido Estacionar'?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "É permitido estacionar desde que o motorista pague uma taxa.", certa: false },
            { conteudo: "É proibido estacionar em qualquer circunstância naquele local.", certa: true },
            { conteudo: "Somente veículos de carga podem estacionar.", certa: false },
            { conteudo: "Estacionamento é permitido apenas durante a noite.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A sinalização de 'Proibido Estacionar' indica que é proibido deixar o veículo estacionado naquele local em qualquer circunstância."
    },
    {
        id: 30,
        pergunta: {
            enunciado: "Quando um semáforo está com a luz amarela, o que você deve fazer?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Acelerar para cruzar o sinal antes que fique vermelho.", certa: false },
            { conteudo: "Parar, se for seguro, ou continuar se já estiver no meio do cruzamento.", certa: true },
            { conteudo: "Esperar em frente ao semáforo até que ele mude para verde.", certa: false },
            { conteudo: "Parar no meio do cruzamento.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A luz amarela indica que o sinal está prestes a mudar para vermelho, e o motorista deve parar, se for seguro fazer isso."
    },
    {
        id: 31,
        pergunta: {
            enunciado: "O que fazer em caso de uma pessoa estar engasgada?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Tentar fazer a pessoa tossir sozinha.", certa: false },
            { conteudo: "Dar tapinhas nas costas para tentar desobstruir a via aérea.", certa: true },
            { conteudo: "Oferecer água imediatamente para tentar ajudar a engolir.", certa: false },
            { conteudo: "Esperar a pessoa se acalmar antes de tomar qualquer ação.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Em caso de engasgo, é importante realizar a manobra de Heimlich ou dar tapinhas nas costas para ajudar a desobstruir as vias aéreas."
    },
    {
        id: 32,
        pergunta: {
            enunciado: "O que fazer se uma pessoa sofrer um corte profundo?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Lavar imediatamente com água e sabão, depois aplicar um curativo.", certa: false },
            { conteudo: "Comprimir o local com um pano limpo para estancar o sangramento e procurar ajuda médica.", certa: true },
            { conteudo: "Aplicar pomada antisséptica e cobrir com uma bandagem.", certa: false },
            { conteudo: "Deixar o ferimento exposto e esperar a cicatrização.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Em casos de corte profundo, é essencial controlar o sangramento comprimindo a área com um pano limpo e buscar ajuda médica o mais rápido possível."
    },
    {
        id: 33,
        pergunta: {
            enunciado: "Como proceder em caso de uma queimadura leve?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Aplicar gelo diretamente na queimadura.", certa: false },
            { conteudo: "Colocar a área queimada em água corrente fria por pelo menos 10 minutos.", certa: true },
            { conteudo: "Cobrir a queimadura com pomada e esperar até que a dor passe.", certa: false },
            { conteudo: "Fazer massagem no local queimado para aliviar a dor.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O melhor a fazer é colocar a área queimada em água corrente fria por pelo menos 10 minutos para aliviar a dor e diminuir o dano."
    },
    {
        id: 34,
        pergunta: {
            enunciado: "O que deve ser feito em caso de uma pessoa desmaiar?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Deixar a pessoa deitada, com as pernas elevadas, e garantir que ela respire normalmente.", certa: true },
            { conteudo: "Tentar acordá-la com água fria e dar alimentos logo em seguida.", certa: false },
            { conteudo: "Levar a pessoa imediatamente para um hospital, mesmo que não acorde.", certa: false },
            { conteudo: "Sacudir a pessoa para tentar fazê-la voltar.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Ao desmaiar, a pessoa deve ser colocada deitada, com as pernas elevadas, para melhorar a circulação sanguínea e garantir que ela consiga respirar."
    },
    {
        id: 35,
        pergunta: {
            enunciado: "O que fazer em caso de uma fratura no braço?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Tentar realinhar o osso da forma mais correta possível.", certa: false },
            { conteudo: "Imobilizar o braço com talas improvisadas e procurar ajuda médica imediata.", certa: true },
            { conteudo: "Deixar o braço livre para movimentação para evitar rigidez.", certa: false },
            { conteudo: "Fazer compressa quente no local da fratura para reduzir a dor.", certa: false }
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "É essencial imobilizar o braço com talas improvisadas e buscar ajuda médica o mais rápido possível em casos de fratura."
    }
];


export default listaDeQuestoes