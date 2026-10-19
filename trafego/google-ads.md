# Google Ads — diretrizes do curso aplicadas à OdontoFish

Documento vivo. Cada aula do módulo entra em três lugares:

1. **Diretrizes** — as regras do curso, consolidadas e sem repetição.
2. **Aplicação OdontoFish** — como cada regra vira configuração para a Dra. Katia.
3. **Registro por aula** — o resumo de cada aula, para consulta.

Progresso: aulas 0 a 5 de 11.

---

## 1. Diretrizes (consolidado)

### Antes de anunciar — os 4 pilares

Nenhuma campanha sobe sem os quatro definidos, nesta ordem:

| # | Pilar | Pergunta que responde | Pronto quando |
|---|---|---|---|
| 1 | Público-alvo | Para quem e por que anunciar? | faixa etária, gênero, renda, dores e desejos mapeados |
| 2 | Oferta irresistível | Por que escolher a mim? | 4 a 7 benefícios além do serviço principal |
| 3 | Landing page | Onde a pessoa decide? | 1 página por serviço, que qualifica e tira dúvidas antes do contato |
| 4 | Anúncio chamativo | Por que clicar? | serviço + benefícios nos títulos + dor/desejo no texto |

Fluxo: **Anúncio → Público → Landing page (oferta) → Contato (WhatsApp/telefone/formulário) → Venda.**

### Canal e segmentação

- Começar **só pela Rede de Pesquisa**. Outros tipos de campanha só depois de
  resultado consistente na Pesquisa.
- Google é rede de **intenção** (a pessoa já está procurando), não de atenção
  como Meta/TikTok.
- Público **começa filtrado** e só **expande na escala**, quando houver
  resultado. Nunca o contrário.

### Anúncio

Três elementos obrigatórios:

1. o serviço que está sendo vendido;
2. os benefícios, direto nos títulos;
3. a dor ou o desejo no texto, com a solução.

### Landing page

- Uma página por serviço, em vez de site institucional cheio de texto.
- Funciona como o primeiro vendedor (SDR): qualifica e responde as dúvidas;
  o fechamento (closer) acontece no WhatsApp ou telefone.

### Conta e pagamento

- Criar a conta pelo **link patrocinado** "Comece a usar o Google Ads" (não o
  orgânico) para ter o cupom de crédito.
- Escolher a **Oferta A**: gastar R$ 1.200 em 60 dias e ganhar R$ 1.200
  (R$ 20–30/dia bate a meta). Não pegar a oferta máxima sem verba para ela.
- No assistente inicial, **pular tudo**: não criar campanha nem vincular contas ali.
- Conferir país (Brasil), **fuso GMT-3 São Paulo** e moeda (BRL).
- Perfil de pagamento: **CNPJ** se tiver.
- Pagamento preferido: **cartão (pós-pago)**. Dica: cartão de limite
  garantido em banco digital (Nubank, PicPay).
- Pix (pré-pago): só colocando a verba **mensal** de uma vez (ou no mínimo a
  semanal). Mínimo de recarga: R$ 40.
- Recusar o estrategista do Google se for iniciante (a sugestão padrão é
  aumentar orçamento).
- Verificação: "não sou agência" e "quem paga sou eu".
- O Google pode gastar até 2–3× o orçamento diário num dia e compensar depois;
  a média do mês fecha. **Não pausar a campanha todo dia** com regra
  automática — isso mata o aprendizado.

### Rastreamento (GA4 + GTM)

Ordem de montagem:

1. **GA4**: conta e propriedade com nome da empresa, fuso SP, BRL, objetivo
   "Gerar leads". Fluxo Web com **só "Visualizações de página"** na métrica
   otimizada. Ativar coleta de indicadores do Google e de dados fornecidos
   pelo usuário. Validação leva até 48 h.
2. **GTM**: contêiner `[WEB] - dominio.com.br` (um contêiner por subdomínio).
   Instalar os dois códigos (`<head>` e início do `<body>`).
3. **Variáveis**: ligar todas as incorporadas de Cliques e Formulários; criar
   `[GA4] - ID` e `[Google Ads] - ID` (tipo Permanente).
4. **Acionadores**: `Botão do WhatsApp` (Apenas links → alguns cliques →
   `Click ID` ou `Click URL` contém…) e `Scroll 25/50/75/90%`.
