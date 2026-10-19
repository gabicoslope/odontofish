# Google Ads — diretrizes gerais do curso (G Carvalho)

Manual para aplicar em **qualquer cliente**. Junta todas as aulas do módulo
num lugar só, organizado pela ordem em que as coisas são feitas.

A aplicação para cada cliente fica em documento próprio
(ex.: `google-ads-odontofish.md`).

Aulas incluídas: 0 a 8 do G Carvalho + aula extra de otimização do Adriano
Genini ("Otimização de campanha Google Ads na prática").

---

## Visão geral em 10 regras

1. Google é rede de **intenção**: a pessoa já está procurando. Meta/TikTok
   são rede de **atenção**.
2. Começar **sempre** por **Leads + Rede de Pesquisa**. Nada de PMax, Display
   ou Vídeo antes de ter resultado na Pesquisa.
3. Antes de anunciar, ter os **4 pilares**: público, oferta, landing page e
   anúncio.
4. Público começa **filtrado** e só expande quando der resultado.
5. **1 landing page por serviço**, nunca site institucional.
6. Rastreamento organizado (GA4 + GTM) **antes** de gastar.
7. Orçamento diário mínimo = **lance médio × 10 cliques**, por palavra-chave.
8. **1 palavra-chave por grupo de anúncios**. Uma palavra só já dá resultado.
9. **Maximizar conversões** sem CPA até ter **30 conversões**.
10. Não pausar a campanha todo dia: o Google compensa o gasto no mês.
11. Anúncio se constrói **a partir da landing page**, com títulos de
    disponibilidade, urgência e solução. **1 anúncio bom por grupo.**
12. Sem **CAC Teto** não se otimiza: antes de mexer, saber ticket médio,
    vendas e quanto se pode pagar por cliente.

---

## Etapa 1 — Os 4 pilares (antes de abrir a conta)

| # | Pilar | Pergunta | Pronto quando |
|---|---|---|---|
| 1 | Público-alvo | Para quem e por que anunciar? | faixa etária, gênero, renda, dores e desejos mapeados |
| 2 | Oferta irresistível | Por que escolher você? | **4 a 7 benefícios** além do produto/serviço |
| 3 | Landing page | Onde a pessoa decide? | 1 página por serviço, que qualifica e responde as dúvidas |
| 4 | Anúncio chamativo | Por que clicar? | serviço + benefícios nos títulos + dor/desejo no texto |

Fluxo: **Anúncio → Público → Landing page (oferta) → Contato → Venda.**

### Pilar 1 — Público (5 pontos)

1. Faixa etária (configurável no Google Ads).
2. Gênero (configurável).
3. Renda (configurável onde o Google oferece).
4. **Dores** — principal para negócio local e serviço: bater na dor e mostrar a solução.
5. **Desejos.**

### Pilar 2 — Oferta irresistível

Somar 4 a 7 entregas extras. Ideias do curso:

| Tipo de benefício | Exemplo |
|---|---|
| Facilidade de compra | visita grátis, orçamento grátis, até 10× no cartão |
| Pós-venda | calendário de retorno para acompanhar recuperação |
| Educação do cliente | mensagens programadas com cuidados (ex.: higiene após extrair siso) |
| Rede de parceiros | descontos cruzados com negócios do mesmo nicho (academia + suplementos + roupa fitness) |

> **Nichos regulados** (dentista, médico, advogado etc.): os conselhos
> profissionais costumam proibir preço, gratuidade, forma de pagamento e
> promessa de resultado em anúncio. Nesses casos, montar a oferta com
> benefícios de **atendimento e experiência**. Confirmar com o conselho.

### Pilar 3 — Landing page

- Uma por serviço/produto. Nada de site institucional "pesadão, cheio de texto".
- Faz o papel de **SDR** (primeiro vendedor): qualifica e tira dúvidas.
- O **closer** é o WhatsApp, telefone ou formulário.

### Pilar 4 — Anúncio

Três elementos obrigatórios:

1. o produto/serviço;
2. os benefícios **nos títulos**;
3. a dor ou o desejo **no texto**, com a solução.

> "Se você focar em dor e desejo, pode ter certeza que você vai fazer o
> melhor anúncio da sua vida."

---

## Etapa 2 — Conta e pagamento

