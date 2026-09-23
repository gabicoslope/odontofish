# OdontoFish — site da Dra. Katia

Site estático de uma página, seguindo de perto a estrutura e o clima da
referência de odontopediatria enviada (Preston Corners), seção por seção:

1. barra de contato + cabeçalho branco com a marca à esquerda e o menu à direita;
2. faixa de recife com cardume denso, raios de luz e ícones sociais na lateral;
3. boas-vindas em azul, algas gigantes nas duas margens, texto à esquerda,
   foto em círculo à direita e cavalo-marinho ao centro;
4. faixa de areia com conchas, búzios e estrelas para a Dra. Katia;
5. campo de ondas em camadas com os quatro atalhos em bolha em arco;
6. tratamentos, TEA e primeira consulta (conteúdo próprio, não vem da referência);
7. depoimento com tartaruga grande e jardim de corais ocupando o chão;
8. localização com mapa em círculo e chão de rochas, anêmonas e corais;
9. rodapé enxuto terminando na faixa fina de areia;
10. concha de "voltar ao topo" no canto inferior direito.

Todas as ilustrações são SVG **originais**, em traço desenhado à mão — nenhuma
foi copiada da referência. Os textos também são próprios.

Sem framework, sem build, sem dependências. É só abrir `index.html` ou subir a
pasta em qualquer hospedagem estática.

```
index.html                  página inteira + sprite de ilustrações + JSON-LD
assets/css/styles.css       estilos
assets/js/main.js           menu, flutuantes, mapa sob demanda (≈2 KB)
assets/img/logo-peixe.png      mascote oficial (marca, rodapé e localização)
assets/img/favicon-*.png    ícone do site, recortado do mascote
assets/img/*.webp/.jpg      fotos reais do consultório (ver abaixo)
assets/img/mapa-preview.svg prévia do mapa (o iframe só carrega no clique)
```

## Antes de publicar — o que ainda falta

Os dados de contato agora vêm do site oficial (odontofish.com.br). Procure por
`PREENCHER` e `CONFIRMAR` no `index.html`. Restam:

| O quê | Onde | Situação |
|---|---|---|
| Instagram e Facebook | ícones ao lado do recife e rodapé | link genérico |
| Wordmark do logo | está em texto (Grandstander), não na tipografia original da marca | aproximação |
| Link do perfil no Google | seção de depoimentos | link genérico |
| CEP | endereço e JSON-LD | omitido, não aparece no site oficial |
| Convênios | FAQ "Vocês atendem convênio?" | texto genérico |
| E-mail de contato | rodapé | removido, não aparece no site oficial |

Já preenchidos com dado real: WhatsApp (11) 97683-6914, telefone
(11) 2911-5266, endereço Av. do Oratório, 2662 – Sala 3 (São Lucas),
horários seg–sex 9h–18h e sábado 8h–12h, os oito bairros atendidos,
"+25 anos" de experiência e o nome **Katia**, sem acento.

O `data-src` do mapa já aponta para o endereço certo. Para trocar, pegue a
URL em *Compartilhar → Incorporar um mapa* no Google Maps.

## Fotos

As cinco fotos são do consultório, recortadas e otimizadas em dois tamanhos e
dois formatos cada (WebP com JPEG de reserva), servidas por `srcset`:

| Arquivo | Onde aparece |
|---|---|
| `consultorio-menino` | círculo das boas-vindas (elemento de LCP, sem lazy) |
| `dra-katia-foto` | círculo da seção da Dra. Katia |
| `consultorio-1..3` | faixa "No consultório" |
| `logo-peixe.png` | mascote oficial no cabeçalho, no rodapé e na localização |
| `favicon-32/48/180.png` | ícone do site, recortado do mascote |

Nenhuma passa de 62 KB. Para trocar qualquer uma, substitua o conjunto
`nome.webp`, `nome.jpg`, `nome-sm.webp` e `nome-sm.jpg` mantendo as proporções
(1:1 nos círculos, 4:5 na faixa).

**Todas mostram menores identificáveis.** Só publique com autorização por
escrito de cada responsável — LGPD, ECA e Código de Ética Odontológica. Os
pontos do HTML estão marcados com `[AUTORIZAÇÃO]`.

## Sobre o texto

O texto do site é rascunho: descreve uma rotina de consultório plausível, não
a rotina real da Dra. Katia. Antes de publicar, leia procurando por
`CONFIRMAR` no `index.html` — são as afirmações operacionais e clínicas que
precisam bater com a prática de verdade:

- quais recursos de baixo estímulo o consultório realmente oferece (abafador,
  óculos escuros, sala reservada);
- a política sobre contenção física e sedação;
- a antecedência que vocês pedem para a chegada;
- a duração real da primeira consulta;
- se o orçamento é mesmo entregue por escrito antes do procedimento;
- o ano em que a Dra. Katia começou a atender.

Promessa que não se cumpre em consultório vira reclamação, e o Código de
Ética Odontológica cobra isso.

## Depoimentos

A seção `#depoimentos` está **propositalmente vazia**. Dentro dela há um
`<figure class="depo">` comentado servindo de modelo. Para publicar:

1. duplique o modelo dentro de `.depos__lista`;
2. preencha `<blockquote>` e `<figcaption>`;
3. apague o bloco `.depos__vazio`.

Publique só com autorização por escrito de cada responsável (LGPD) e evite
depoimento que prometa resultado — o Código de Ética Odontológica veda.

## Decisões que não são só estética

- **Primeira tela no celular.** H1, selo do Google, CRO/RQE e botão de WhatsApp
  cabem sem rolar. Testado de 320×480 a 412×732; abaixo de 665 px de altura
  entra uma regra que compacta o hero (`@media (max-width:640px) and
  (max-height:665px)`). A ilustração é sempre `position:absolute` — nunca
  empurra o conteúdo.