5. **Conversão no Google Ads**: categoria Contato, manual, sem valor,
   contagem **"Uma"**, **sem conversão otimizada** (isso é só para formulário).
6. **Tags**, numeradas por etapa do funil:

| Nº | Etapa | Tags |
|---|---|---|
| 00 | topo | `[00] - [GA4] - Tag do Google` (send_page_view = true) · `[00] - [Google] - Vinculador de conversões` · `[00] - [Google Ads] - Tag do Google` |
| 01 | meio | `[01] - [GA4] - scroll_25` / `_50` / `_75` / `_90` |
| 02 | fundo | `[02] - [GA4] - generate_lead` · `[02] - [Google Ads] - Lead` |
| 03 | fora do funil | `[03] - [Google Ads] - Remarketing` (All Pages, sem rótulo) |

7. Testar em **Visualizar** (debug) e depois **Enviar → Publicar**. Sem
   publicar, nada vai para o ar.

O scroll mostra em que dobra da página as pessoas desistem.

8. **Vincular no Google Ads** (Ferramentas → Central de dados):
   - **Google Analytics**: escolher a propriedade GA4, deixar marcado
     "Importar públicos-alvo e métricas" → Vincular.
   - **Perfil da Empresa no Google** (Google Meu Negócio), se o negócio for local.
9. **Auditar a Tag do Google**: em Central de dados → Tag do Google →
   Gerenciar, anotar o final do ID do Google Ads e conferir que é o mesmo da
   tag `[00] - [Google Ads] - Tag do Google` no GTM.

### Palavras-chave e orçamento

Ferramenta: **Planejador de Palavras-chave** do Google Ads + planilha.

1. Pesquisar pelo termo do serviço (sem o site, se as sugestões vierem
   ruins), filtrar pela **cidade/região** e ordenar por média de pesquisas mensais.
2. Para cada candidata, anotar:

| Palavra-chave | Volume (teto da faixa) | Menor lance | Maior lance | Lance médio | Cliques/dia | Orçamento/dia |
|---|---|---|---|---|---|---|
| … | … | lance topo da página (menor) | lance topo da página (maior) | (menor + maior) ÷ 2 | 10 | lance médio × cliques |

3. Escolher pela intenção: **fundo de funil** primeiro ("serviço + cidade",
   "serviço perto de mim"). Evitar termos abertos demais ou ambíguos (que
   atraem quem procura emprego, por exemplo).
4. Regras de viabilidade:
   - **≥ 1.000 buscas/mês** → 10 cliques/dia bastam.
   - **~100 buscas/mês** → só com 20–30 cliques/dia (verba 2–3× maior).
   - **Orçamento diário mínimo = lance médio × 10.** Abaixo disso, não anunciar.
5. **Saúde:** o Google restringe termos de tratamento ("clareamento",
   "clínica odontológica" chegam a não ter volume). Na saúde, usar palavras
   mais abertas.
6. Estrutura: **1 palavra-chave por grupo de anúncios**. Para 2–4 palavras,
   um grupo para cada e somar as verbas no orçamento da campanha (o Google só
   tem orçamento por campanha e distribui sozinho entre os grupos).
7. **Uma palavra só já dá resultado.** Melhor 1 palavra com 10 cliques/dia
   do que 4 sem verba.

### Não fazer

- Público aberto "para filtrar depois".
- Display, YouTube, Performance Max etc. antes de dominar a Pesquisa.
- Anunciar sem público definido, sem oferta, ou mandando o clique direto para
  a venda sem passar por uma página.
- Mandar o tráfego para um site institucional genérico.
- Entrar pelo link orgânico e perder o cupom.
- Criar campanha dentro do assistente inicial.
- Pix com recarga diária.
- Regra de pausar ao bater o orçamento e reativar à meia-noite.
- Deixar todas as métricas otimizadas do GA4 ligadas.
- Plugin gratuito ou Elementor pirata para inserir scripts no WordPress.
- Usar `Click ID` quando os botões não têm ID (usar `Click URL`).
- Duplicar tag de scroll e esquecer de trocar o nome do evento.
- Conversão otimizada ou valor fixo em clique de WhatsApp.
- Esquecer de publicar o GTM.
- Deixar o ID da Tag do Google diferente entre Google Ads e GTM.
- Verba diária menor que lance médio × 10.
- Palavra com menos de 1.000 buscas/mês sem caixa para 20–30 cliques/dia.
- Termos de tratamento específico em saúde ("clareamento").
- Várias palavras no mesmo grupo sem verba proporcional.