1. Pesquisar "Google Ads" e entrar pelo **link patrocinado** ("Comece a usar o
   Google Ads") para pegar o cupom (até R$ 3.600).
2. Escolher a **Oferta A**: gastar R$ 1.200 em 60 dias → ganhar R$ 1.200.
   R$ 20–30/dia já bate. Não pegar a oferta máxima sem verba.
3. "Criar sua primeira campanha" → nome e site → Avançar → **Pular em todas as
   telas** (não criar campanha nem vincular nada no assistente).
4. País Brasil, **fuso GMT-3 São Paulo** (atenção MT, RO, AC), moeda BRL.
5. Perfil de pagamento: **CNPJ** se tiver.
6. Forma de pagamento:

| Forma | Como funciona | Quando usar |
|---|---|---|
| Cartão (pós-pago) | cobra a cada R$ 50 → 100 → 200 → 500 → 900 → 1.000… até virar fatura no dia 1º | **preferida**. Dica: cartão de limite garantido (Nubank, PicPay) |
| Pix (pré-pago) | crédito antecipado, mínimo R$ 40 | só colocando a verba **mensal** (ou semanal) de uma vez |
| Mercado Pago | — | alternativa |

7. Estrategista do Google: **recusar** se for iniciante (vão pedir para
   aumentar orçamento).
8. "Não sou agência" e "quem paga sou eu" (100% dos casos).

**Comportamento do orçamento:** com R$ 30/dia, o Google pode gastar R$ 60 ou
R$ 90 num dia bom e compensar depois; a média fecha em R$ 900 no mês.

---

## Etapa 3 — Rastreamento (GA4 + GTM)

> "Google Analytics e Google Tag Manager, o que manda é organização."

### 3.1 GA4

1. Conta e propriedade com o nome da empresa; fuso SP; BRL.
2. Objetivo: **Gerar leads** (e-commerce: Aumentar vendas).
3. Fluxo **Web** com a URL do site. Na engrenagem da métrica otimizada,
   **deixar só "Visualizações de página"**.
4. Anotar o **ID da métrica** (`G-…`).
5. Administrador → Coleta de dados: ativar indicadores do Google e dados
   fornecidos pelo usuário → "Eu confirmo".
6. Validação leva até 48 h.

### 3.2 GTM

1. Contêiner `[WEB] - dominio.com.br` (um por subdomínio).
2. Instalar os dois códigos: `<head>` e início do `<body>`.
   - WordPress: Elementor Pro → Código personalizado (`[GTM] - [HEAD]` e
     `[GTM] - [BODY]`). **Nada de plugin gratuito nem Elementor pirata.**
   - Wix/Tray: só o `GTM-…` no campo nativo.
   - HTML puro: colar direto no arquivo.
3. Testar até aparecer o check verde.

### 3.3 Variáveis

- Incorporadas: ligar todas de **Cliques** e **Formulários**.
- Do usuário (tipo Permanente): `[GA4] - ID` e `[Google Ads] - ID`.

### 3.4 Acionadores

| Acionador | Configuração |
|---|---|
| `Botão do WhatsApp` | Apenas links → alguns cliques → `Click ID` contém `whatsapp` **ou** `Click URL` contém `wa.me` (se os botões não têm ID ou têm IDs diferentes) |
| `Scroll 25%` / `50%` / `75%` / `90%` | Profundidade de rolagem vertical, todas as páginas |

Descobrir o ID/URL do botão no **Visualizar** → clicar no botão → Link Click → Variables.

### 3.5 Conversão no Google Ads

Metas → Conversões → Site → categoria **Contato** → manual:

- Valor: **não usar**.
- Contagem: **Uma**.
- **Sem conversão otimizada** (só para formulário — botão não tem dado).
- Copiar ID e rótulo da conversão (aba "Usar o Gerenciador de tags").

### 3.6 Tags (numeradas por etapa do funil)

| Nº | Etapa | Tag | Acionador |
|---|---|---|---|
| 00 | topo | `[00] - [GA4] - Tag do Google` (parâmetro `send_page_view` = `true`) | Initialization - All Pages |
| 00 | topo | `[00] - [Google] - Vinculador de conversões` | All Pages |
| 00 | topo | `[00] - [Google Ads] - Tag do Google` | All Pages |
| 01 | meio | `[01] - [GA4] - scroll_25` / `_50` / `_75` / `_90` | Scroll correspondente |
| 02 | fundo | `[02] - [GA4] - generate_lead` | Botão do WhatsApp |
| 02 | fundo | `[02] - [Google Ads] - Lead` (ID + rótulo) | Botão do WhatsApp |
| 03 | fora do funil | `[03] - [Google Ads] - Remarketing` (só ID) | All Pages |

Ao copiar tag de scroll, **trocar o nome do evento**.

### 3.7 Publicar e vincular

1. Testar no **Visualizar** → **Enviar** → **Publicar**.
2. Google Ads → Ferramentas → **Central de dados**:
   - Google Analytics → propriedade → "Importar públicos-alvo e métricas" → Vincular.
   - Perfil da Empresa no Google (negócio local).
   - Google Sheets (opcional).
3. Central de dados → Tag do Google → Gerenciar: o final do ID tem que ser
   **igual** ao da tag `[00] - [Google Ads] - Tag do Google` no GTM.

**Para que serve:** o scroll mostra em que dobra da página as pessoas
desistem. Dados mais valiosos do marketing: **e-mail**, depois **telefone**.

---

## Etapa 4 — Palavras-chave e orçamento

1. Planejador de Palavras-chave: pesquisar pelo termo do serviço (tirar o site
   se as sugestões vierem ruins), filtrar pela **cidade/região**, ordenar por
   pesquisas mensais.
2. Planilha:

| Palavra-chave | Volume (teto) | Menor lance | Maior lance | Lance médio | Cliques/dia | Orçamento/dia |
|---|---|---|---|---|---|---|
| … | … | topo da página (menor) | topo da página (maior) | (menor + maior) ÷ 2 | 10 | lance médio × cliques |

3. Escolher **fundo de funil**: "serviço + cidade", "serviço perto de mim".
   Evitar termo aberto demais ou ambíguo ("eletricista residencial" atrai quem
   procura emprego).
4. Viabilidade:
   - **≥ 1.000 buscas/mês** → 10 cliques/dia.
   - **~100 buscas/mês** → 20–30 cliques/dia (verba 2–3× maior).
5. **Saúde:** termos de tratamento são restritos ("clareamento", "clínica
   odontológica" chegam a não ter volume). Usar palavras mais abertas.
6. **1 palavra por grupo.** Mais palavras = mais grupos, somando a verba no
   orçamento da campanha (o Google só tem orçamento por campanha).

Exemplos do curso:

| Caso | Palavra | Lance médio | Orçamento/dia |
|---|---|---|---|
| Eletricista, ABC | eletricista santo andré | R$ 3,88 | R$ 38,75 |
| Eletricista, ABC | eletricista perto de mim | R$ 4,73 | R$ 47,25 |
| Dentista, Pato Branco | dentista | R$ 4,49 | R$ 45 |
| Dentista, Pato Branco | consultório odontológico (100 buscas → 30 cliques) | R$ 3,13 | R$ 93,75 |
| Dentista, Piracicaba | dentista perto de mim | R$ 6,66 | R$ 66,55 |

---

## Etapa 5 — Tipo de campanha

| Objetivo | Para quem |
|---|---|
| Vendas | e-commerce |
| **Leads** | **serviço, saúde, negócio local — começar aqui** |
| Tráfego do site | só levar visitas |
| Promoção de app | apps |
| Reconhecimento e consideração | alcance |
| Visitas a lojas e promoções | Perfil da Empresa (roda como PMax) — **não usar** |

Dentro de Leads: **Pesquisa** (começar aqui), Performance Max, Geração de
demanda, Vídeo, Display, Shopping.

- **PMax** junta Pesquisa, YouTube, Gmail, Maps, Discovery e Display. Só com
  histórico de conversões e verba sobrando.
- Perfil da Empresa entra como **recurso de local** dentro da Pesquisa.
- Shopping com objetivo Leads serve para atacado sem preço no site.

---

## Etapa 6 — Configurar a campanha de Pesquisa

| Etapa | Configuração |
|---|---|
| Objetivo / tipo | Leads (meta Contato) / Pesquisa |
| Maneiras de alcançar | ✅ Visitas ao site (landing page) · ✅ Ligações (só se alguém atende na hora — urgência, clínica com recepção) · ✅ Visitas à loja · ❌ Formulário de lead nativo · ❌ WhatsApp direto do anúncio |
| Telefone | formato do exemplo do Google: `(011) 98888-8888` |
| Nome | `[OBJETIVO] [TIPO] [Página/Oferta]` → `[LEADS] [PESQUISA] Anúncio do Google` |
| Lances | Conversões (Maximizar). **Sem CPA até 30 conversões.** Não marcar "só novos clientes" |
| Redes | ❌ Parceiros de pesquisa · ❌ Display |
| Locais | cidade pequena/interior: cidade inteira · capital: distrito/bairro, CEP ou **raio em km** com modo alfinete |
| Opções de local | **Presença** (só "Presença ou interesse" para serviço remoto: seguro, consórcio, infoproduto) |
| Idiomas | **todos** |
| Anúncios políticos da UE | Não |
| Públicos | em **Observação**: status parental, estado civil, segmentos de mercado |
| Rotação | Otimizar |
| Programação | 6 blocos: seg–sex e sáb–dom × 00–07 / 07–19 / 19–00. Se a venda depende de resposta na hora: só o horário de atendimento |
| IA Max | **desligada** |

Dicas:
- Usar vários alfinetes pequenos (ex.: 1 km) em bairros diferentes mostra no
  relatório qual bairro converte.
- Público não aparece pelo nome do serviço? Buscar pelo problema ("conserto"
  achou "Serviços de eletricista").
- CPA depois das 30 conversões: verba ÷ clientes desejados (R$ 30/dia ÷ 3 = R$ 10).

---

## Etapa 7 — Anúncio responsivo de pesquisa

> "A gente tem uma base de ouro para construir um bom anúncio. E qual é essa
> base? A própria página."

Pré-requisito: palavra-chave já escolhida (ela define o orçamento) e os 4 pilares prontos.

### 7.1 URL e títulos

- **URL final:** link da landing page. **Caminho de exibição:** em branco.
- **15 títulos** (o máximo). Fontes: seções da página (serviços, quem sou,
  benefícios, FAQ) e anúncios dos concorrentes (pesquisar a palavra no Google).
- **Título 1 = palavra-chave.**
  - Grupo com 1 palavra: digitar a palavra ("Eletricista Santo André").
  - Grupo com 2+ palavras: digitar `{` → **Inserção de palavra-chave** com
    texto padrão.
- Demais títulos focados em **disponibilidade, urgência e solução**:
  - oferta da página ("Atendimento 24 horas", "Serviço com garantia");
  - urgência/proximidade ("Resolvo seu problema agora", "Estou bem perto de você");
  - local **igual ao da palavra** ("Disponível em Santo André", não "no ABC").
- Profissional autônomo: escrever em **1ª pessoa**.
- **Não** gastar título com o nome da empresa ("Eletricista Bonelli") nem com
  genéricos ("Eletricista mais próximo").

### 7.2 Descrições (preencher todas)

1. Inserção de palavra-chave + complemento ("{Eletricista Santo André}
   disponível agora."). Com 2 palavras no grupo, conferir se a frase faz
   sentido com as duas.
2. Proximidade + ação, **com a palavra-chave** no texto (sobe a qualidade
   para "Excelente").
3. e 4. Apresentação da página dividida em duas, trocando região ampla pela
   cidade da palavra-chave.

Revisar em **Visualizar anúncios** no celular e no computador (90% acessa
pelo celular) e corrigir combinações sem sentido.

### 7.3 Recursos (extensões)

| Recurso | Como |
|---|---|
| Nome e logotipo | adicionar (logo liberado após verificação da conta) |
| **Sitelinks** (4) | um para cada seção do menu da página (vale âncora de página única): Serviços, Sobre, Benefícios, Perguntas frequentes. Descrição do sitelink quase não aparece; não perder tempo |
| **Frases de destaque** (4+) | benefícios da oferta |
| Preço | opcional; o professor só usa para produto físico |
| **Chamada** | formato `05511999999999` (055 + DDD + número). Opções avançadas → só nos dias/horários em que atende |
| **Snippets estruturados** | tipo **Arredores**: bairros da cidade · tipo **Serviços**: todos os serviços da página |

### 7.4 Quantidade

- **1 anúncio excelente por grupo** com verba baixa e 1 palavra (2 se tiver
  um pouco mais de verba). Um responsivo já vale **30+ versões**.

> "O Google, principalmente na rede de pesquisa, é uma página de jornal online."

---

## Otimização (método Adriano Genini + G Carvalho)

> "A gente pode olhar para uma palavra-chave e achar que ela tá ruim, mas na
> real a palavra em si não tá ruim, os termos de pesquisa tão ruins."

### Passo 0 — Planilha (antes de abrir o Google Ads)

Escolher o período (1 semana, 14 ou 30 dias) e preencher:

| Campo | O que é |
|---|---|
| Verba investida | gasto no período |
| Impressões / Cliques | do Google Ads |
| **Leads** | quem converteu (contato) |
| **Oportunidades** | leads com perfil e intenção real de comprar (de 100 leads, 50 queriam comprar → 50 oportunidades) |
| Vendas | fechadas |
| Ticket médio | média dos pedidos (R$ 1.000 + R$ 200 → R$ 600) |
| **CAC Teto** | o máximo que dá para pagar por uma venda. Referência: **até 10% do valor do produto** (não é regra fixa; com esteira de produtos pode ser maior) |

Calculados: taxas entre etapas, **Faturamento = ticket × vendas**,
**CAC Real = verba ÷ vendas**. CAC Real acima do Teto = vermelho.

Referência: **CTR de 10–15% na Pesquisa já é muito bom.** As médias da
planilha valem só para Pesquisa, não para Meta.

### Diagnóstico macro

Campanha → últimos 30 dias → custo por conversão × CAC Teto:

| Situação | Ação |
|---|---|
| Sem resultado ou resultado péssimo | **pausar** e testar outra estratégia |
| Vende com lucro, CAC um pouco acima do Teto | otimizar na ordem abaixo |
| CAC bem abaixo do Teto | **aumentar a verba** |
| Menos de 30 conversões | não mexer em lance (G Carvalho) |
| 30+ conversões | estudar e definir CPA desejado (G Carvalho) |

### Ordem das otimizações

| # | Onde | O que fazer |
|---|---|---|
| 1 | **Termos de pesquisa** (grupo → Insights e relatórios) | poucos termos ruins → **negativar**. Quase todos ruins → **fechar a correspondência** (Ampla → Frase/Exata; Frase → Exata). Repetir em todos os grupos |
| 2 | **Palavras-chave** | custo, conversões, valor e ROAS (valor ÷ custo) × CAC Teto. Pausar as que passam do Teto. Palavra nova só com 100% de certeza; teste vai em estrutura separada |
| 3 | **Públicos** (formato Tabela) | Idade e Sexo: excluir faixa com CAC muito acima do Teto; limpar ajustes de lance antigos. **Nunca excluir "Desconhecido"** se converte bem. Renda: só depois de **2–3 meses** e com "Desconhecido" quase nulo |
| 4 | **Locais** (nível de **campanha**; no grupo fica vazio) | ordenar por conversões; excluir quem não converte; local excepcional pode virar campanha própria. Com 6 blocos de horário: ajustar ou cortar blocos ruins (G Carvalho) |
| 5 | **Recursos** | comparar custo por conversão entre sitelinks, frases, snippets, local, chamada. **Pausar** (não remover) os caros. O campeão vira destaque na página |
| 6 | **Site** (externo) | argumento estratégico, não gosto: alinhamento, lacunas de copy, hierarquia (trazer para o topo o que está escondido). Scroll 25/50/75/90 mostra onde a pessoa sai. Bom ajuste de site dá 2–3× mais vendas |
| 7 | **Comercial** (externo) | com o cliente, olhar os leads de 30 dias: quem **comprou** (o que atraiu → repetir) e quem **não comprou** (objeção não quebrada ou anúncio atraindo gente errada → ajustar copy) |

Sempre conferir também que Parceiros de pesquisa e Display continuam desmarcados.

> "Nunca negocie com não saber o resultado que você tá gerando."

---

## Não fazer (lista completa)

**Estratégia**
- Público aberto "para filtrar depois".
- Outro canal antes de dominar a Pesquisa; PMax em conta nova.
- Anunciar sem público, sem oferta ou vendendo direto do anúncio.
- Site institucional no lugar de landing page.
- Campanha só para o Perfil da Empresa (Visitas a lojas).

**Conta**
- Entrar pelo link orgânico (perde o cupom).
- Oferta máxima sem verba.
- Criar campanha no assistente inicial.
- Fuso errado.
- Pix com recarga diária.
- Regra para pausar ao bater o orçamento e reativar à meia-noite.
- Aceitar estrategista sendo iniciante.

**Rastreamento**
- Todas as métricas otimizadas do GA4 ligadas.
- Plugin gratuito ou Elementor pirata.
- GTM bagunçado (sem padrão de nome e numeração).
- `Click ID` quando os botões não têm ID.
- Copiar tag de scroll sem trocar o nome do evento.
- Conversão otimizada ou valor fixo em clique de WhatsApp.
- Esquecer de **Enviar e Publicar** o GTM.
- ID da Tag do Google diferente entre Ads e GTM.

**Palavras-chave**
- Verba menor que lance médio × 10.
- Palavra com < 1.000 buscas sem caixa para 20–30 cliques/dia.
- Termos de tratamento específico em saúde.
- Várias palavras no mesmo grupo sem verba proporcional.

**Campanha**
- Pular etapas da configuração.
- Formulário de lead nativo ou WhatsApp direto do anúncio.
- CPA antes de 30 conversões.
- Parceiros de pesquisa e Display marcados ("o Google é sorrateiro").
- Raio em milhas; "Presença ou interesse" em negócio local; só português.
- Público em Segmentação.
- Rodar 24 h sem ninguém para responder.
- IA Max ligada.

**Anúncio**
- Escolher palavra-chave "do nada", sem planejamento.
- Título genérico ou com o nome da empresa.
- Local do título mais amplo que o da palavra-chave.
- Inserção de palavra-chave na descrição sem checar o sentido.
- Chamada ativa 24 h quando o cliente não atende.
- Vários anúncios no mesmo grupo com verba baixa.

**Otimização**
- Mexer sem saber ticket, CAC Real e CAC Teto ("apertador de botão").
- Tratar todo lead como oportunidade.
- Usar referências da Pesquisa para Meta.
- Pausar palavra-chave antes de olhar os termos de pesquisa.
- Misturar teste na campanha que performa.
- Excluir "Desconhecido" que converte; mexer em renda antes de 2–3 meses.
- Procurar Locais no nível de grupo.
- Criticar site por gosto; ignorar o comercial.

---

## Registro por aula

### Aula 0 — Apresentação
G Carvalho, Google Ads desde 2020. Objetivo: melhores práticas atuais para
campanhas que vendem.

### Aula 1 — Conceitos
Intenção × atenção; começar pela Pesquisa; público filtrado → escala; os 4
pilares (público em 5 pontos, oferta com 4–7 benefícios, landing page por
serviço como SDR, anúncio com serviço + benefícios + dor/desejo).

### Aula 2 — Criando a conta
Link patrocinado e cupom (Oferta A); pular o assistente; fuso, BRL, CNPJ;
cartão pós-pago × Pix pré-pago (mínimo R$ 40, verba mensal); compensação do
orçamento diário; recusar estrategista.

### Aula 3 — GTM e GA4
GA4 só com pageview; GTM via Elementor Pro; variáveis de clique/formulário e
IDs; acionador do WhatsApp descoberto no Visualizar; scroll 25/50/75/90;
conversão Contato sem valor, contagem Uma, sem conversão otimizada; tags
00/01/02/03; enviar e publicar.

### Aula 4 — GTM parte 2
Publicar antes de integrar; Central de dados (GA4 com públicos e métricas,
Perfil da Empresa, Sheets); conferir ID da Tag do Google.

### Aula 5 — Planejamento de palavras-chave
Planejador + planilha; lance médio × 10; ≥ 1.000 buscas; fundo de funil;
restrição de saúde; 1 palavra por grupo; orçamento só na campanha.

### Aula 6 — Tipos de campanha
7 objetivos + 1; 6 tipos dentro de Leads; começar por Leads/Pesquisa; PMax só
com histórico; Perfil da Empresa como recurso.

### Aula 7 — Criando a campanha
Maneiras de alcançar; nome padrão; Maximizar conversões sem CPA até 30;
desmarcar Parceiros e Display; locais por porte de cidade; Presença; todos os
idiomas; públicos em Observação; 6 blocos de horário; IA Max desligada.

### Aula 8 — Criando o anúncio
Página como base; 15 títulos (1º = palavra-chave ou inserção dinâmica) com
disponibilidade, urgência e solução; descrições com a palavra-chave para
qualidade "Excelente"; revisar no celular; 4 sitelinks das seções, 4 frases
de destaque, chamada `055…` com horário, snippets de Arredores e Serviços;
1 anúncio por grupo. Exemplo: eletricista em Santo André.

### Extra — Otimização na prática (Adriano Genini)
Planilha com leads × oportunidades × vendas, ticket e CAC Teto (até 10% do
produto); diagnóstico macro (pausar / otimizar / escalar); ordem: termos de
pesquisa → palavras → públicos → locais → recursos → site → comercial. CTR
10–15% é muito bom. Renda só após 2–3 meses. Recurso campeão vira destaque
na página.
