# Brainstorm de Design — Grana Jovem (SESI)

## Contexto
Site de apresentação imersivo para convidar alunos do 2º ano do SESI a participar da oficina "Grana Jovem". Paleta VIP: preto grafite, dourado, verde fluorescente. Objetivo: despertar curiosidade, gerar hype e engajamento.

---

<response>
<idea>
**Design Movement:** Neo-Luxury Dark Finance — inspirado em interfaces de bancos digitais premium e clubes exclusivos, com toques de cultura jovem (streetwear meets Wall Street).

**Core Principles:**
1. Contraste extremo: fundo quase preto com explosões de dourado e verde neon
2. Tipografia agressiva: títulos enormes, peso máximo, letras cortando a tela
3. Revelação progressiva: cada seção "destrava" como um cofre sendo aberto
4. Tensão visual: elementos que parecem estar "prestes a explodir" de energia

**Color Philosophy:**
- `#0A0A0A` — preto grafite profundo (fundo principal)
- `#1A1A1A` / `#222222` — grafite médio (cards, seções alternadas)
- `#D4AF37` / `#FFD700` — dourado rico (títulos principais, bordas de destaque)
- `#39FF14` — verde fluorescente/neon (CTAs, highlights, números, badges)
- `#FFFFFF` — branco puro (texto de corpo, contraste)
Intenção emocional: poder, exclusividade, urgência, inteligência

**Layout Paradigm:**
- Scroll vertical com seções em fullscreen (100vh cada)
- Elementos assimétricos: textos alinhados à esquerda com imagens cortando à direita
- "Ticker" financeiro animado no topo (como bolsa de valores)
- Cards inclinados (-2deg a 2deg) para dinamismo
- Linhas douradas diagonais como separadores de seção

**Signature Elements:**
1. Partículas de moedas/cifrões flutuando no hero (canvas animado)
2. Efeito "glitch" dourado no título principal ao carregar
3. Bordas com gradiente dourado → verde neon nos cards de destaque

**Interaction Philosophy:**
- Hover em cards: elevação com sombra verde neon
- Scroll-triggered animations: elementos entram da esquerda/direita com fade
- Cursor personalizado com rastro dourado
- Botão CTA com pulso verde neon constante

**Animation:**
- Hero: título com efeito typewriter + glitch dourado
- Seções: fade-in + slide-up ao entrar no viewport (Intersection Observer)
- Cards de equipes: flip 3D ao hover
- Contador regressivo: números com efeito de "slot machine" girando
- Partículas de moedas no background do hero (canvas)
- Linha do tempo: desenho progressivo das linhas ao scroll

**Typography System:**
- Display: "Bebas Neue" — bold, condensado, impactante (títulos H1/H2)
- Body: "DM Sans" — moderno, legível, tech (textos corridos)
- Accent: "Space Mono" — monospace para números, datas, códigos (estilo terminal financeiro)
- Hierarquia: H1 = 80-120px, H2 = 48-64px, body = 16-18px
</idea>
<text>Neo-Luxury Dark Finance com partículas animadas, efeito glitch dourado e scroll cinematográfico</text>
<probability>0.08</probability>
</response>

<response>
<idea>
**Design Movement:** Cyberpunk Financial Underground — estética de hacker financeiro, onde o conhecimento é poder e o dinheiro é código.

**Core Principles:**
1. Interface como terminal: elementos que parecem dados em tempo real
2. Verde neon como cor dominante sobre preto absoluto
3. Dourado como "recompensa" — aparece apenas em momentos de destaque máximo
4. Sensação de acesso a informação privilegiada

**Color Philosophy:**
- `#050505` — preto absoluto
- `#39FF14` — verde matrix/neon (cor dominante de texto e UI)
- `#FFD700` — dourado (apenas para títulos e momentos épicos)
- `#1A2F1A` — verde escuro (backgrounds de cards)
Intenção: você está acessando algo que poucos sabem

**Layout Paradigm:**
- Grid assimétrico com linhas de código decorativas
- Efeito "matrix rain" no background
- Texto que "digita" ao aparecer na tela
- Bordas com scanlines sutis

**Signature Elements:**
1. Matrix rain verde no hero
2. Texto que aparece como se estivesse sendo digitado em tempo real
3. "Loading bars" douradas entre seções

**Interaction Philosophy:**
- Hover: efeito de "scan" passando pelo elemento
- Clique: flash verde neon
- Scroll: elementos aparecem como se fossem carregados

**Animation:**
- Matrix rain no background (canvas)
- Typewriter em todos os títulos
- Scanlines piscando sutilmente
- Contadores numéricos que "hackam" o número final

**Typography System:**
- Display: "Share Tech Mono" — monospace agressivo
- Body: "Rajdhani" — sci-fi mas legível
- Accent: "Orbitron" — para números e datas
</idea>
<text>Cyberpunk Financial Underground com matrix rain e estética de terminal hacker</text>
<probability>0.06</probability>
</response>

<response>
<idea>
**Design Movement:** Luxury Streetwear Finance — onde a cultura jovem encontra o mercado financeiro. Pense Supreme meets Goldman Sachs.

**Core Principles:**
1. Bold e direto: mensagens curtas e impactantes como drops de streetwear
2. Textura e profundidade: gradientes metálicos, efeito de folha dourada
3. Energia de evento: como um show ou lançamento de produto
4. Hierarquia visual clara: o que importa grita, o resto sussurra

**Color Philosophy:**
- `#111111` — preto grafite (fundo)
- `#C9A84C` / `#F5D060` — dourado metálico (gradiente)
- `#ADFF2F` — verde fluorescente (energia, urgência)
- `#F0F0F0` — quase branco (texto corpo)
Intenção: você está sendo convidado para algo especial

**Layout Paradigm:**
- Seções em fullscreen com transições de slide
- Tipografia gigante que "vaza" para fora da tela
- Elementos sobrepostos com z-index criativo
- Faixas diagonais douradas como divisores

**Signature Elements:**
1. Título principal com gradiente dourado metálico animado
2. Badge "EXCLUSIVO" / "VIP" em verde neon piscando
3. Faixas de ticker financeiro animado

**Interaction Philosophy:**
- Scroll suave com efeito parallax
- Cards com brilho dourado ao hover
- CTA com animação de "unlock"

**Animation:**
- Parallax no hero
- Gradiente dourado animado nos títulos
- Entrada de elementos com spring physics
- Contador com efeito de roleta

**Typography System:**
- Display: "Anton" — ultra bold, impacto máximo
- Body: "Outfit" — moderno e jovem
- Accent: "Courier Prime" — para dados e números
</idea>
<text>Luxury Streetwear Finance com gradientes metálicos dourados e energia de evento exclusivo</text>
<probability>0.09</probability>
</response>

---

## Design Escolhido: Neo-Luxury Dark Finance (Resposta 1)

Combinação de impacto visual máximo com legibilidade, usando Bebas Neue para os títulos agressivos, DM Sans para o corpo e Space Mono para dados financeiros. Partículas animadas no hero, scroll cinematográfico e efeito glitch dourado no título principal.