- **WhatsApp é o maior contraste da tela.** Verde `#25D366` com texto
  `#06331A` (7,08:1). Branco sobre esse verde daria 1,98:1 e reprovaria.
- **Contraste AA.** `#1E88C8` só aparece em decoração e texto grande — com
  branco dá 3,88:1. Superfícies com texto corrido usam `#166FA6` (5,44:1) ou
  mais escuro. Coral vira `#C2410C` quando é texto. Os cartões translúcidos
  sobre azul têm a opacidade calibrada para o amarelo `#FFC845` continuar
  acima de 4,5:1. Zero violações no axe-core (WCAG 2.1 AA + best-practice),
  no celular e no desktop.
- **Dois tons a mais, só na decoração.** O recife da referência é multicolorido,
  então o jardim de corais usa também `#FF9EB5` (rosa) e `#B39DDB` (lilás).
  Eles nunca recebem texto, então não entram na conta de contraste.
- **Decoração enxuta no celular.** Cerca de 20 elementos decorativos somem
  abaixo de 640 px, incluindo todos os que cairiam sobre texto. No desktop,
  os peixes soltos ficam fora da coluna de texto por posicionamento.
- **Animação só em CSS**, toda desligada em `prefers-reduced-motion: reduce`.
- **Mapa sob demanda.** Nenhum iframe no carregamento inicial; entra só quando
  a pessoa clica em "Carregar o mapa".
- **Fontes não bloqueiam a renderização** (`preload` + `media="print"` com
  `onload`, mais `<noscript>` de reserva) e usam `display=swap`.
- Os dois botões flutuantes ficam empilhados à direita no celular para não
  cobrir o começo das linhas de texto, e o do WhatsApp se esconde quando o CTA
  grande da seção de localização está na tela.

## Lighthouse

Medido com Lighthouse 12, perfil mobile, servindo a pasta localmente:

```
Performance 100 · Acessibilidade 100 · Boas práticas 96 · SEO 100
FCP 1,2 s · LCP 1,4 s · TBT 0 ms · CLS 0 · Speed Index 1,2 s
```

As auditorias que ainda aparecem em amarelo são de servidor, não de código:
compressão gzip/brotli, `Cache-Control` de longa duração e minificação. Netlify,
Vercel, Cloudflare Pages e um Nginx bem configurado resolvem as três sozinhos.
(O "Boas práticas 96" vem de um erro de console que só existe no ambiente de
teste, onde a requisição do Google Fonts é bloqueada por certificado.)

## Publicar

Qualquer hospedagem estática serve. Para testar localmente:

```sh
python3 -m http.server 8099
# http://127.0.0.1:8099
```

## Paleta

| Token | Hex | Uso |
|---|---|---|
| `--ocean` | `#1E88C8` | decoração e texto grande |
| `--ocean-700` | `#166FA6` | fundo com texto branco |
| `--deep` | `#0B4F7C` | seções escuras |
| `--deep-900` / `--abissal` | `#062F4A` / `#04223A` | fundo do mar e rodapé |
| `--turq` / `--turq-800` | `#2EC4B6` / `#0F6158` | acento / o mesmo em texto |
| `--coral` / `--coral-700` | `#FF7A59` / `#C2410C` | acento / o mesmo em texto |
| `--sol` | `#FFC845` | destaques em fundo escuro |
| `--areia` | `#F6E7C8` | faixa da Dra. Katia |
| `--tinta` | `#1F2A37` | texto em fundo claro |
| `--wa` | `#25D366` | WhatsApp |

Acentos usados só em ilustração (nunca com texto por cima): `#FF9EB5` rosa de
recife, `#B39DDB` lilás de recife, `#146B4F` verde das algas.

## Tipografia

**Grandstander** nos títulos (display arredondado com balanço desenhado à mão)
e **Quicksand** no texto corrido (sans geométrica leve) — a dupla escolhida a
partir da referência "GINGER blossom". Carregadas pelo Google Fonts com
`display=swap`, só nos pesos usados (500/600/700 de cada).

Trocar a dupla é uma linha: os tokens `--fonte-titulo` e `--fonte-texto` no
topo do `styles.css` alimentam o site inteiro. Se mudar, ajuste também a URL
do Google Fonts nas três tags do `<head>` (preload, stylesheet e noscript).

Alternativas testadas na mesma linha:

| Títulos | Texto | Clima |
|---|---|---|
| Grandstander | Quicksand | mais "desenhada à mão", com balanço — a escolhida |
| Fredoka | Quicksand | arredondada e cheia, mais geométrica |
| Baloo 2 | Nunito | mais sóbria, menos infantil |

O corpo do texto usa peso 500 porque a Quicksand é mais fina que a Nunito no
peso normal — abaixo disso ela perde legibilidade em tela pequena.

## Ilustrações

24 símbolos SVG no sprite do `index.html`: peixe-palhaço, peixe-anjo, baiacu,
peixe-cirurgião, peixe-cirurgião-azul, peixe-borboleta, bodião, cavalo-marinho,
tartaruga, água-viva, coral ramificado, leque de coral, esponjas-tubo,
coral-cérebro, anêmona, grama-marinha, rochas, alga gigante, alga fina, concha,
búzio, concha do botão, estrela-do-mar, bolhas e os três ícones de rede social.

As faixas densas (recife do topo com 54 peixes no cardume, jardim de corais do
depoimento, chão de rochas da localização) são composições de `<use>` desses
mesmos símbolos — daí a densidade da referência sem peso de arquivo.
