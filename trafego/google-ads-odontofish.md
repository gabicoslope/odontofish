# Google Ads OdontoFish — auditoria e otimização

As campanhas da Dra. Katia **já estão no ar**. Este documento não monta a
conta do zero: ele **confere a campanha atual contra as diretrizes**
(`google-ads-diretrizes.md`) e lista o que otimizar.

Odontopediatria, Av. do Oratório, 2662 – Sala 3, São Lucas (SP).
WhatsApp (11) 97683-6914 · fixo (11) 2911-5266 · seg–sex 9h–18h, sáb 8h–12h.
Diferencial: atendimento adaptado para TEA.

Baseado nas aulas 0 a 8 do G Carvalho + aula de otimização do Adriano Genini.

---

## Como usar

1. Preencher a **planilha do Passo 0** (seção 1). Sem ela não dá para decidir nada.
2. Passar pela **auditoria** (seções 2 a 5) marcando ✅ ou ❌ olhando a conta.
3. Corrigir os ❌, começando pelos 🔴.
4. Seguir a **ordem de otimização** (seção 6) a cada 14–30 dias.

Prioridade: 🔴 corrigir já (perde dinheiro ou mede errado) · 🟡 corrigir
nesta semana · 🟢 melhoria.

---

## 1. Passo 0 — Planilha e CAC Teto

> "Sem CAC Teto a gente não é ninguém."

Como cada campo vira na clínica:

| Campo | Na OdontoFish | Quem tem o dado |
|---|---|---|
| Verba, impressões, cliques | do Google Ads | conta |
| **Leads** | cliques no WhatsApp (e ligações) | conversões do Google Ads |
| **Oportunidades** | conversas que pediram horário para a criança | recepção / WhatsApp |
| **Vendas** | primeira consulta **realizada** | agenda |
| **Ticket médio** | valor médio do que um paciente novo gasta nos primeiros meses (consulta + tratamento) | Dra. Katia |
| **CAC Teto** | máximo para pagar por um paciente novo | definir com a Dra. Katia |

**Sobre o CAC Teto:** a referência do curso é até 10% do valor da venda. Mas
paciente de odontopediatria volta a cada 6 meses por anos e costuma trazer
irmão. É a "esteira" que a aula cita, então o Teto pode ser **maior que 10%
da primeira consulta**. Definir junto com ela.

Fórmulas: CAC Real = verba ÷ primeiras consultas · Faturamento = ticket × consultas.

**Diagnóstico:**

| CAC Real × CAC Teto | Ação |
|---|---|
| sem consultas ou muito acima | pausar e repensar (palavra, página, anúncio) |
| um pouco acima | otimizar na ordem da seção 6 |
| bem abaixo | **aumentar a verba** |

---

## 2. Auditoria — rastreamento

Se a medição está errada, todo o resto fica errado. Começar aqui.

| | Item | O que deveria estar | Prior. |
|---|---|---|---|
| ☐ | GTM instalado no site para onde o anúncio manda | códigos no `<head>` e no `<body>` | 🔴 |
| ☐ | Conversão do WhatsApp dispara | testar no Visualizar clicando no botão | 🔴 |
| ☐ | Acionador do WhatsApp | `Click URL` contém `wa.me` (os botões do site não têm ID) | 🔴 |
| ☐ | Conversão no Google Ads | Contato, **sem valor**, contagem **Uma**, **sem conversão otimizada** | 🔴 |
| ☐ | Conversão principal | só o lead do WhatsApp (e telefone, se houver) | 🔴 |
| ☐ | GTM publicado | última versão enviada e publicada | 🔴 |
| ☐ | ID da Tag do Google | igual na Central de dados e no GTM | 🟡 |
| ☐ | GA4 vinculado | com "Importar públicos-alvo e métricas" | 🟡 |
| ☐ | Perfil da Empresa vinculado | Central de dados | 🟡 |
| ☐ | Scroll 25/50/75/90 | 4 tags com nomes de evento diferentes | 🟢 |
| ☐ | Clique no telefone | `Click URL` contém `tel:` + conversão separada | 🟢 |

