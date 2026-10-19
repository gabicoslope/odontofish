# Google Ads OdontoFish — auditoria e otimização

As campanhas da Dra. Katia **já estão no ar**. Este documento não monta a
conta do zero: ele **confere a campanha atual contra as diretrizes do curso**
(`google-ads-diretrizes.md`) e lista o que otimizar.

Odontopediatria, Av. do Oratório, 2662 – Sala 3, São Lucas (SP).
WhatsApp (11) 97683-6914 · fixo (11) 2911-5266 · seg–sex 9h–18h, sáb 8h–12h.
Diferencial: atendimento adaptado para TEA.

Baseado nas aulas 0 a 7.

---

## Como usar

1. Passar pela **auditoria** marcando ✅ ou ❌ olhando a conta.
2. Cada ❌ vira ação na lista de **correções**.
3. Com 2–4 semanas de dados, seguir as **otimizações por dado**.

Prioridade: 🔴 corrigir já (perde dinheiro ou mede errado) · 🟡 corrigir
nesta semana · 🟢 melhoria.

---

## 1. Auditoria — rastreamento

Se a medição está errada, todo o resto da otimização fica errado. Começar aqui.

| | Item | O que deveria estar | Prior. |
|---|---|---|---|
| ☐ | GTM instalado no site para onde o anúncio manda | códigos no `<head>` e no `<body>` | 🔴 |
| ☐ | Conversão do WhatsApp dispara | testar no Visualizar clicando no botão | 🔴 |
| ☐ | Acionador do WhatsApp | `Click URL` contém `wa.me` (os botões do site não têm ID) | 🔴 |
| ☐ | Conversão no Google Ads | categoria Contato, **sem valor**, contagem **Uma**, **sem conversão otimizada** | 🔴 |
| ☐ | Conversão marcada como principal | só o lead do WhatsApp (e telefone, se houver) como meta da campanha | 🔴 |
| ☐ | ID da Tag do Google | igual na Central de dados e no GTM | 🟡 |
| ☐ | GA4 vinculado | com "Importar públicos-alvo e métricas" | 🟡 |
| ☐ | Perfil da Empresa vinculado | Central de dados | 🟡 |
| ☐ | Scroll 25/50/75/90 | 4 tags com nomes de evento diferentes | 🟢 |
| ☐ | Clique no telefone | acionador `Click URL` contém `tel:` + conversão separada | 🟢 |
| ☐ | GTM publicado | última versão enviada e publicada | 🔴 |

**Atenção:** o `index.html` deste repositório **não tem GTM**. Se a campanha
manda para o site oficial (odontofish.com.br), conferir lá. Se um dia o
tráfego passar para esta versão do site, o GTM precisa ser colado antes.

Remarketing: em saúde a política do Google restringe anúncios personalizados.
A lista pode ser limitada ou recusada; não contar com ela.

---

## 2. Auditoria — campanha

| | Item | Diretriz | Prior. |
|---|---|---|---|
| ☐ | Tipo | Leads + **Pesquisa** (não PMax, não Smart/Visitas a lojas) | 🔴 |
| ☐ | Redes | **Parceiros de pesquisa e Display desmarcados** | 🔴 |
| ☐ | Opções de local | **Presença** (não "Presença ou interesse") | 🔴 |
| ☐ | Lances | Maximizar conversões; **CPA só se já tiver 30+ conversões** | 🔴 |
| ☐ | IA Max | desligada | 🟡 |
| ☐ | Idiomas | todos | 🟡 |
| ☐ | Locais | distritos separados (não a cidade de SP inteira) | 🟡 |
| ☐ | Públicos | em **Observação**, não Segmentação | 🟡 |
| ☐ | Programação | 6 blocos (ou o horário de atendimento) | 🟡 |
| ☐ | Página de destino | landing page do serviço, não site genérico | 🟡 |
| ☐ | Formulário de lead nativo / WhatsApp direto no anúncio | desligados | 🟡 |
| ☐ | Recurso de ligação | só se a recepção atende na hora | 🟢 |
| ☐ | Recurso de local | Perfil da Empresa como recurso da campanha | 🟢 |
| ☐ | Nome | `[LEADS] [PESQUISA] Odontopediatra` | 🟢 |

### Locais recomendados

Cada distrito separado, para o relatório mostrar qual converte:

- SP: São Lucas, Vila Prudente, Mooca, Aricanduva, Carrão, Tatuapé.
- São Caetano do Sul (cidade inteira).
- Santo André: alfinete de 2–3 km na divisa mais próxima, ou fora.
- Distrito que o Google não achar pelo nome: alfinete em **km**.

### Públicos em Observação recomendados

- Status parental: pais de bebês, crianças pequenas, pré-escolares, ensino fundamental.
- Segmentos de mercado: buscar "odonto", "dent"; se não vier nada, o problema
  ("dor de dente", "aparelho").

---

## 3. Auditoria — palavras-chave e verba

| | Item | Diretriz | Prior. |
|---|---|---|---|
| ☐ | Verba por palavra | orçamento diário ≥ **lance médio × 10** para cada palavra ativa | 🔴 |
| ☐ | Estrutura | **1 palavra por grupo de anúncios** | 🟡 |
| ☐ | Volume | palavras com ≥ 1.000 buscas/mês (ou verba para 20–30 cliques/dia) | 🟡 |
| ☐ | Intenção | fundo de funil ("perto de mim", "+ região") | 🟡 |
| ☐ | "dentista" sozinho | **evitar**: em SP é caro e traz adulto, que a clínica não atende | 🟡 |
| ☐ | Termos de tratamento | evitar (política de saúde) | 🟡 |

