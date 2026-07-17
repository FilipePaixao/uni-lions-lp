# Linguagem Visual Uni Lions

## Diagnóstico dos ativos

### Ativo 1: Ambidestria Executiva

- Proporção 4:3.
- Fundo profundo azul-marinho.
- Headline branca e azul.
- Composição assimétrica.
- Executivo em traje formal.
- Blocos modulares como metáfora de construção.

Use como referência para:

- contraste;
- escala tipográfica;
- assimetria;
- azul elétrico;
- sensação de decisão.

Não use como única linguagem porque:

- a metáfora é genérica;
- a imagem pode parecer render ou banco de imagem;
- a marca premium precisa de evidência real.

### Ativo 2: Capa Uni Lions

- Proporção 4:1.
- Centro branco.
- Gradiente azul nas bordas.
- Logotipo geométrico preto.
- Símbolo central azul.
- Circuitos laterais.

Use circuitos como detalhe proprietário em:

- divisores;
- background com 2–5% de opacidade;
- ícones de processo;
- microanimações;
- moldura de seções estratégicas.

Não usar circuitos para dominar o hero.

## Tokens

```css
:root {
  --ul-brand-blue-600: #075bff;
  --ul-brand-blue-700: #0049d8;
  --ul-brand-blue-900: #001b3d;
  --ul-navy-950: #00172f;
  --ul-ink-900: #11131a;
  --ul-slate-600: #596579;
  --ul-mist-50: #f4f7fb;
  --ul-line-200: #dce4f0;
  --ul-white: #ffffff;

  --ul-container: 76rem;
  --ul-content-narrow: 46rem;

  --ul-radius-sm: 0.5rem;
  --ul-radius-md: 0.875rem;
  --ul-radius-lg: 1.25rem;

  --ul-shadow-soft: 0 16px 50px rgb(0 23 47 / 0.10);
}
```

Os valores são inferidos. Validar com o manual oficial.

## Distribuição

- Superfície clara: predominante.
- Azul-marinho: seções de autoridade, hero e fechamento.
- Azul elétrico: ação e ênfase.
- Preto: texto e logotipo.
- Cinza azulado: suporte e divisores.

## Tipografia

### Escala desktop sugerida

- Hero: `clamp(3.25rem, 6vw, 6.5rem)`
- H2: `clamp(2.25rem, 4vw, 4.25rem)`
- H3: `clamp(1.35rem, 2vw, 2rem)`
- Lead: `clamp(1.125rem, 1.5vw, 1.375rem)`
- Body: `1rem–1.125rem`
- Eyebrow: `0.75rem–0.875rem`, peso 600, tracking controlado

### Regras

- Não usar caixa alta em parágrafos.
- Não usar peso 800 em todos os textos.
- Comprimento de linha confortável.
- Headline forte, corpo simples.
- Números e datas com alinhamento consistente.

## Grid

- 12 colunas no desktop.
- Max-width entre 1200 e 1280 px.
- Gutter móvel entre 20 e 24 px.
- Section padding desktop entre 96 e 144 px.
- Section padding mobile entre 64 e 88 px.

## Composição

### Hero

- Copy ocupa de 5 a 7 colunas.
- Imagem ocupa de 5 a 7 colunas.
- CTA próximo ao argumento, não isolado no fim.
- Prova factual logo abaixo.
- Evitar texto sobre rosto ou área visual complexa.

### Seções claras

- Fundo branco ou `mist-50`.
- Cards apenas quando há unidades semânticas.
- Usar listas, linhas e hierarquia antes de cardificar.

### Seções escuras

- Texto branco.
- Azul elétrico em até 15% da área visual.
- Imagens reais com tratamento frio e contraste.
- Não aplicar glow intenso.

## Imagens

Prioridade:

1. Sala real.
2. Encontros.
3. Mentoria.
4. Banca.
5. Retratos editoriais.
6. Detalhes do espaço.
7. Peças conceituais de campanha.

Requisitos:

- Direitos de uso confirmados.
- Alt text definido pelo propósito.
- Art direction para mobile.
- Dimensões reservadas.
- Compressão e formato moderno.
- Não falsificar presença, tamanho de turma ou docentes.

## Motion

Permitido:

- fade/translate curto;
- underline;
- progressão de linha;
- contagem apenas quando baseada em dado real;
- pequenas respostas a hover/focus.

Evitar:

- paralaxe forte;
- rotação 3D;
- partículas;
- animação infinita;
- entrada de cada palavra;
- scroll hijacking.

Duração típica: 160–320 ms.

## Assinatura visual própria

A metáfora das duas mãos pode virar sistema:

- duas colunas complementares;
- linhas que convergem;
- blocos H1/H2/H3;
- dualidade escuro/claro;
- indicadores de defesa e construção;
- grafismo bilateral, sem usar mãos literais em todas as seções.