**Atenção:** o `index.html` deste repositório **não tem GTM**. Se a campanha
manda para o site oficial (odontofish.com.br), conferir lá.

Remarketing: em saúde a política do Google restringe anúncios personalizados.
Não contar com ele.

---

## 3. Auditoria — campanha

| | Item | Diretriz | Prior. |
|---|---|---|---|
| ☐ | Tipo | Leads + **Pesquisa** (não PMax, não Smart) | 🔴 |
| ☐ | Redes | **Parceiros e Display desmarcados** | 🔴 |
| ☐ | Opções de local | **Presença** | 🔴 |
| ☐ | Lances | Maximizar conversões; **CPA só com 30+ conversões** | 🔴 |
| ☐ | IA Max | desligada | 🟡 |
| ☐ | Idiomas | todos | 🟡 |
| ☐ | Locais | distritos separados (não SP inteira) | 🟡 |
| ☐ | Públicos | em **Observação** | 🟡 |
| ☐ | Programação | 6 blocos (ou horário de atendimento) | 🟡 |
| ☐ | Página de destino | landing page do serviço | 🟡 |
| ☐ | Formulário nativo / WhatsApp direto no anúncio | desligados | 🟡 |

**Locais recomendados** (cada um separado, para o relatório mostrar qual converte):
São Lucas, Vila Prudente, Mooca, Aricanduva, Carrão, Tatuapé, São Caetano do
Sul. Santo André: alfinete de 2–3 km na divisa mais próxima, ou fora.

**Públicos em Observação:** status parental (bebês, crianças pequenas,
pré-escolares, ensino fundamental); segmentos de mercado ligados a
odontologia.

---

## 4. Auditoria — palavras-chave e verba

| | Item | Diretriz | Prior. |
|---|---|---|---|
| ☐ | Verba por palavra | orçamento diário ≥ **lance médio × 10** para cada palavra ativa | 🔴 |
| ☐ | Estrutura | **1 palavra por grupo** | 🟡 |
| ☐ | Volume | ≥ 1.000 buscas/mês (ou verba para 20–30 cliques/dia) | 🟡 |
| ☐ | Intenção | fundo de funil ("perto de mim", "+ região") | 🟡 |
| ☐ | "dentista" sozinho | **evitar** (caro em SP e traz adulto) | 🟡 |
| ☐ | Termos de tratamento | evitar (política de saúde) | 🟡 |

**Conta rápida:** máximo de palavras ativas = verba diária ÷ (lance médio × 10).
R$ 50/dia com lance de R$ 5 → **1 palavra**.

Candidatas, em ordem de prioridade:

| # | Palavra-chave | Observação |
|---|---|---|
| 1 | odontopediatra perto de mim | melhor candidata se tiver volume |
| 2 | dentista infantil perto de mim | muita gente não conhece "odontopediatra" |
| 3 | odontopediatra zona leste | |
| 4 | dentista infantil zona leste | |
| 5 | odontopediatra [bairro] | volume provavelmente baixo |
| 6 | odontopediatra / dentista infantil | aberta; só com local bem fechado |
| 7 | dentista para autista / odontopediatra TEA | **risco de política** de saúde |

---

## 5. Auditoria — anúncio e recursos

### Ética (verificar primeiro)

| | Item | Prior. |
|---|---|---|
| ☐ | Sem preço, "grátis", desconto, parcelamento (inclusive no recurso de **Preço**) | 🔴 |
| ☐ | Sem promessa de resultado, antes/depois ou superlativo ("o melhor") | 🔴 |
| ☐ | "Odontopediatra" só se a Dra. Katia tem a **especialidade registrada no CRO** | 🔴 |

Código de Ética Odontológica, art. 44. Confirmar limites com o CRO-SP.

### Estrutura do anúncio

