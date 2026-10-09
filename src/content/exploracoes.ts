// Publicações de Explorações (migrado de docs/prototipo/exploracoes-data.js).
// Para publicar: adicione um objeto ao array. Sem `leitura`, o tempo é calculado pelo texto.
// Sem `data`, a data não aparece. `**texto**` vira negrito.
import type { Categoria, CategoriaId, Post } from "./types";

export const categorias: Record<CategoriaId, Categoria> = {
  'mini-cases': { label: 'Mini Cases', bg: '#e5f5f0', ink: '#0b5d63' },
  'processos': { label: 'Processos & Práticas', bg: '#eceaff', ink: '#2a1fb3' },
  'reflexoes': { label: 'Reflexões & Aprendizados', bg: '#feece6', ink: '#9a3412' }
};

export const posts: Post[] = [
  {
    id: 5,
    slug: 'bullapp-experiencia-mobile',
    titulo: 'BULLAPP: traduzindo uma operação complexa em uma experiência mobile acessível',
    descricao: 'Como a compreensão de um mercado pouco familiar, o questionamento de premissas e a organização de informações complexas orientaram uma experiência para pequenos produtores rurais.',
    categoria: 'mini-cases',
    empresa: 'Fraktal',
    tags: ['Product Designer', 'Mobile', 'UX/UI', 'Regras de negócio'],
    relacionados: ['athletto-frequencia', 'figma-ao-codigo-fraktal'],
    logo: '/assets/logos/bullapp.png',
    capa: '/assets/exp-bull-capa.webp',
    capaLegenda: 'Aplicativo mobile do produtor: detalhes do lote e solicitações de propostas.',
    marca: 'BullApp',
    ficha: [
      { k: 'Projeto', v: 'BULLAPP · startup agro' },
      { k: 'Meu papel', v: 'Product Designer · UX e UI do mobile' },
      { k: 'Plataforma', v: 'App mobile para pequenos produtores' },
      { k: 'Resultado', v: 'Fluxo aprovado sem ajustes' }
    ],
    conteudo: [

      { tipo: 'h2', rotulo: 'Contexto', texto: 'O problema era maior que a interface' },
      { tipo: 'p', texto: 'O BULLAPP nasceu para conectar **pequenos produtores de gado a frigoríficos**. Grandes produtores negociam volumes que tornam viável a coleta. Pequenos, com menos animais, muitas vezes não justificam uma logística individual.' },
      { tipo: 'fluxo', itens: [
        { k: 'Produtores', v: '5', d: 'de uma mesma região' },
        { k: 'Por produtor', v: '10', d: 'animais disponíveis' },
        { k: 'Lote conjunto', v: '50', d: 'animais em um ponto de coleta' }
      ], legenda: 'A lógica central do produto: consolidar ofertas próximas. Cada animal continua identificado com seu proprietário, o que organiza a venda e a divisão dos pagamentos.' },
      { tipo: 'destaque', rotulo: 'Meu ponto de partida', titulo: 'Um produto em andamento, e uma frente nova para desenhar.', texto: 'O ambiente web dos frigoríficos já tinha sido estruturado por outro designer. Minha responsabilidade era a experiência mobile dos produtores, coerente com as regras já estabelecidas e pensada para um público com necessidades diferentes.' },

      { tipo: 'h2', rotulo: 'Entendimento', texto: 'Antes de desenhar, precisei entender' },
      { tipo: 'p', texto: 'Conversei com o designer da etapa anterior para entender as regras do ambiente dos frigoríficos, e com o cliente para aprofundar a operação. Dediquei **cerca de uma semana** ao estudo de um domínio que eu ainda não conhecia.' },
      { tipo: 'chips', titulo: 'O que estudei', itens: ['Comercialização de animais', 'Negociação de lotes', 'Logística dos frigoríficos', 'Pesagem e identificação', 'Rendimento de carcaça', 'Papel de cada participante'] },
      { tipo: 'destaque', escuro: true, rotulo: 'Questionando a premissa', titulo: 'E se o problema não fosse só do Centro-Oeste?', texto: 'O cliente perguntou minha opinião sobre a viabilidade da solução, muito ligada à realidade regional que ele conhecia. Compartilhei outro contexto: em Roraima, comunidades rurais se organizam ao longo de estradas vicinais, com propriedades próximas e, em alguns casos, cooperativas. Não foi uma validação de mercado, mas ampliou a forma de olhar o problema.' },

      { tipo: 'h2', rotulo: 'Desafio', texto: 'Complexidade para o negócio, simplicidade para o usuário' },
      { tipo: 'p', texto: 'O app precisava ser compreensível para pessoas com **diferentes níveis de familiaridade com tecnologia** e, ao mesmo tempo, mostrar dados importantes sobre lotes, animais, status e resultados.' },
      { tipo: 'quote', texto: 'Remover informação para deixar a tela mais limpa não era uma opção. O trabalho era organizar.' },
      { tipo: 'roles', itens: [
        { k: 'Hierarquia', t: 'O que importa primeiro', d: 'Status, peso total e rendimento aparecem antes dos detalhes, com uma cor para cada situação.' },
        { k: 'Economia de interação', t: 'Menos idas e voltas', d: 'Informações relevantes concentradas na mesma consulta, sem navegação excessiva entre telas.' },
        { k: 'Consistência', t: 'O mesmo padrão em todo o fluxo', d: 'Selos de status, cartões de lote e abas se repetem em cada etapa.' }
      ] },

      { tipo: 'h2', rotulo: 'Solução', texto: 'Da operação à interface' },
      { tipo: 'p', texto: 'O centro da minha atuação foi o **fluxo de acompanhamento e aprovação de lotes**. Em um lote de dez animais, o produtor precisa identificar código, peso, rendimento de carcaça, sexo e status de cada um, sem transformar a consulta numa tarefa complicada.' },
      { tipo: 'phones', itens: [
        { src: '/assets/bull-07.webp', titulo: 'Meus lotes', d: 'Disponibilidade, composição, peso total e propostas recebidas em cada lote, com busca e filtro no topo.' },
        { src: '/assets/bull-01.webp', titulo: 'Meus animais', d: 'O status de cada animal no topo do cartão, com o lote ao lado. Peso e rendimento estimado em destaque.' },
        { src: '/assets/bull-05.webp', titulo: 'Detalhes do lote', d: 'Disponibilidade, próxima ação, valor, local de retirada e animais do lote numa única tela.' }
      ], legenda: 'Acompanhamento: do lote ao animal, com a mesma lógica de status em todas as telas.' },
      { tipo: 'phones', itens: [
        { src: '/assets/bull-08.webp', titulo: 'Solicitações de propostas', d: 'Frigorífico, data, distância, valor e cabeças lado a lado, com aceitar e recusar no mesmo cartão.' },
        { src: '/assets/bull-03.webp', titulo: 'Histórico de reservas', d: 'O lote visível ao mercado, o prazo de 48 horas para a proposta e os frigoríficos interessados.' },
        { src: '/assets/bull-02.webp', titulo: 'Status da proposta', d: 'Cada etapa da venda, da proposta à pesagem final e ao pagamento, com data e hora.' }
      ], legenda: 'Aprovação: o produtor decide com a proposta à vista e acompanha cada etapa até o pagamento.' },
      { tipo: 'phones', itens: [
        { src: '/assets/bull-04.webp', titulo: 'Dashboard', d: 'Animais vendidos, lotes concluídos e rendimento médio, com as propostas pendentes logo abaixo.' },
        { src: '/assets/bull-06.webp', titulo: 'Financeiro', d: 'Valores recebidos e a receber separados, com o pagamento previsto de cada lote.' }
      ], legenda: 'Visão geral e financeiro.' },

      { tipo: 'h2', rotulo: 'Resultado', texto: 'Uma solução aprovada sem ajustes' },
      { tipo: 'p', texto: 'Apresentei a experiência mobile à liderança de produto e depois ao cliente. O fluxo de aprovação de lotes recebeu um **elogio específico da minha gerente de produto**, pela forma como as informações estavam organizadas.' },
      { tipo: 'tiles', itens: [
        { k: 'Cliente', t: 'Fluxo aprovado na primeira avaliação, sem ajustes' },
        { k: 'Liderança', t: 'Elogio à organização das informações' },
        { k: 'Entrega', t: 'Encaminhado à engenharia para implementação' }
      ] },
      { tipo: 'p', normal: true, texto: 'A implementação ficou com uma equipe de engenharia de outra empresa. Não acompanhei a evolução do produto depois dessa entrega.' },

      { tipo: 'h2', rotulo: 'Aprendizado', texto: 'O que essa experiência reforçou' },
      { tipo: 'p', texto: 'O trabalho de Product Design não começou na tela. Começou em entender **como um lote se forma, quem paga quem e o que um produtor precisa saber para decidir**. As decisões de hierarquia e navegação só fizeram sentido porque vieram dessa compreensão.' }
    ]
  },
  {
    id: 4,
    slug: 'figma-ao-codigo-fraktal',
    titulo: 'Do Figma ao código: como ajudei a repensar o processo de UI na Fraktal',
    descricao: 'Design System codificado, prototipação com IA e os ganhos — e limites — de aproximar design e desenvolvimento.',
    resumo: 'Como participei da criação de um fluxo de interfaces em código com IA, da construção de um Design System compartilhado e da avaliação crítica do que ganhamos e perdemos em velocidade.',
    categoria: 'processos',
    empresa: 'Fraktal',
    tags: ['Design Engineering', 'Design System', 'IA', 'Processos', 'Handoff'],
    relacionados: ['bullapp-experiencia-mobile', 'athletto-frequencia'],
    logo: '/assets/logos/fraktal.png',
    capa: '/assets/exp-fraktal-capa.webp',
    capaLegenda: 'Do wireframe ao produto final, com o dashboard do gestor do Eventure como exemplo do fluxo.',
    marca: 'Fraktal',
    ficha: [
      { k: 'Empresa', v: 'Fraktal Softwares' },
      { k: 'Meu papel', v: 'Product Designer · autor do Design System base' },
      { k: 'Stack', v: 'Vue.js e Nuxt' },
      { k: 'Resultado', v: 'MVPs entregues antes do previsto' }
    ],
    conteudo: [

      { tipo: 'h2', rotulo: 'Contexto', texto: 'O problema não era só desenhar mais rápido' },
      { tipo: 'p', texto: 'Na Fraktal, o UX já entregava mapeamentos detalhados de telas, caminhos e elementos. Ainda assim, **converter esse material em interfaces prontas para validação consumia muitas horas**.' },
      { tipo: 'p', texto: 'Com contratos orientados por horas e a pressão por agilizar os MVPs, a liderança propôs criar UI **direto em código, com apoio de IA**. A direção estava colocada, mas o processo ainda precisava ser estruturado.' },
      { tipo: 'destaque', escuro: true, rotulo: 'A pergunta', titulo: 'Como acelerar a construção de interfaces sem perder a análise crítica que acontece durante o design?', texto: 'Foi essa pergunta, e não a escolha de uma ferramenta, que guiou o trabalho.' },

      { tipo: 'h2', rotulo: 'Minha atuação', texto: 'O papel que assumi' },
      { tipo: 'p', texto: 'Minha contribuição começou pela consistência. Construí **um Design System base para a Fraktal**, com componentes essenciais, cores semânticas e padrões visuais compartilhados, e depois adaptei essa referência para uma **base codificada**.' },
      { tipo: 'roles', itens: [
        { k: 'Autoria individual', t: 'Design System base e sua adaptação para código', d: 'Componentes fundamentais, organização visual, padrões e cores semânticas para reduzir divergências entre produtos.' },
        { k: 'Cocriação com a Bianca', t: 'O novo fluxo de trabalho', d: 'Do mapeamento UX a wireframes intermediários, interfaces em código e validação com clientes.' },
        { k: 'Esforço coletivo do time de UI', t: 'Experimentação e aplicação', d: 'O processo foi discutido, testado e aplicado pelo time nos projetos.' }
      ] },

      { tipo: 'h2', rotulo: 'Processo', texto: 'Dois processos, duas dinâmicas' },
      { tipo: 'p', texto: 'A diferença estava no meio do caminho: **o Figma ficou com os wireframes de média fidelidade, e a alta fidelidade passou para o código**.' },
      { tipo: 'process',
        antes: { titulo: 'Antes', passos: ['Reuniões e discovery', 'Mapeamento de fluxos e telas', 'UI detalhada no Figma', 'Discussões e ajustes surgidos no desenho', 'Aprovação', 'Engenharia'] },
        depois: { titulo: 'Durante a experimentação', passos: ['Reuniões e discovery', 'Mapeamento de fluxos e telas', 'Wireframes manuais de média fidelidade', 'Interface em código com IA e Design System codificado', 'Revisão, ajustes e validação com o cliente', 'Continuidade com a engenharia'], novos: [2, 3, 4] },
        legenda: 'Representações didáticas, não um mapeamento de todas as entregas. Na prática, algumas atividades de investigação e validação receberam menos espaço do que deveriam.' },

      { tipo: 'h2', rotulo: 'Design System', texto: 'Design System como ponte entre design e engenharia' },
      { tipo: 'p', texto: 'A IA precisava de referências claras para que diferentes interfaces não virassem projetos visualmente independentes. O Design System codificado oferecia **uma linguagem comum**: padrões reutilizáveis, consistência visual e uma base aproveitável na implementação.' },
      { tipo: 'dsboard', legenda: 'Ilustração da correspondência entre tokens, componentes e código, no estilo de componentes do Eventure. Não reproduz o Design System da Fraktal.' },

      { tipo: 'h2', rotulo: 'Experimentação', texto: 'A experimentação em código' },
      { tipo: 'p', texto: 'Trabalhamos no ambiente da empresa, **em Vue.js e Nuxt**. As ferramentas da época muitas vezes sugeriam estruturas diferentes da nossa stack, o que exigia adequação e trabalho manual.' },
      { tipo: 'chips', titulo: 'Ferramentas e ambiente', itens: [
        { t: 'Cursor', icon: '/icons/cursor.svg' },
        { t: 'Claude', icon: '/icons/claude.svg' },
        { t: 'Antigravity', icon: '/icons/rocket.svg' },
        { t: 'Vue.js', icon: '/icons/vuedotjs.svg' },
        { t: 'Nuxt', icon: '/icons/nuxt.svg' },
        { t: 'Supabase em projetos pequenos', icon: '/icons/supabase.svg' },
        { t: 'Links para validação com clientes', icon: '/icons/link.svg' }
      ] },
      { tipo: 'p', normal: true, texto: 'O aprendizado veio da prática, de workshops e da formação AI Creative Builders. O valor estava no processo e nos critérios, não na ferramenta.' },

      { tipo: 'h2', rotulo: 'Resultado', texto: 'O que mudou na prática' },
      { tipo: 'p', texto: 'Nos MVPs menores em que experimentamos a abordagem, percebemos **ganhos relevantes de velocidade**.' },
      { tipo: 'stat', de: '5 meses', deLabel: 'previstos', para: '3 meses', paraLabel: 'realizados', contexto: 'Em alguns MVPs', legenda: 'Exemplos relatados, sem isolamento do impacto da IA nem comparação controlada.' },
      { tipo: 'tiles', itens: [
        { k: 'Prazo', t: 'Alguns MVPs entregues em cerca de três meses' },
        { k: 'Engenharia', t: 'Partes do front-end aproveitadas na implementação' },
        { k: 'Cliente', t: 'Apresentações com versões acessíveis por link' }
      ] },

      { tipo: 'h2', rotulo: 'Trade-off', texto: 'O que a velocidade revelou' },
      { tipo: 'p', texto: 'No Figma, desenhar em detalhe fazia emergir perguntas que o discovery não tinha antecipado: **uma regra de negócio sem resposta, um estado não definido, um acesso que precisava ser revisto**. Essas dúvidas viravam conversas com UX e engenharia antes do desenvolvimento.' },
      { tipo: 'p', normal: true, texto: 'Ao avançar mais rápido para o código, nem sempre preservamos esse espaço. Algumas pesquisas e validações ficaram pendentes. O problema não era o código: uma revisão crítica também pode acontecer sobre protótipos codificados. Faltou manter essas pausas dentro do processo.' },
      { tipo: 'quote', texto: 'Acelerar a construção da interface não resolve automaticamente as incertezas do produto.' },

      { tipo: 'h2', rotulo: 'Aprendizado', texto: 'O que levei para minha prática' },
      { tipo: 'p', texto: 'A experiência ampliou meu repertório em Design Engineering e mudou minha relação com o handoff. Passei a entender melhor como **decisões de UI se traduzem em componentes, estruturas de código e consumo de APIs**.' },
      { tipo: 'destaque', rotulo: 'Fechamento', titulo: 'O objetivo não é eliminar etapas. É reduzir esforço sem perder critério.', texto: 'Ferramentas aceleram a materialização de uma solução, mas não substituem a investigação que a torna adequada. Essa experimentação aconteceu em um período específico; depois, mudanças de time e de contexto afetaram sua continuidade.' }
    ]
  },
  {
    id: 6,
    slug: 'athletto-frequencia',
    titulo: 'Nem sempre o caminho mais rápido é o melhor',
    descricao: 'Como usei IA para prototipar três contextos de interação e investigar o lançamento de frequência no ATHLETTO.',
    resumo: 'Três maneiras de registrar frequência, protótipos interativos e uma decisão que colocou a prevenção de erros acima da redução de cliques.',
    categoria: 'processos',
    empresa: 'ATHLETTO',
    tags: ['Product Design', 'Design Engineering', 'Prototipação', 'IA', 'Testes com usuários'],
    relacionados: ['bullapp-experiencia-mobile', 'figma-ao-codigo-fraktal'],
    logo: '/assets/logos/athletto.png',
    logoFill: true,
    logoBg: '#c4e21a',
    marca: 'ATHLETTO',
    capa: '/assets/exp-athletto-capa3.webp',
    capaNotebook: true,
    cardCapa: '/assets/exp-athletto-card.webp',
    tema: { pill: ['#eef9d2', '#13213a', '#13213a'], acc: ['#13213a', '#e7f7bf'], hero: '#f1f2ee' },
    capaLegenda: 'A chamada da turma no ATHLETTO: a funcionalidade já existia; o que estava em avaliação era como acessá-la dentro da jornada.',
    ficha: [
      { k: 'Projeto', v: 'ATHLETTO · gestão de equipes esportivas' },
      { k: 'Pergunta', v: 'Onde e quando registrar frequência' },
      { k: 'Método', v: '3 protótipos interativos com IA' },
      { k: 'Decisão', v: 'Entrada dedicada ao registro' }
    ],
    conteudo: [
      { tipo: 'h2', rotulo: 'Contexto', texto: 'A funcionalidade estava pronta. A decisão de uso, não.' },
      { tipo: 'p', texto: 'O ATHLETTO apoia a gestão de escolinhas, clubes e equipes esportivas. Conversando com **três organizações de modalidades diferentes** (futebol, flag football e basquete), o lançamento de frequência apareceu como parte relevante da rotina.' },
      { tipo: 'p', normal: true, texto: 'Eu já tinha desenhado a experiência de registro, com seus estados e microinterações: presença, falta e justificativa. A solução visual estava aprovada. O que faltava decidir era **por onde e em que momento** o treinador chegaria até ela.' },
      { tipo: 'destaque', escuro: true, rotulo: 'A pergunta', titulo: 'Quando o registro de frequência deve aparecer, e o que o usuário entende que está prestes a fazer?', texto: 'Não era uma questão de visual. Era uma questão de contexto de uso.' },

      { tipo: 'h2', rotulo: 'Hipóteses', texto: 'Três caminhos para o mesmo registro' },
      { tipo: 'p', texto: 'A mesma funcionalidade, em **três contextos de acesso diferentes**. Não eram três designs, eram três momentos possíveis dentro da jornada.' },
      { tipo: 'hipoteses', itens: [
        { l: 'A', t: 'Calendário da turma', ctx: 'O gestor abre o calendário, seleciona a atividade agendada e lança a frequência a partir do evento.', princ: 'Registro vinculado ao evento e à turma.', obs: 'Contextualiza bem a ação, mas como se encaixa na rotina diária?', src: '/assets/ath-cal-modal.webp', retrato: true, alt: 'Evento da turma Sub-15 no calendário com o botão Registrar frequência' },
        { l: 'B', t: 'Agenda do dia, no mobile', ctx: 'A agenda do dia aparece na tela inicial e o treinador entra no registro direto pela atividade.', princ: 'Menos etapas para uma tarefa recorrente.', obs: 'Consultar um compromisso e iniciar o registro ficavam próximos demais.', src: '', alt: '' },
        { l: 'C', t: 'Ambiente dedicado', ctx: 'O treinador entra explicitamente na área de frequência para fazer a chamada da turma, no começo ou no fim da aula.', princ: 'Intenção clara: consultar e registrar são ações separadas.', obs: 'Foi a alternativa mais bem recebida pelos participantes.', src: '/assets/ath-registrar-crop.webp', alt: 'Área de frequência com a chamada de hoje e a turma pendente' }
      ] },

      { tipo: 'h2', rotulo: 'Prototipação', texto: 'Protótipos rápidos, critérios de design preservados' },
      { tipo: 'p', texto: 'Eu não parti de uma tela em branco. **A funcionalidade e o Design System já estavam estruturados no Figma.** Usei esse material como referência no Claude e, com vários prompts e refinamentos, representei os três contextos como fluxos interativos de alta fidelidade.' },
      { tipo: 'stat', de: '3', deLabel: 'contextos prototipados', para: '60–90 min', paraLabel: 'de trabalho, segundo minha estimativa', contexto: 'Execução', legenda: 'Houve bastante iteração. A velocidade foi útil porque tornou viável colocar as hipóteses em funcionamento, não porque substituiu o design.' },

      { tipo: 'h2', rotulo: 'Avaliação', texto: 'De “qual é mais rápido?” para “qual é mais seguro de usar?”' },
      { tipo: 'p', texto: 'Compartilhei os links dos protótipos com as organizações, que **usaram as três alternativas nos próprios aparelhos**.' },
      { tipo: 'tiles', itens: [
        { k: 'Agenda do dia', t: 'Rápida, mas com risco de registro sem querer ao só consultar' },
        { k: 'Calendário', t: 'Bem contextualizado, mais distante da rotina diária' },
        { k: 'Ambiente dedicado', t: 'Mais intenção e previsibilidade na hora da chamada' }
      ] },
      { tipo: 'p', normal: true, texto: 'Foi uma avaliação exploratória e qualitativa de protótipos interativos. Não apresento os comentários como medição de usabilidade.' },

      { tipo: 'h2', rotulo: 'Decisão', texto: 'Menos cliques não era o único critério' },
      { tipo: 'p', texto: 'O acesso pela agenda reduzia etapas, mas a ação explícita de entrar no registro diminuía a ambiguidade. Naquele contexto, **clareza e prevenção de erros pesaram mais que a redução do percurso**.' },
      { tipo: 'quote', texto: 'Não se tratava de complicar a tarefa, e sim de deixar evidente quando o treinador estava consultando e quando estava registrando.' },

      { tipo: 'h2', rotulo: 'Aprendizado', texto: 'A tecnologia acelerou o experimento. A escuta orientou a decisão.' },
      { tipo: 'destaque', rotulo: 'Fechamento', titulo: 'Prototipar mais rápido não é o mesmo que decidir melhor.', texto: 'A IA transformou hipóteses em fluxos navegáveis rapidamente, mas foi a interação com os participantes que revelou a importância da intenção explícita. A melhor experiência nem sempre elimina mais etapas: é a que torna a ação adequada ao contexto, compreensível e confiável.' }
    ]
  }
];