---

## 2. Aplicação OdontoFish (rascunho)

Odontopediatria da Dra. Katia, Av. do Oratório, 2662 – Sala 3, São Lucas (SP).
Contato: WhatsApp (11) 97683-6914, telefone (11) 2911-5266.
Seg–sex 9h–18h, sáb 8h–12h. Diferencial forte: atendimento adaptado para TEA.

### ⚠️ Conflito com o Código de Ética Odontológica

Parte da "oferta irresistível" do curso **não pode ser usada por dentista**.
O Código de Ética Odontológica (art. 44) proíbe anunciar preços, serviços
gratuitos e modalidades de pagamento. Então ficam **fora do anúncio e da
landing page**: "avaliação grátis", "orçamento grátis", "parcele em 10x",
"desconto". Também não se promete resultado nem se usa antes/depois.
Confirmar os limites atuais com o CRO-SP antes de subir.

A oferta tem que ser montada com benefícios de **serviço e experiência**, não
de preço.

### Pilar 1 — Público

Quem paga e busca não é o paciente: é a **mãe/pai/responsável**.

| Ponto | Hipótese inicial (validar com a Dra. Katia) |
|---|---|
| Faixa etária | 25–44 (pais de bebês e crianças); 45–54 como segunda faixa |
| Gênero | todos, com expectativa de maioria feminina — não excluir de início, observar dados |
| Renda | particular: faixa média a alta. Segmentação por renda pode não estar disponível no Brasil — verificar na conta |
| Local | raio em torno do consultório + os 8 bairros do site: São Lucas, Vila Prudente, Mooca, Aricanduva, Vila Carrão, Tatuapé, São Caetano do Sul, Santo André |
| Dores | criança com medo de dentista; dor de dente/cárie em dente de leite; dente quebrado em queda; filho autista que não aceita atendimento comum; não saber quando levar o bebê pela primeira vez |
| Desejos | dentista que tenha paciência com criança; atendimento sem trauma; perto de casa; filho com dente saudável e sem medo |

### Pilar 2 — Oferta (dentro da ética)

Candidatos a benefícios extras — **confirmar quais são reais** (o site marca
vários como `CONFIRMAR`):

1. Primeira consulta com tempo de adaptação: a criança conhece a sala antes de qualquer procedimento.
2. Plano de tratamento explicado e entregue por escrito.
3. Atendimento adaptado para TEA (baixo estímulo, previsibilidade).
4. Lembretes de retorno e orientação de higiene por WhatsApp (pós-consulta — é o exemplo do curso para saúde).
5. Encaixe para urgência e trauma.
6. Atendimento aos sábados de manhã.
7. Mais de 25 anos de experiência.

### Pilar 3 — Landing pages

Hoje existe um site de uma página (`index.html`). Pelo curso, cada campanha
precisa da sua própria página. Prioridade sugerida:

| Página | Campanha | Por quê |
|---|---|---|
| Odontopediatra (geral) / primeira consulta | principal | maior volume de busca |
| Atendimento TEA | 2ª | diferencial raro, intenção muito alta |
| Urgência e trauma | 3ª | urgência = conversão rápida |

Cada uma com: dor no topo, como funciona, benefícios, Dra. Katia, região
atendida, perguntas frequentes e botão de WhatsApp.

### Pilar 4 — Anúncios

Vou montar títulos e descrições quando as aulas de configuração chegarem.
Direção:

- Títulos com serviço + benefício: "Odontopediatra no São Lucas",
  "Primeira Consulta Sem Pressa", "Atendimento Adaptado para TEA".
- Texto batendo na dor: "Seu filho tem medo de dentista? Aqui ele conhece a
  sala antes de tudo."

### Conta