**Conta rápida:** com R$ X/dia e lance médio de R$ Y, o máximo de palavras
ativas é X ÷ (Y × 10). Ex.: R$ 50/dia e lance de R$ 5 → **1 palavra**. Se
tiver mais grupos que isso, pausar os mais fracos e concentrar a verba.

Palavras candidatas, em ordem de prioridade (conferir volume e lance no Planejador):

| # | Palavra-chave | Funil | Observação |
|---|---|---|---|
| 1 | odontopediatra perto de mim | fundo | melhor candidata se tiver volume |
| 2 | dentista infantil perto de mim | fundo | muita gente não conhece "odontopediatra" |
| 3 | odontopediatra zona leste | fundo | |
| 4 | dentista infantil zona leste | fundo | |
| 5 | odontopediatra [bairro] | fundo | volume provavelmente baixo |
| 6 | odontopediatra / dentista infantil | meio | aberta; só com local bem fechado |
| 7 | dentista para autista / odontopediatra TEA | fundo | **risco de política** de saúde |

---

## 4. Auditoria — anúncio, oferta e página

| | Item | Diretriz | Prior. |
|---|---|---|---|
| ☐ | Anúncio sem preço, "grátis", desconto ou parcelamento | Código de Ética Odontológica (art. 44) | 🔴 |
| ☐ | Sem promessa de resultado ou antes/depois | idem | 🔴 |
| ☐ | Serviço no título | "Odontopediatra", "Dentista Infantil" | 🟡 |
| ☐ | Benefícios nos títulos | ver oferta abaixo | 🟡 |
| ☐ | Dor/desejo na descrição | "Seu filho tem medo de dentista?…" | 🟡 |
| ☐ | Landing page por serviço | geral, TEA, urgência | 🟢 |

### Oferta dentro da ética (4–7 benefícios)

Usar só os que forem reais:

1. Primeira consulta com tempo de adaptação (a criança conhece a sala antes).
2. Plano de tratamento explicado e por escrito.
3. Atendimento adaptado para TEA.
4. Lembretes de retorno e orientação de higiene por WhatsApp.
5. Encaixe para urgência e trauma.
6. Sábado de manhã.
7. Mais de 25 anos de experiência.

### Público (para texto do anúncio e da página)

Quem busca é a **mãe/pai**, não a criança.

- **Dores:** filho com medo de dentista; dor/cárie em dente de leite; dente
  quebrado em queda; filho autista que não aceita atendimento comum; dúvida
  de quando levar o bebê.
- **Desejos:** dentista paciente com criança; atendimento sem trauma; perto
  de casa; filho com dente saudável e sem medo.

---

## 5. Otimizações por dado

Fazer depois de 2–4 semanas rodando com o rastreamento certo.

| Relatório | Sinal | Ação |
|---|---|---|
| Conversões totais | < 30 | **não mexer em lance**; só corrigir itens da auditoria |
| Conversões totais | ≥ 30 | calcular CPA real e testar **CPA desejado** perto dele |
| Locais | distrito com custo alto e zero lead | reduzir lance ou excluir |
| Locais | distrito com CPA baixo | aumentar lance nele |
| Programação (6 blocos) | noite/fim de semana com lead que não vira consulta | cortar o bloco |
| Programação | bloco com CPA baixo | aumentar lance |
| Públicos em observação | status parental com CPA melhor | aumentar lance nele |
| Palavras | palavra sem conversão e gastando | pausar e concentrar verba nas que convertem |
| Scroll (GA4) | muita gente para em 25% | refazer a primeira dobra da página |
| Scroll (GA4) | chega a 75–90% e não clica | reforçar o CTA final / oferta |
| Redes | gasto em Display ou Parceiros | desmarcar de novo |

Também conferir com a clínica **quantos leads viraram consulta**: o Google
só vê o clique no WhatsApp.

---

## 6. Dados que preciso para otimizar

Mandar print ou exportação (últimos 30 dias) de:

- [ ] Configurações da campanha (tipo, redes, locais, opções de local, lances, IA Max).
- [ ] Orçamento diário e gasto do período.
- [ ] Palavras-chave: cliques, CPC médio, conversões.
- [ ] Relatório de locais (por distrito).
- [ ] Relatório de dia e horário.
- [ ] Públicos em observação.
- [ ] Ações de conversão (nome, categoria, contagem, principal/secundária).
- [ ] Os anúncios (títulos e descrições).
- [ ] URL da página de destino.
- [ ] Quantos leads do WhatsApp viraram consulta no período.

---

## Perguntas para a Dra. Katia

- [ ] Quais benefícios da oferta são reais hoje.
- [ ] A recepção atende o fixo na hora?
- [ ] Quem responde o WhatsApp e em que horário? Tem resposta automática?
- [ ] Atende pacientes de Santo André?
- [ ] Quais serviços ela mais quer vender.
- [ ] Confirmar com o CRO-SP o que pode ir no anúncio.