| | Item | Diretriz | Prior. |
|---|---|---|---|
| ☐ | Quantidade | **1 anúncio por grupo** (não vários) | 🟡 |
| ☐ | Títulos | **15** preenchidos | 🟡 |
| ☐ | Título 1 | = palavra-chave do grupo | 🟡 |
| ☐ | Descrições | **4**, a 1ª com a palavra-chave | 🟡 |
| ☐ | Qualidade do anúncio | "Excelente" | 🟡 |
| ☐ | Local nos títulos | igual ao da palavra ("Zona Leste", não "São Paulo") | 🟡 |
| ☐ | Nenhum título só com o nome da clínica | | 🟢 |
| ☐ | Caminho de exibição | em branco | 🟢 |

### Proposta de títulos (≤ 30 caracteres)

Usar só o que for verdade na clínica. Título 1 muda conforme a palavra do grupo.

| # | Título | Car. |
|---|---|---|
| 1 | Odontopediatra Zona Leste *(= palavra do grupo)* | 25 |
| 2 | Dentista Infantil no São Lucas | 30 |
| 3 | Primeira Consulta Sem Pressa | 28 |
| 4 | Seu Filho Sem Medo do Dentista | 30 |
| 5 | Atendimento Adaptado para TEA | 29 |
| 6 | Mais de 25 Anos com Crianças | 28 |
| 7 | Atendimento aos Sábados | 23 |
| 8 | Encaixe para Urgência | 21 |
| 9 | Plano de Tratamento Explicado | 29 |
| 10 | Perto de Você na Zona Leste | 27 |
| 11 | Agende pelo WhatsApp | 20 |
| 12 | Odontologia para Bebês | 22 |
| 13 | Atendimento com Calma | 21 |
| 14 | Urgência e Trauma Dental | 24 |
| 15 | Atendemos Mooca e V. Prudente | 29 |

### Proposta de descrições (≤ 90 caracteres)

1. Odontopediatra na Zona Leste. A criança conhece a sala antes de qualquer procedimento. (86)
2. Seu filho tem medo de dentista? Aqui cada etapa é explicada no ritmo dele. Agende já. (85)
3. Atendimento adaptado para crianças com TEA, com previsibilidade e baixo estímulo. (81)
4. Dra. Katia, odontopediatra há mais de 25 anos. Seg a sex 9h às 18h e sábado 8h às 12h. (86)

A 1ª leva a palavra-chave. Se o grupo for "dentista infantil", trocar o começo.

### Recursos

| | Recurso | Proposta |
|---|---|---|
| ☐ | Nome e logotipo | OdontoFish + mascote |
| ☐ | **Sitelinks** (4) | Primeira consulta (`#primeira-consulta`) · Autismo e TEA (`#tea`) · Tratamentos (`#servicos`) · Perguntas frequentes (`#faq`). Âncoras deste repositório; conferir as do site que está no ar |
| ☐ | **Frases de destaque** | Plano por escrito · Sábado de manhã · Atendimento adaptado TEA · Encaixe para urgência · +25 anos de experiência · Bebês a partir de 6 meses *(confirmar idade)* |
| ☐ | **Chamada** | `0551129115266`, só seg–sex 9h–18h e sáb 8h–12h, e só se a recepção atende na hora |
| ☐ | **Snippet — Arredores** | São Lucas, Vila Prudente, Mooca, Aricanduva, Vila Carrão, Tatuapé, São Caetano |
| ☐ | **Snippet — Serviços** | Odontologia para bebês, Prevenção e limpeza, Atendimento TEA, Restaurações, Ortodontia preventiva, Urgência e trauma |
| ☐ | Local | Perfil da Empresa vinculado |
| ☐ | **Preço** | **não usar** (ética) |

---

## 6. Ordem de otimização (a cada 14–30 dias)

Antes de tudo: planilha da seção 1 preenchida e CAC Real × Teto calculado.
Com menos de 30 conversões, não mexer em lance; só limpar termos e corrigir
a auditoria.

### 1º Termos de pesquisa (em cada grupo)

Poucos termos ruins → negativar. Quase todos ruins → fechar a correspondência
(Ampla → Frase → Exata).

Negativas prováveis em odontopediatria (**só negativar se aparecerem** no relatório):