| Item | OdontoFish |
|---|---|
| Nome da empresa | OdontoFish |
| Site | odontofish.com.br |
| Fuso / moeda | GMT-3 São Paulo / BRL |
| Perfil de pagamento | CNPJ da clínica, se houver (pendência) |
| Pagamento | cartão pós-pago; se for Pix, a verba do mês de uma vez |
| Cupom | Oferta A (R$ 1.200 em 60 dias → R$ 20/dia já bate). Conferir os valores na hora, o Google muda as ofertas |

### Rastreamento

**O site não é WordPress.** É HTML estático, então não tem Elementor: os dois
códigos do GTM vão colados direto no `index.html` (o primeiro logo no início
do `<head>`, o segundo logo depois de abrir o `<body>`). Quando tiver o
`GTM-XXXX`, eu faço essa alteração.

Contêiner: `[WEB] - odontofish.com.br`.

Os botões do site **não têm ID** (são 9 links de WhatsApp e 2 de telefone,
todos só com classes diferentes). Então, pela regra da aula, o acionador usa
**`Click URL`**:

| Acionador | Regra | Tags |
|---|---|---|
| `Botão do WhatsApp` | Click URL contém `wa.me` | `[02] - [GA4] - generate_lead` · `[02] - [Google Ads] - Lead` |
| `Botão de Telefone` (extra) | Click URL contém `tel:` | evento GA4 `click_phone` + conversão separada no Google Ads |

O telefone não foi coberto na aula (o professor cortou a parte de chamada),
mas o site tem o link, então vale medir separado.

Scroll: o site atual é uma página longa, então os 4 eventos de scroll mostram
em que seção as famílias desistem.

**Cuidados próprios de clínica:**

- **Remarketing em saúde:** a política de anúncios personalizados do Google
  restringe segmentação ligada a saúde. A tag `[03]` pode ser criada, mas a
  lista pode ser limitada ou recusada. Não contar com remarketing.
- **LGPD:** o site ainda não tem aviso de cookies. Com GA4 + remarketing
  rodando, convém incluir um aviso simples e citar na política de privacidade.

**Vinculações:** GA4 e o **Perfil da Empresa no Google** da clínica (é negócio
local, então entra). O link do perfil ainda está genérico no site
(pendência do README); o mesmo perfil serve para os dois.

### Palavras-chave

Não tenho acesso ao Planejador, então **volumes e lances ficam para você
preencher** na conta. Abaixo, as candidatas na ordem em que eu testaria.

Local no Planejador: São Paulo (cidade) + São Caetano do Sul + Santo André.
Na campanha, o alvo é mais fechado: raio em torno do consultório / os 8 bairros.

| # | Palavra-chave | Funil | Observação |
|---|---|---|---|
| 1 | odontopediatra perto de mim | fundo | a melhor candidata se tiver volume |
| 2 | dentista infantil perto de mim | fundo | muita gente não conhece a palavra "odontopediatra" |
| 3 | odontopediatra zona leste | fundo | região inteira de uma vez |
| 4 | dentista infantil zona leste | fundo | idem |
| 5 | odontopediatra [bairro] (Mooca, Tatuapé, Vila Prudente…) | fundo | provável volume baixo — servem mais como variação |
| 6 | odontopediatra | meio | aberta, SP inteira; só com raio bem fechado |
| 7 | dentista infantil | meio | idem |
| 8 | dentista para autista / odontopediatra TEA | fundo | **risco de política** (condição de saúde). Testar no Planejador: se voltar sem volume, está restrito |

**Não usar** "dentista" puro: em São Paulo é caríssimo e traz adulto, que a
clínica não atende. A dica do curso de "palavra aberta na saúde" é para
cidade pequena e clínica geral; aqui a especialidade já filtra.

**Conta de orçamento — atenção:** a Oferta A (R$ 20/dia) só fecha com a
regra dos 10 cliques se o lance médio for até **R$ 2**. Em São Paulo é bem
provável que fique entre R$ 3 e R$ 8, ou seja, **R$ 30 a R$ 80/dia por
palavra**. Começar com **1 palavra só** (a nº 1 ou 2, a que tiver ≥ 1.000
buscas e lance mais baixo) e só abrir outro grupo quando houver verba.

---

## 3. Registro por aula

### Aula 0 — Apresentação

Professor G Carvalho (Google Ads desde 2020). Objetivo do módulo: melhores
práticas atuais para campanhas que vendem. Sem configuração.

### Aula 1 — Conceitos do Google Ads

