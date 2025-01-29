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
        categoria: 'mecanica-basica',
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
        categoria: 'mecanica-basica',
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
        categoria: 'mecanica-basica',
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
        categoria: 'mecanica-basica',
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
        categoria: 'mecanica-basica',
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
        categoria: 'mecanica-basica',
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
        categoria: 'mecanica-basica',
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
        categoria: 'mecanica-basica',
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
        categoria: 'mecanica-basica',
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
        categoria: 'mecanica-basica',
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
    },
    {
        id: 36,
        pergunta: {
            enunciado: "Qual é a função das placas de regulamentação?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Indicar condições, proibições ou obrigações", certa: true },
            { conteudo: "Advertir sobre perigos na via", certa: false },
            { conteudo: "Orientar o motorista sobre direções", certa: false },
            { conteudo: "Indicar pontos turísticos", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "As placas de regulamentação informam regras obrigatórias para os condutores.",
    },
    {
        id: 37,
        pergunta: {
            enunciado: "O que significa uma placa de advertência?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Indicar um perigo ou condição especial na via", certa: true },
            { conteudo: "Proibir determinadas ações do motorista", certa: false },
            { conteudo: "Orientar sobre serviços disponíveis na estrada", certa: false },
            { conteudo: "Indicar a velocidade máxima permitida", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "As placas de advertência alertam os motoristas sobre condições especiais na via.",
    },
    {
        id: 38,
        pergunta: {
            enunciado: "Qual a cor predominante das placas de indicação?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Verde", certa: true },
            { conteudo: "Vermelho", certa: false },
            { conteudo: "Amarelo", certa: false },
            { conteudo: "Azul", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "As placas de indicação geralmente possuem fundo verde para orientar os motoristas.",
    },
    {
        id: 39,
        pergunta: {
            enunciado: "O que indica uma placa de proibido estacionar?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Que o veículo não pode parar no local", certa: false },
            { conteudo: "Que é permitido estacionar apenas por 5 minutos", certa: false },
            { conteudo: "Que não é permitido deixar o veículo estacionado", certa: true },
            { conteudo: "Que há um estacionamento próximo", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A placa de proibido estacionar indica que o motorista não pode deixar o veículo parado no local.",
    },
    {
        id: 40,
        pergunta: {
            enunciado: "O que a placa de 'pare' exige do motorista?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Reduzir a velocidade e seguir se não houver risco", certa: false },
            { conteudo: "Parar completamente o veículo antes de prosseguir", certa: true },
            { conteudo: "Dar preferência apenas para veículos maiores", certa: false },
            { conteudo: "Acelerar para evitar congestionamento", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A placa de 'pare' exige que o motorista pare completamente o veículo antes de continuar.",
    },
    {
        id: 41,
        pergunta: {
            enunciado: "O que indica uma placa de sentido obrigatório?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Que a via possui mão dupla", certa: false },
            { conteudo: "Que o motorista deve seguir a direção indicada", certa: true },
            { conteudo: "Que há uma conversão proibida à frente", certa: false },
            { conteudo: "Que o motorista deve reduzir a velocidade", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A placa de sentido obrigatório obriga o motorista a seguir a direção indicada.",
    },
    {
        id: 42,
        pergunta: {
            enunciado: "Qual é a função das placas de serviço?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Alertar sobre perigos na via", certa: false },
            { conteudo: "Indicar locais de interesse público, como hospitais e postos de combustível", certa: true },
            { conteudo: "Impor restrições de tráfego", certa: false },
            { conteudo: "Indicar a velocidade máxima permitida", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "As placas de serviço informam sobre serviços disponíveis na via, como hospitais e postos de combustível.",
    },
    {
        id: 43,
        pergunta: {
            enunciado: "O que significa uma placa de velocidade máxima?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Que o motorista deve trafegar exatamente na velocidade indicada", certa: false },
            { conteudo: "Que o limite de velocidade não pode ser ultrapassado", certa: true },
            { conteudo: "Que a velocidade indicada é apenas uma sugestão", certa: false },
            { conteudo: "Que é obrigatório trafegar abaixo de metade da velocidade indicada", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A placa de velocidade máxima indica o limite que os motoristas não devem ultrapassar.",
    },
    {
        id: 44,
        pergunta: {
            enunciado: "Qual a principal característica das placas de orientação?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Elas são circulares e possuem bordas vermelhas", certa: false },
            { conteudo: "Elas são sempre amarelas e losangulares", certa: false },
            { conteudo: "Elas possuem fundo verde, azul ou marrom, indicando direções e serviços", certa: true },
            { conteudo: "Elas indicam regras obrigatórias aos condutores", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "As placas de orientação possuem fundo verde, azul ou marrom e servem para guiar os motoristas.",
    },
    {
        id: 45,
        pergunta: {
            enunciado: "O que significa uma placa de trânsito com um X vermelho sobre um símbolo de caminhão?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Proibido ultrapassar caminhões", certa: false },
            { conteudo: "Proibida a circulação de caminhões", certa: true },
            { conteudo: "Obrigatório dar preferência a caminhões", certa: false },
            { conteudo: "Proibido estacionar caminhões", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Essa placa indica que a circulação de caminhões é proibida na via.",
    },
    {
        id: 46,
        pergunta: {
            enunciado: "Qual a função de uma placa com uma seta em formato de U e um risco cortando-a?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Proibição de conversão à esquerda", certa: false },
            { conteudo: "Proibição de retorno", certa: true },
            { conteudo: "Obrigação de seguir em frente", certa: false },
            { conteudo: "Indicação de via preferencial", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Essa placa indica que o retorno é proibido no trecho onde está instalada.",
    },
    {
        id: 47,
        pergunta: {
            enunciado: "O que uma placa de pedestre indica?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Que os pedestres devem atravessar correndo", certa: false },
            { conteudo: "Que há um ponto de travessia para pedestres", certa: true },
            { conteudo: "Que a via é exclusiva para pedestres", certa: false },
            { conteudo: "Que os motoristas têm sempre a preferência", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A placa de pedestre alerta sobre um local específico para travessia de pedestres.",
    },
    {
        id: 48,
        pergunta: {
            enunciado: "O que significa uma placa de lombada?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Que há uma curva acentuada na via", certa: false },
            { conteudo: "Que há uma elevação na pista para reduzir a velocidade", certa: true },
            { conteudo: "Que há uma bifurcação na estrada", certa: false },
            { conteudo: "Que o trânsito será interrompido adiante", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A placa de lombada alerta os motoristas sobre a presença de uma elevação na pista para reduzir a velocidade.",
    },
    {
        id: 49,
        pergunta: {
            enunciado: "O que significa uma placa de estacionamento permitido?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Que é obrigatório estacionar naquele local", certa: false },
            { conteudo: "Que o estacionamento é permitido nas condições indicadas", certa: true },
            { conteudo: "Que o estacionamento é proibido em qualquer circunstância", certa: false },
            { conteudo: "Que é necessário autorização especial para estacionar", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Essa placa indica que o estacionamento é permitido, seguindo as condições estabelecidas no local.",
    },
    {
        id: 50,
        pergunta: {
            enunciado: "O que uma placa de curva acentuada indica?",
        },
        categoria: "sinalizacao",
        alternativas: [
            { conteudo: "Que há um cruzamento perigoso adiante", certa: false },
            { conteudo: "Que o motorista deve reduzir a velocidade devido a uma curva fechada", certa: true },
            { conteudo: "Que o trecho exige o uso obrigatório do farol alto", certa: false },
            { conteudo: "Que há um radar de controle de velocidade", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Essa placa alerta os motoristas sobre uma curva fechada e a necessidade de reduzir a velocidade.",
    },
    {
        id: 51,
        pergunta: {
            enunciado: "Qual é o principal objetivo da direção defensiva?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Evitar acidentes e minimizar riscos no trânsito", certa: true },
            { conteudo: "Chegar mais rápido ao destino", certa: false },
            { conteudo: "Dirigir com mais confiança e velocidade", certa: false },
            { conteudo: "Apenas seguir as regras de trânsito sem se preocupar com os outros motoristas", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A direção defensiva visa prevenir acidentes, antecipando possíveis riscos no trânsito.",
    },
    {
        id: 52,
        pergunta: {
            enunciado: "O que um motorista defensivo deve fazer ao perceber que um veículo atrás dele está muito próximo?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Acelerar para se afastar rapidamente", certa: false },
            { conteudo: "Frear bruscamente para alertar o outro motorista", certa: false },
            { conteudo: "Manter a calma e, se possível, dar passagem para o veículo", certa: true },
            { conteudo: "Ignorar a situação e continuar dirigindo normalmente", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Dar passagem e manter a calma reduz os riscos de colisão traseira.",
    },
    {
        id: 53,
        pergunta: {
            enunciado: "Quando um motorista deve aumentar a distância do veículo à frente?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Apenas quando estiver dirigindo em alta velocidade", certa: false },
            { conteudo: "Sempre que houver condições adversas, como chuva ou neblina", certa: true },
            { conteudo: "Somente à noite, quando a visibilidade for menor", certa: false },
            { conteudo: "Quando estiver em uma via de mão dupla", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Condições adversas aumentam o tempo de frenagem, exigindo maior distância de segurança.",
    },
    {
        id: 54,
        pergunta: {
            enunciado: "O que fazer ao se deparar com um motorista dirigindo de forma agressiva?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Responder da mesma forma para não ser prejudicado", certa: false },
            { conteudo: "Tentar bloquear a passagem do veículo agressivo", certa: false },
            { conteudo: "Manter distância e evitar confrontos", certa: true },
            { conteudo: "Acelerar para sair da frente rapidamente", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Evitar confrontos e manter distância reduz o risco de acidentes.",
    },
    {
        id: 55,
        pergunta: {
            enunciado: "Por que é importante verificar os pontos cegos ao dirigir?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Para garantir que os espelhos retrovisores estão bem ajustados", certa: false },
            { conteudo: "Para evitar colisões com veículos que não aparecem nos espelhos", certa: true },
            { conteudo: "Porque o uso dos espelhos não é suficiente para manobras seguras", certa: false },
            { conteudo: "Apenas quando estiver mudando de faixa em alta velocidade", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Os pontos cegos podem esconder veículos, tornando essencial a checagem antes de mudar de faixa.",
    },
    {
        id: 56,
        pergunta: {
            enunciado: "O que um motorista deve fazer ao dirigir sob forte neblina?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Usar o farol alto para melhorar a visibilidade", certa: false },
            { conteudo: "Reduzir a velocidade e ligar o farol baixo", certa: true },
            { conteudo: "Manter a velocidade normal para evitar congestionamento", certa: false },
            { conteudo: "Parar no meio da via até a neblina passar", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O farol baixo evita reflexos excessivos na neblina, garantindo melhor visibilidade.",
    },
    {
        id: 57,
        pergunta: {
            enunciado: "Qual é a atitude correta ao se aproximar de um cruzamento sem semáforo?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Acelerar para atravessar rapidamente", certa: false },
            { conteudo: "Reduzir a velocidade e observar os outros veículos", certa: true },
            { conteudo: "Buzinar para alertar outros motoristas", certa: false },
            { conteudo: "Confiar que os outros motoristas vão parar", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Reduzir a velocidade permite maior controle da situação e evita colisões.",
    },
    {
        id: 58,
        pergunta: {
            enunciado: "O que fazer ao perceber que um pedestre está atravessando fora da faixa?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Ignorar e continuar dirigindo", certa: false },
            { conteudo: "Reduzir a velocidade e permitir a travessia segura", certa: true },
            { conteudo: "Acelerar para passar antes do pedestre", certa: false },
            { conteudo: "Buzinar para forçar o pedestre a sair da pista", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A segurança do pedestre deve ser prioridade, independentemente do local da travessia.",
    },
    {
        id: 59,
        pergunta: {
            enunciado: "Como um motorista defensivo deve agir ao ver uma criança brincando próxima à via?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Reduzir a velocidade e estar preparado para parar", certa: true },
            { conteudo: "Acelerar para passar rapidamente", certa: false },
            { conteudo: "Buzinar para afastar a criança da rua", certa: false },
            { conteudo: "Ignorar e continuar na mesma velocidade", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Crianças podem agir de maneira imprevisível, então é essencial reduzir a velocidade.",
    },
    {
        id: 60,
        pergunta: {
            enunciado: "O que o motorista deve fazer ao perceber um pneu furado em alta velocidade?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Frear bruscamente para parar rapidamente", certa: false },
            { conteudo: "Segurar firme o volante e reduzir a velocidade gradualmente", certa: true },
            { conteudo: "Virar o volante para o acostamento imediatamente", certa: false },
            { conteudo: "Acelerar para tentar manter o controle do veículo", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Reduzir a velocidade gradualmente evita perda de controle e possíveis capotamentos.",
    },
    {
        id: 61,
        pergunta: {
            enunciado: "Qual deve ser a atitude do motorista ao dirigir sob chuva intensa?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Aumentar a velocidade para sair rapidamente da área afetada", certa: false },
            { conteudo: "Reduzir a velocidade, manter distância segura e acender os faróis baixos", certa: true },
            { conteudo: "Frear bruscamente sempre que precisar parar", certa: false },
            { conteudo: "Usar o farol alto para melhorar a visibilidade", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A redução da velocidade e o uso dos faróis baixos aumentam a segurança em condições de chuva intensa.",
    },
    {
        id: 62,
        pergunta: {
            enunciado: "O que um motorista deve fazer ao perceber um veículo vindo na contramão em uma rodovia?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Manter a calma, reduzir a velocidade e tentar desviar com segurança", certa: true },
            { conteudo: "Acelerar para tentar desviar rapidamente", certa: false },
            { conteudo: "Buzinar e continuar na mesma trajetória", certa: false },
            { conteudo: "Frear bruscamente no meio da pista", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Reduzir a velocidade e desviar com segurança evita colisões frontais.",
    },
    {
        id: 63,
        pergunta: {
            enunciado: "Ao dirigir à noite, qual é a melhor prática para evitar o ofuscamento dos faróis de outros veículos?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Olhar diretamente para os faróis do veículo que vem no sentido contrário", certa: false },
            { conteudo: "Desviar o olhar para a faixa da direita e reduzir a velocidade se necessário", certa: true },
            { conteudo: "Acelerar para evitar o contato visual com os faróis", certa: false },
            { conteudo: "Fechar os olhos temporariamente até o veículo passar", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Evitar olhar diretamente para os faróis e manter a atenção na faixa de rolamento ajuda a minimizar o ofuscamento.",
    },
    {
        id: 64,
        pergunta: {
            enunciado: "O que é a 'distância de segurança' na direção defensiva?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "A distância que deve ser mantida entre seu veículo e o veículo à frente para evitar colisões", certa: true },
            { conteudo: "A distância necessária para ultrapassar outro veículo com segurança", certa: false },
            { conteudo: "A distância entre o veículo e a calçada ao estacionar", certa: false },
            { conteudo: "A distância mínima para fazer uma curva em alta velocidade", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Manter uma distância segura do veículo à frente reduz o risco de colisões traseiras.",
    },
    {
        id: 65,
        pergunta: {
            enunciado: "Qual é a melhor forma de evitar a aquaplanagem em dias chuvosos?",
        },
        categoria: "direcao-defensiva",
        alternativas: [
            { conteudo: "Reduzir a velocidade e evitar frenagens bruscas", certa: true },
            { conteudo: "Aumentar a velocidade para não perder o controle", certa: false },
            { conteudo: "Dirigir com os pneus levemente desgastados para melhorar a aderência", certa: false },
            { conteudo: "Frear bruscamente ao perceber que o veículo está deslizando", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Reduzir a velocidade e evitar frenagens bruscas diminui o risco de perder o controle em pistas molhadas.",
    },
    {
        id: 66,
        pergunta: {
            enunciado: "Qual é a função do óleo do motor?",
        },
        categoria: "mecanica-basica",
        alternativas: [
            { conteudo: "Resfriar o radiador", certa: false },
            { conteudo: "Lubrificar as peças internas do motor", certa: true },
            { conteudo: "Aumentar a potência do motor", certa: false },
            { conteudo: "Melhorar a combustão do combustível", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O óleo lubrifica as peças móveis do motor, reduzindo o atrito e prevenindo o desgaste prematuro.",
    },
    {
        id: 67,
        pergunta: {
            enunciado: "O que pode acontecer se um veículo circular com pneus muito desgastados?",
        },
        categoria: "mecanica-basica",
        alternativas: [
            { conteudo: "Melhor aderência em estradas secas", certa: false },
            { conteudo: "Aumento do consumo de combustível", certa: false },
            { conteudo: "Maior risco de derrapagens e perda de controle", certa: true },
            { conteudo: "Melhora na estabilidade do veículo", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Pneus desgastados reduzem a aderência ao solo, aumentando o risco de acidentes, especialmente em pistas molhadas.",
    },
    {
        id: 68,
        pergunta: {
            enunciado: "O que indica uma luz vermelha acesa no painel do veículo?",
        },
        categoria: "mecanica-basica",
        alternativas: [
            { conteudo: "Aviso de manutenção preventiva", certa: false },
            { conteudo: "Problema grave que requer atenção imediata", certa: true },
            { conteudo: "Informação sobre economia de combustível", certa: false },
            { conteudo: "Sinalização de faróis acesos", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Luzes vermelhas no painel indicam falhas sérias no veículo, que devem ser verificadas imediatamente.",
    },
    {
        id: 69,
        pergunta: {
            enunciado: "O que pode causar superaquecimento do motor?",
        },
        categoria: "mecanica-basica",
        alternativas: [
            { conteudo: "Baixo nível de líquido de arrefecimento", certa: true },
            { conteudo: "Combustível de alta octanagem", certa: false },
            { conteudo: "Óleo do motor recém-trocado", certa: false },
            { conteudo: "Uso excessivo do ar-condicionado", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A falta de líquido de arrefecimento pode impedir a dissipação do calor, levando ao superaquecimento do motor.",
    },
    {
        id: 70,
        pergunta: {
            enunciado: "Qual a principal função da bateria do carro?",
        },
        categoria: "mecanica-basica",
        alternativas: [
            { conteudo: "Fornecer energia para o funcionamento do motor", certa: false },
            { conteudo: "Armazenar energia para alimentar o sistema elétrico", certa: true },
            { conteudo: "Reduzir o consumo de combustível", certa: false },
            { conteudo: "Melhorar o desempenho do motor", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A bateria armazena energia para dar partida no veículo e alimentar o sistema elétrico.",
    },
    {
        id: 71,
        pergunta: {
            enunciado: "O que acontece quando o alternador do veículo falha?",
        },
        categoria: "mecanica-basica",
        alternativas: [
            { conteudo: "A bateria para de ser recarregada", certa: true },
            { conteudo: "O motor fica mais potente", certa: false },
            { conteudo: "Os freios deixam de funcionar", certa: false },
            { conteudo: "O nível de óleo do motor diminui", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O alternador é responsável por recarregar a bateria e fornecer energia para o sistema elétrico do carro.",
    },
    {
        id: 72,
        pergunta: {
            enunciado: "Qual é o principal sinal de que as pastilhas de freio precisam ser trocadas?",
        },
        categoria: "mecanica-basica",
        alternativas: [
            { conteudo: "Diminuição da potência do motor", certa: false },
            { conteudo: "Ruídos ao frear", certa: true },
            { conteudo: "Aumento do consumo de combustível", certa: false },
            { conteudo: "Dificuldade em dar a partida", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Ruídos ao frear indicam desgaste das pastilhas, comprometendo a eficiência da frenagem.",
    },
    {
        id: 73,
        pergunta: {
            enunciado: "Para que serve o filtro de ar do motor?",
        },
        categoria: "mecanica-basica",
        alternativas: [
            { conteudo: "Filtrar impurezas do combustível", certa: false },
            { conteudo: "Impedir a entrada de sujeira no motor", certa: true },
            { conteudo: "Melhorar a refrigeração do motor", certa: false },
            { conteudo: "Aumentar a potência do carro", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O filtro de ar impede a entrada de partículas de sujeira no motor, garantindo um bom funcionamento.",
    },
    {
        id: 74,
        pergunta: {
            enunciado: "O que pode acontecer se o nível de óleo do motor estiver abaixo do recomendado?",
        },
        categoria: "mecanica-basica",
        alternativas: [
            { conteudo: "O motor pode superaquecer e sofrer danos graves", certa: true },
            { conteudo: "O veículo perderá potência imediatamente", certa: false },
            { conteudo: "O consumo de combustível será reduzido", certa: false },
            { conteudo: "O sistema elétrico deixará de funcionar", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O óleo lubrifica e reduz o atrito das peças do motor. A falta de óleo pode causar superaquecimento e danos sérios.",
    },
    {
        id: 75,
        pergunta: {
            enunciado: "O que fazer quando a luz de temperatura do motor acender no painel?",
        },
        categoria: "mecanica-basica",
        alternativas: [
            { conteudo: "Continuar dirigindo normalmente", certa: false },
            { conteudo: "Desligar o motor e verificar o nível de líquido de arrefecimento", certa: true },
            { conteudo: "Acelerar para resfriar o motor", certa: false },
            { conteudo: "Acionar o ar-condicionado para reduzir a temperatura", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O superaquecimento pode danificar o motor. O ideal é desligar o veículo e verificar o líquido de arrefecimento.",
    },
    {
        id: 76,
        pergunta: {
            enunciado: "Qual é o primeiro passo ao encontrar uma vítima inconsciente?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Verificar se a vítima está respirando", certa: true },
            { conteudo: "Verificar se há sinais vitais", certa: false },
            { conteudo: "Tentar acordá-la com gritos", certa: false },
            { conteudo: "Realizar massagem cardíaca imediatamente", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O primeiro passo é verificar se a vítima está respirando para avaliar a gravidade da situação.",
    },
    {
        id: 77,
        pergunta: {
            enunciado: "O que fazer se uma pessoa engasgar e não conseguir tossir?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Dar um tapa nas costas", certa: true },
            { conteudo: "Dar água para a pessoa", certa: false },
            { conteudo: "Colocar a pessoa deitada e esperar", certa: false },
            { conteudo: "Aplicar compressas frias no peito", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Em caso de engasgo, a manobra de Heimlich ou tapas nas costas ajudam a desalojar o objeto.",
    },
    {
        id: 78,
        pergunta: {
            enunciado: "Como realizar a ressuscitação cardiopulmonar (RCP) em uma vítima adulta?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Comprimir o peito da vítima com 30 compressões e 2 ventilações", certa: true },
            { conteudo: "Comprimir o peito da vítima com 5 compressões e 2 ventilações", certa: false },
            { conteudo: "Aplicar compressões cardíacas contínuas sem ventilação", certa: false },
            { conteudo: "Dar 30 ventilações seguidas e depois 2 compressões", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A técnica correta é realizar 30 compressões torácicas seguidas de 2 ventilações de boca a boca.",
    },
    {
        id: 79,
        pergunta: {
            enunciado: "O que deve ser feito quando alguém sofre uma queimadura leve?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Aplicar água fria na área afetada", certa: true },
            { conteudo: "Passar pasta de dentes sobre a queimadura", certa: false },
            { conteudo: "Romper as bolhas de queimadura", certa: false },
            { conteudo: "Aplicar óleo ou manteiga sobre a queimadura", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A melhor forma de tratar uma queimadura leve é aplicar água fria imediatamente para aliviar a dor e reduzir a lesão.",
    },
    {
        id: 80,
        pergunta: {
            enunciado: "Qual é a primeira coisa que deve ser feita quando uma pessoa sofrer um corte profundo?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Limpar o corte com água e aplicar pressão", certa: true },
            { conteudo: "Aplicar pomada e band-aid", certa: false },
            { conteudo: "Deixar o corte exposto ao ar", certa: false },
            { conteudo: "Estancar o sangue com gelo", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Em cortes profundos, é importante aplicar pressão para estancar o sangramento e depois procurar atendimento médico.",
    },
    {
        id: 81,
        pergunta: {
            enunciado: "Em caso de choque elétrico, qual é a primeira ação que deve ser tomada?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Desligar a energia ou afastar a vítima da fonte elétrica", certa: true },
            { conteudo: "Tocar a vítima diretamente para verificar a respiração", certa: false },
            { conteudo: "Ligar para a emergência e esperar", certa: false },
            { conteudo: "Aplicar compressas frias na vítima", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Primeiro, é importante garantir que a vítima seja afastada da fonte elétrica, desligando a energia ou utilizando um objeto não condutor.",
    },
    {
        id: 82,
        pergunta: {
            enunciado: "O que deve ser feito se uma pessoa sofrer um acidente e estiver com fratura exposta?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Imobilizar a fratura e procurar atendimento médico", certa: true },
            { conteudo: "Tentar reposicionar os ossos no lugar", certa: false },
            { conteudo: "Aplicar compressa quente na área fraturada", certa: false },
            { conteudo: "Deixar a pessoa em pé para verificar a gravidade", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "É importante imobilizar a área fraturada e procurar ajuda médica imediatamente para evitar complicações.",
    },
    {
        id: 83,
        pergunta: {
            enunciado: "Qual é o procedimento adequado para lidar com uma pessoa com hemorragia nasal?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Fazer a pessoa inclinar a cabeça para trás e apertar as narinas", certa: false },
            { conteudo: "Fazer a pessoa inclinar a cabeça para frente e apertar as narinas", certa: true },
            { conteudo: "Colocar gelo diretamente no nariz", certa: false },
            { conteudo: "Colocar uma gaze no nariz e aguardar", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A pessoa deve inclinar a cabeça para frente para evitar que o sangue desça para a garganta e apertar as narinas para estancar a hemorragia.",
    },
    {
        id: 84,
        pergunta: {
            enunciado: "Como reconhecer se uma pessoa está tendo um acidente vascular cerebral (AVC)?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Dificuldade para falar, paralisia facial e perda de equilíbrio", certa: true },
            { conteudo: "Dor no peito, falta de ar e tontura", certa: false },
            { conteudo: "Dores fortes nas articulações e febre", certa: false },
            { conteudo: "Cefaleia intensa, náusea e falta de apetite", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Os sintomas do AVC incluem dificuldade para falar, paralisia facial e perda de equilíbrio. É essencial buscar atendimento médico imediato.",
    },
    {
        id: 85,
        pergunta: {
            enunciado: "O que deve ser feito ao prestar primeiros socorros em caso de afogamento?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Retirar a pessoa da água e realizar a respiração boca a boca", certa: true },
            { conteudo: "Deixar a pessoa descansar e chamar por ajuda", certa: false },
            { conteudo: "Tentar ressuscitar a pessoa por conta própria", certa: false },
            { conteudo: "Fazer a pessoa beber água para limpar as vias respiratórias", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "É importante retirar a pessoa da água e, se necessário, realizar a respiração boca a boca até a chegada de ajuda médica.",
    },
    {
        id: 86,
        pergunta: {
            enunciado: "Em caso de intoxicação alimentar, qual é a primeira atitude a ser tomada?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Fazer a pessoa vomitar", certa: false },
            { conteudo: "Levar a pessoa imediatamente ao hospital", certa: true },
            { conteudo: "Dar água ou chá para aliviar os sintomas", certa: false },
            { conteudo: "Fornecer alimentos leves para ajudar a digestão", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Em caso de intoxicação alimentar, é importante procurar atendimento médico para tratar adequadamente a situação.",
    },
    {
        id: 87,
        pergunta: {
            enunciado: "Qual a manobra utilizada para salvar uma pessoa engasgada?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Manobra de Heimlich", certa: true },
            { conteudo: "Massagem cardíaca", certa: false },
            { conteudo: "Ressuscitação boca a boca", certa: false },
            { conteudo: "Compressões torácicas", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A manobra de Heimlich é utilizada para desobstruir as vias aéreas de uma pessoa que está engasgada.",
    },
    {
        id: 88,
        pergunta: {
            enunciado: "O que fazer quando uma pessoa está tendo uma crise convulsiva?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Segurar a pessoa para evitar que se machuque", certa: false },
            { conteudo: "Colocar um objeto na boca da pessoa para evitar que morda a língua", certa: false },
            { conteudo: "Proteger a pessoa, afastando objetos ao redor e aguardando a crise passar", certa: true },
            { conteudo: "Agitar a pessoa para acordá-la", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Durante uma crise convulsiva, deve-se proteger a pessoa de se machucar e aguardar que a crise passe.",
    },
    {
        id: 89,
        pergunta: {
            enunciado: "O que fazer se uma pessoa sofrer uma picada de abelha e for alérgica?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Aplicar compressa quente e esperar", certa: false },
            { conteudo: "Retirar o ferrão e aplicar medicação para alergia", certa: true },
            { conteudo: "Fazer a pessoa beber bastante água", certa: false },
            { conteudo: "Aplicar gelo diretamente na picada", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "É importante retirar o ferrão, aplicar medicação para alergia e procurar atendimento médico, especialmente em casos graves.",
    },
    {
        id: 90,
        pergunta: {
            enunciado: "O que fazer em caso de um choque elétrico?",
        },
        categoria: "primeiros-socorros",
        alternativas: [
            { conteudo: "Desligar a fonte de eletricidade ou afastar a vítima usando um objeto não condutor", certa: true },
            { conteudo: "Tocar diretamente a vítima para verificar seu estado", certa: false },
            { conteudo: "Fazer massagem cardíaca sem interromper o choque", certa: false },
            { conteudo: "Aplicar compressas quentes na vítima", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Em caso de choque elétrico, é essencial desligar a fonte de eletricidade ou afastar a vítima de forma segura usando um objeto não condutor.",
    },
    {
        id: 91,
        pergunta: {
            enunciado: "Qual a velocidade máxima permitida para veículos em rodovias de pista dupla?",
        },
        categoria: "legislacao",
        alternativas: [
            { conteudo: "110 km/h", certa: true },
            { conteudo: "100 km/h", certa: false },
            { conteudo: "120 km/h", certa: false },
            { conteudo: "80 km/h", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A velocidade máxima permitida em rodovias de pista dupla é de 110 km/h, conforme o Código de Trânsito Brasileiro.",
    },

    {
        id: 92,
        pergunta: {
            enunciado: "Qual documento é obrigatório para conduzir um veículo no Brasil?",
        },
        categoria: "legislacao",
        alternativas: [
            { conteudo: "Carteira Nacional de Habilitação (CNH)", certa: true },
            { conteudo: "Registro de veículo", certa: false },
            { conteudo: "Passaporte", certa: false },
            { conteudo: "Carteira de Identidade", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A Carteira Nacional de Habilitação (CNH) é o documento obrigatório para conduzir um veículo no Brasil.",
    },

    {
        id: 93,
        pergunta: {
            enunciado: "O que significa a sinalização de trânsito com a cor amarela intermitente?",
        },
        categoria: "legislacao",
        alternativas: [
            { conteudo: "Atenção, sinalização de advertência", certa: true },
            { conteudo: "Proibido parar ou estacionar", certa: false },
            { conteudo: "Obrigatório reduzir a velocidade", certa: false },
            { conteudo: "Siga sem alterações", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A cor amarela intermitente indica que o motorista deve ficar atento, geralmente em áreas de risco ou de movimentação.",
    },

    {
        id: 94,
        pergunta: {
            enunciado: "Em caso de acidente, qual atitude é considerada obrigatória pela legislação de trânsito?",
        },
        categoria: "legislacao",
        alternativas: [
            { conteudo: "Prestar socorro às vítimas ou chamar ajuda", certa: true },
            { conteudo: "Evitar a presença de testemunhas", certa: false },
            { conteudo: "Abandonar o local do acidente para evitar problemas", certa: false },
            { conteudo: "Procurar não envolver a polícia", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A legislação exige que em caso de acidente, os motoristas devem prestar socorro ou chamar as autoridades competentes.",
    },

    {
        id: 95,
        pergunta: {
            enunciado: "Qual a punição para quem dirigir sob o efeito de álcool e for flagrado?",
        },
        categoria: "legislacao",
        alternativas: [
            { conteudo: "Multa e suspensão da CNH", certa: true },
            { conteudo: "Apenas advertência verbal", certa: false },
            { conteudo: "Apenas multa", certa: false },
            { conteudo: "Apreensão do veículo", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Conduzir sob efeito de álcool resulta em multa, suspensão da CNH e, em alguns casos, em outras sanções.",
    },

    {
        id: 96,
        pergunta: {
            enunciado: "Qual a idade mínima para obter a Carteira Nacional de Habilitação (CNH) no Brasil?",
        },
        categoria: "legislacao",
        alternativas: [
            { conteudo: "18 anos", certa: true },
            { conteudo: "21 anos", certa: false },
            { conteudo: "16 anos", certa: false },
            { conteudo: "19 anos", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A idade mínima para obtenção da CNH no Brasil é de 18 anos.",
    },

    {
        id: 97,
        pergunta: {
            enunciado: "Em que situação é permitido ultrapassar pela direita no Brasil?",
        },
        categoria: "legislacao",
        alternativas: [
            { conteudo: "Quando o veículo à frente estiver sinalizando a intenção de virar à esquerda", certa: true },
            { conteudo: "Em qualquer situação de trânsito lento", certa: false },
            { conteudo: "Quando a via for de pista simples", certa: false },
            { conteudo: "Sempre que o trânsito estiver congestionado", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "É permitido ultrapassar pela direita apenas quando o veículo à frente sinalizar intenção de virar à esquerda.",
    },

    {
        id: 98,
        pergunta: {
            enunciado: "O que fazer ao se deparar com um semáforo vermelho?",
        },
        categoria: "legislacao",
        alternativas: [
            { conteudo: "Parar e aguardar o sinal abrir", certa: true },
            { conteudo: "Acelerar para passar antes que o sinal mude", certa: false },
            { conteudo: "Reduzir a velocidade e passar com cautela", certa: false },
            { conteudo: "Parar apenas se houver pedestres atravessando", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "Ao se deparar com um semáforo vermelho, a atitude correta é parar e aguardar até que o sinal mude para verde.",
    },

    {
        id: 99,
        pergunta: {
            enunciado: "O que significa a sinalização de trânsito com a cor verde?",
        },
        categoria: "legislacao",
        alternativas: [
            { conteudo: "Permissão para seguir em frente", certa: true },
            { conteudo: "Advertência para reduzir a velocidade", certa: false },
            { conteudo: "Proibição de ultrapassagem", certa: false },
            { conteudo: "Indicação de área restrita", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "A cor verde em sinalização indica permissão para o motorista seguir em frente.",
    },

    {
        id: 100,
        pergunta: {
            enunciado: "Qual a punição para quem for flagrado utilizando celular enquanto dirige?",
        },
        categoria: "legislacao",
        alternativas: [
            { conteudo: "Multa e pontos na CNH", certa: true },
            { conteudo: "Apenas advertência", certa: false },
            { conteudo: "Suspensão do direito de dirigir", certa: false },
            { conteudo: "Apreensão do veículo", certa: false },
        ],
        respostaUsuario: null,
        acertou: false,
        justificativaResposta: "O uso de celular enquanto dirige resulta em multa e pontos na CNH, conforme as normas de trânsito.",
    },
];


export default listaDeQuestoes