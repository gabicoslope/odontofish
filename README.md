# OdontoFish — site da Dra. Kátia

Site estático de uma página, com a estrutura e o clima da referência de
odontopediatria enviada (Preston Corners): faixa de recife no topo, seção de
boas-vindas com algas gigantes e foto em círculo, faixa de areia para a
doutora, campo de ondas em camadas com atalhos em bolha, jardim de corais no
depoimento e mapa em círculo cercado de corais no fundo do mar.

Todas as ilustrações são SVG **originais**, em traço desenhado à mão — nenhuma
foi copiada da referência. Os textos também são próprios.

Sem framework, sem build, sem dependências. É só abrir `index.html` ou subir a
pasta em qualquer hospedagem estática.

```
index.html                  página inteira + sprite de ilustrações + JSON-LD
assets/css/styles.css       estilos
assets/js/main.js           menu, flutuantes, mapa sob demanda (≈2 KB)
assets/img/favicon.svg
assets/img/dra-katia.svg    placeholder do retrato — trocar por foto real
assets/img/crianca.svg      placeholder da foto de criança (boas-vindas)
assets/img/mapa-preview.svg prévia do mapa (o iframe só carrega no clique)
```

## Antes de publicar — o que precisa ser preenchido

Procure por `PREENCHER` no `index.html`. Em resumo:

| O quê | Onde | Valor provisório |
|---|---|---|
| Número do WhatsApp | 9 links `wa.me` + `telephone` no JSON-LD | `5511900000000` |
| Telefone exibido | rodapé | `(11) 90000-0000` |
| Endereço completo | seção `#localizacao`, rodapé e JSON-LD | `Rua Exemplo, 000` |
| Horários | seção `#localizacao` e JSON-LD | seg–sex 9–19h, sáb 9–13h |
| Bairro/cidade | linha acima do H1 | `São Paulo` |
| Link do perfil no Google | seção de depoimentos | `google.com/maps` |
| Link do Instagram | rodapé | `instagram.com` |
| Domínio | `canonical`, `og:url`, JSON-LD, e-mail | `odontofish.com.br` |
| Convênios | FAQ "Vocês atendem convênio?" | texto genérico |
| Foto da Dra. Kátia | `assets/img/dra-katia.svg` | ilustração neutra |
| Foto de criança (topo) | `assets/img/crianca.svg` | ilustração neutra |
| Coordenadas do mapa | `data-src` de `#mapa` | Av. Paulista |

O `data-src` do mapa aceita qualquer URL de embed do Google Maps — pegue em
*Compartilhar → Incorporar um mapa* e cole só a URL do `src`.

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
| `--areia` | `#F6E7C8` | faixa da Dra. Kátia |
| `--tinta` | `#1F2A37` | texto em fundo claro |
| `--wa` | `#25D366` | WhatsApp |

Acentos usados só em ilustração (nunca com texto por cima): `#FF9EB5` rosa de
recife, `#B39DDB` lilás de recife, `#146B4F` verde das algas.

Tipografia: **Baloo 2** nos títulos, **Nunito** no texto.

## Ilustrações

21 símbolos SVG no sprite do `index.html`: peixe-palhaço, peixe-anjo, baiacu,
peixe-cirurgião, peixe-cirurgião-azul, peixe-borboleta, bodião, cavalo-marinho,
tartaruga, água-viva, coral ramificado, leque de coral, esponjas-tubo,
coral-cérebro, anêmona, grama-marinha, rochas, alga gigante, alga fina, concha,
búzio, estrela-do-mar e bolhas.

As faixas densas (recife do topo, jardim de corais do depoimento, chão de
rochas da localização) são composições de `<use>` desses mesmos símbolos — daí
a densidade da referência sem peso de arquivo.