- Redes sociais capturam atenção; Pesquisa do Google capta **intenção**.
- Começar pela Rede de Pesquisa; outros canais só com resultado garantido.
- Público começa filtrado e expande na escala.
- 4 pilares: público (5 pontos), oferta (4–7 benefícios extras), landing page
  (1 por serviço, faz papel de SDR), anúncio (serviço + benefícios nos
  títulos + dor/desejo no texto).
- Exemplo de saúde citado: pós-venda com calendário de retorno e mensagens
  de higiene após extração de siso.
- Frase-chave: "Se você focar em dor e desejo, pode ter certeza que você vai
  fazer o melhor anúncio da sua vida."

### Aula 2 — Criando a conta

- Link patrocinado → cupom (até R$ 3.600; Oferta A = R$ 1.200 por R$ 1.200
  gastos em 60 dias).
- Pular todo o assistente de campanha.
- Fuso GMT-3, BRL, CNPJ se tiver.
- Cartão pós-pago (cobra a cada R$ 50, 100, 200… até virar fatura mensal no
  dia 1º) ou Pix pré-pago (mínimo R$ 40, colocar a verba do mês).
- Google gasta acima do diário em dias bons e compensa; não pausar todo dia.
- Recusar estrategista sendo iniciante.
- Frase-chave: "Se você for aquele tipo de pessoa que tá pensando em colocar
  dinheiro todos os dias, não trabalhe com Pix."

### Aula 3 — GTM e GA4

- GA4 com objetivo "Gerar leads" e só pageview na métrica otimizada.
- GTM instalado no WordPress via Elementor Pro (código personalizado no head e
  no body).
- Variáveis de clique/formulário + IDs permanentes de GA4 e Google Ads.
- Acionador do WhatsApp descoberto no modo Visualizar (`Click ID` ou `Click URL`).
- Tags numeradas 00/01/02/03 por etapa do funil; scroll em 25/50/75/90.
- Conversão "Contato", sem valor, contagem "Uma", sem conversão otimizada.
- Dados mais valiosos do marketing: e-mail, depois telefone.
- Frase-chave: "Google Analytics e Google Tag Manager, o que manda é
  organização."

### Aula 4 — GTM parte 2

- Enviar e publicar o GTM antes de integrar.
- Central de dados do Google Ads: vincular GA4 (importando públicos e
  métricas) e Perfil da Empresa no Google. Google Sheets é opcional.
- Conferir que o ID da Tag do Google (Central de dados → Gerenciar) é o mesmo
  do GTM.
- Frase-chave: "Vamos verificar se foi a mesma tag que foi lá pro gerenciador
  pra gente deixar a estrutura toda redonda e não ficar pontas soltas."

### Aula 5 — Planejamento de palavras-chave

- Planejador + planilha: volume (teto), lance menor e maior, média, 10
  cliques/dia → orçamento mínimo.
- ≥ 1.000 buscas/mês; com ~100 buscas, 20–30 cliques/dia.
- Fundo de funil primeiro ("serviço + cidade", "perto de mim").
- Saúde: termos de tratamento são restritos; usar palavras mais abertas.
- 1 palavra por grupo; orçamento só no nível da campanha.
- Exemplos de dentista: Pato Branco "dentista" R$ 4,49 de lance → R$ 45/dia;
  Piracicaba "dentista perto de mim" R$ 6,66 → R$ 66/dia.
- Frase-chave: "Uma palavra só vai te dar resultado."

---

## Pendências para a Dra. Katia

- [ ] Quais benefícios da lista do Pilar 2 são reais hoje.
- [ ] Faixa de idade das crianças mais atendidas e quem costuma marcar.
- [ ] Verba mensal disponível para Google Ads.
- [ ] Confirmar com o CRO-SP o que pode ir no anúncio.
- [ ] Quais serviços ela mais quer vender (define a ordem das landing pages).
- [ ] A clínica tem CNPJ? (perfil de pagamento)
- [ ] Cartão ou Pix para pagar o Google Ads.
- [ ] Onde o site está hospedado e quem tem acesso (para instalar o GTM).
- [ ] Link e acesso de administrador ao Perfil da Empresa no Google.
- [ ] Rodar o Planejador com a lista de palavras e preencher volume e lances.