| Tipo | Termos |
|---|---|
| Gratuito / público | grátis, gratuito, sus, ubs, posto, popular |
| Emprego / estudo | vaga, emprego, salário, quanto ganha, curso, faculdade, pós, especialização, concurso |
| Informativo | o que é, como, sintomas, remédio, caseiro |
| Adulto | implante, prótese, dentadura, clareamento, lente, siso *(conferir se ela faz siso em adolescente)* |
| Convênio | nomes de convênio que ela **não** aceita |

### 2º Palavras-chave

Custo e conversões de cada palavra × CAC Teto. Pausar a que passa do Teto e
concentrar a verba na que converte. Palavra nova (ex.: TEA) vai em **grupo
ou campanha de teste separada**.

### 3º Públicos (formato Tabela)

- **Idade/Sexo** referem-se a quem busca (pai/mãe). Excluir faixa com CAC
  muito acima do Teto. **Nunca excluir "Desconhecido"** se estiver convertendo.
- **Status parental** (observação): aumentar lance no que converte melhor.
- **Renda:** não mexer antes de 2–3 meses.

### 4º Locais (nível de campanha)

Ordenar por conversões. Distrito caro sem consulta → reduzir lance ou
excluir. Distrito bom → aumentar lance. Na programação: bloco de noite/fim de
semana que não vira consulta → cortar.

### 5º Recursos

Comparar custo por conversão entre sitelinks e entre frases de destaque.
Pausar os caros. **O campeão vai para o topo da página** (ex.: se "Atendimento
adaptado TEA" converte mais barato, destacar TEA na primeira dobra).

### 6º Site

Scroll do GA4: muita gente parando em 25% → refazer a primeira dobra. Chega a
75–90% e não clica → reforçar o CTA final. Trazer para cima o que convence e
está escondido.

### 7º Comercial (conversa com a recepção/Dra. Katia)

Olhar os leads dos últimos 30 dias:

- **Quem agendou:** o que buscou, o que perguntou, por que escolheu → repetir
  no anúncio.
- **Quem não agendou:** preço? convênio? horário? distância? Se for objeção,
  treinar a resposta no WhatsApp. Se for gente fora do perfil (adulto, outro
  bairro), ajustar o anúncio para filtrar.

Sempre: conferir que Parceiros e Display continuam desmarcados.

---

## 7. Dados que preciso para otimizar

Últimos 30 dias, print ou exportação:

**Da clínica**
- [ ] Quantos leads viraram conversa pedindo horário (oportunidades).
- [ ] Quantas primeiras consultas foram realizadas (vendas).
- [ ] Ticket médio de paciente novo.
- [ ] CAC Teto combinado com a Dra. Katia.

**Do Google Ads**
- [ ] Configurações da campanha (tipo, redes, locais, opções de local, lances, IA Max).
- [ ] Orçamento diário e gasto.
- [ ] **Termos de pesquisa** de cada grupo.
- [ ] Palavras-chave: cliques, CPC, conversões, correspondência.
- [ ] Públicos: idade, sexo, status parental (formato tabela).
- [ ] Locais e relatório de dia/horário.
- [ ] **Recursos**: sitelinks, frases, snippets, chamada (custo por conversão).
- [ ] Anúncios (títulos, descrições, qualidade).
- [ ] Ações de conversão (nome, categoria, contagem, principal/secundária).
- [ ] URL da página de destino.

---

## Perguntas para a Dra. Katia

- [ ] Ticket médio de paciente novo e quanto aceita pagar por um (CAC Teto).
- [ ] A especialidade de odontopediatria está registrada no CRO?
- [ ] Quais benefícios da oferta são reais (encaixe de urgência, sábado, plano por escrito, idade mínima do bebê).
- [ ] Os "+25 anos" são de atendimento infantil?
- [ ] Aceita convênio? Quais?
- [ ] A recepção atende o fixo na hora?
- [ ] Quem responde o WhatsApp e em que horário? Tem resposta automática?
- [ ] Atende pacientes de Santo André?
