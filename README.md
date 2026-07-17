# Uni Lions Cursor Kit

Kit de contexto, governança e execução para restaurar a landing page da **Uni Lions** como uma universidade corporativa de alto padrão, com o programa **Ambidestria Executiva** como oferta principal.

O pacote foi estruturado para uso direto no Cursor com:

- `AGENTS.md` como contrato portátil do repositório.
- `.cursor/rules/*.mdc` para regras persistentes e escopadas.
- `.cursor/agents/*.md` para subagentes especializados.
- `.cursor/skills/*/SKILL.md` para fluxos reutilizáveis.
- `.cursor/commands/*.md` para comandos operacionais.
- `knowledge/` como base de conhecimento canônica.
- `docs/` como roteiro de implantação e contratos de handoff.
- `assets/brand-palette.png` como prévia visual dos tokens propostos.

> A paleta foi inferida das duas imagens fornecidas. Antes do lançamento, valide os hexadecimais contra o arquivo vetorial oficial da marca ou manual de identidade visual.

---

## 1. Objetivo do projeto

Restaurar a landing page sem transformar a Uni Lions em uma escola genérica de tecnologia ou em uma cópia visual da StartSe.

A página precisa comunicar simultaneamente:

1. **Autoridade institucional:** uma casa de formação executiva com curadoria, método e ambiente premium.
2. **Clareza comercial:** o visitante entende em poucos segundos o que é, para quem é, como funciona e como aplicar.
3. **Diferenciação conceitual:** ambidestria é sempre explicada pelas duas mãos.
4. **Confiança:** linguagem sem hype, sem promessas absolutas e sem escassez artificial.
5. **Conversão qualificada:** o objetivo é gerar aplicações aderentes, não cliques indiscriminados.

---

## 2. Diagnóstico visual das imagens fornecidas

### 2.1 Peça “Ambidestria Executiva”

- Dimensão analisada: **1448 × 1086 px**, proporção aproximada **4:3**.
- Estrutura: fundo azul-marinho, headline grande à esquerda, executivo e blocos modulares à direita.
- Forças:
  - Contraste alto e leitura imediata.
  - Boa associação entre construção, estratégia e execução.
  - Azul elétrico cria energia sem abandonar o universo corporativo.
- Riscos:
  - Executivo com blocos é uma metáfora visual bastante usada no mercado.
  - Aparência excessivamente publicitária ou “stock/IA” pode reduzir autenticidade para um público de alto nível.
  - A peça funciona melhor como campanha ou seção editorial do que como única linguagem visual do site.

**Direção recomendada:** preservar o contraste, a composição assimétrica e o azul elétrico, mas priorizar fotografias reais da sala, docentes, banca, encontros e bastidores. A experiência premium deve ser demonstrada por evidência real, não apenas por render corporativo.

### 2.2 Capa horizontal da marca

- Dimensão analisada: **1584 × 396 px**, proporção **4:1**.
- Estrutura: logotipo preto central, símbolo azul, linhas de circuito e gradiente azul nas bordas.
- Forças:
  - Logotipo geométrico, contemporâneo e tecnológico.
  - Centro branco transmite clareza e institucionalidade.
  - Circuitos funcionam como detalhe proprietário.
- Riscos:
  - Gradientes muito luminosos em todas as seções podem deixar o site genérico.
  - Circuitos em excesso aproximam a marca de uma escola técnica, quando a proposta é gestão executiva.

**Direção recomendada:** usar circuitos como microtextura, divisor, detalhe de hover ou grafismo de fundo com baixa opacidade. O protagonista da linguagem deve ser a decisão executiva, não a tecnologia.

---

## 3. Paleta proposta

Os valores abaixo são aproximações derivadas dos arquivos enviados.

| Token | Hex | Uso |
|---|---:|---|
| `brand-blue-600` | `#075BFF` | CTA primário, links, destaques |
| `brand-blue-700` | `#0049D8` | Hover, estados ativos, fundos mais fortes |
| `brand-blue-900` | `#001B3D` | Hero, rodapé, seções de autoridade |
| `navy-950` | `#00172F` | Fundo profundo e gradientes |
| `ink-900` | `#11131A` | Texto principal e logotipo textual |
| `slate-600` | `#596579` | Texto secundário |
| `mist-50` | `#F4F7FB` | Fundo alternado |
| `line-200` | `#DCE4F0` | Bordas e divisores |
| `white` | `#FFFFFF` | Superfícies e texto sobre azul |

O azul `#075BFF` possui contraste suficiente com branco para texto normal em cenários usuais. Mesmo assim, toda combinação deve ser validada automaticamente no produto.

### Regra de distribuição

- 60% superfícies claras e espaço negativo.
- 25% azul-marinho e preto institucional.
- 10% azul elétrico.
- 5% cores funcionais e estados.

Não usar arco-íris de cores por seção. O premium vem da contenção.

---

## 4. Direção de design

### Personalidade visual

- Executiva.
- Contemporânea.
- Sólida.
- Editorial.
- Tecnológica com contenção.
- Humana e baseada em evidência real.

### Evitar

- Neon em excesso.
- Glassmorphism indiscriminado.
- Gradientes chamativos em todos os blocos.
- Ícones 3D genéricos.
- Fotos de auditório lotado.
- Imagens de robôs, cérebros digitais ou mãos holográficas.
- Animações que atrasem a leitura.
- Layout de “curso online barato”.

### Tipografia sugerida

- Display: `Sora`, `Manrope` ou equivalente geométrica.
- Corpo e interface: `Inter` ou equivalente altamente legível.
- Fallback: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.

A implementação deve usar a fonte já licenciada ou adotada pelo projeto. Não adicionar dependência de fonte sem validar performance, licenciamento e consistência com o logotipo.

---

## 5. Arquitetura editorial recomendada da landing page

1. **Header mínimo**
   - Logo.
   - “Como funciona”.
   - “O que você leva”.
   - “Quem conduz”.
   - CTA “Aplicar para a turma”.

2. **Hero**
   - Eyebrow factual: programa executivo, São Paulo, 50h, turma única.
   - Promessa de decisão por contexto.
   - Texto curto.
   - CTA primário para aplicação.
   - CTA secundário para funcionamento.
   - Evidência visual real ou peça de campanha com tratamento editorial.

3. **Barra de prova**
   - 50 horas.
   - Híbrido / presencial em São Paulo.
   - Datas.
   - Entrada por aplicação.

4. **O cenário**
   - O mundo ficou mais rápido.
   - Gestão apenas por controle não é suficiente.

5. **As duas mãos**
   - Mão que defende.
   - Mão que constrói.
   - IA como instrumento dentro das duas.

6. **O que muda na prática**
   - Decidir por contexto.
   - Proteger o caixa.
   - Construir o próximo ciclo.
   - Tirar IA da adoção órfã.

7. **Entregáveis**
   - Mapa de maturidade.
   - Diagnóstico de gargalos.
   - Escritório de IA.
   - Eficiência operacional.
   - Stack curada.
   - 3 Horizontes.
   - Roadmap.
   - Plano Diretor.

8. **Jornada**
   - Assessment.
   - Encontros.
   - Mentorias.
   - Construção progressiva.
   - Banca.

9. **Para quem é / para quem não é**
   - Qualificação clara, sem hostilidade.

10. **A sala**
    - Ambiente, pares e curadoria.
    - Fotografias reais.
    - Limite físico como única escassez.

11. **Quem conduz**
    - Bios validadas.
    - Experiência operacional.
    - Sem nomes ainda não aprovados.

12. **Provas**
    - Depoimentos, casos e logos autorizados.
    - Nunca inventar números, empresas ou falas.

13. **Investimento**
    - Valor.
    - Condições.
    - Comparação contextual honesta.
    - O que está incluído.

14. **Como entrar**
    - Aplicação.
    - Diagnóstico.
    - Decisão bilateral.

15. **FAQ**
    - Objeções comerciais e operacionais.

16. **CTA final e rodapé**
    - Missão canônica.
    - LGPD.
    - Termos.
    - CTA único.

---

## 6. Benchmark StartSe: o que absorver e o que rejeitar

A referência deve ser usada como benchmark de arquitetura comercial, não como template para copiar.

### Absorver

- Promessa orientada a impacto executivo.
- Método e frameworks visíveis.
- Estrutura clara de programa.
- Autoridade de docentes, empresas e turmas quando comprovada.
- Networking apresentado como valor.
- CTA repetido nos pontos de decisão.
- FAQ comercial robusto.
- Investimento contextualizado.

### Rejeitar

- Linguagem de urgência incompatível com a Uni Lions.
- Garantias ou multiplicadores financeiros.
- Comparações agressivas não comprovadas.
- Excesso de selos, logos e números.
- Visual que transforme a página em infoproduto.
- Cópia literal de seção, frase, design ou framework proprietário.

### Diferenciação da Uni Lions

A Uni Lions deve parecer uma **sala de decisão**, não uma vitrine de cursos. O diferencial é a combinação de:

- Duas mãos.
- Decisão por contexto.
- Assessment.
- Mentoria operacional.
- Banca.
- Plano Diretor da própria empresa.
- Entrada por aplicação.

---

## 7. Como usar este kit

### Fluxo recomendado no Cursor

1. Abra o repositório.
2. Copie o conteúdo deste kit para a raiz.
3. Atualize `AGENTS.md` com os comandos reais do projeto.
4. Leia `knowledge/00-index.md`.
5. Execute o comando conceitual `audit-landing`.
6. Peça ao agente principal para usar o subagente `unilions-orchestrator`.
7. Aprove o plano antes da implementação.
8. Implemente por seção.
9. Rode validação visual com navegador em 360, 390, 768, 1024, 1440 e 1920 px.
10. Rode as personas e os quality gates.
11. Só publique depois da revisão humana de marca e conteúdo.

### Prompt inicial recomendado

```text
Use o agente unilions-orchestrator.

Objetivo: restaurar a landing page da Uni Lions sem migrar a stack e sem alterar rotas públicas.

Primeiro:
1. leia AGENTS.md;
2. leia knowledge/00-index.md e todos os arquivos canônicos indicados;
3. audite a implementação atual;
4. abra a aplicação no navegador;
5. gere um plano por fases, riscos e arquivos afetados.

Não implemente antes de eu aprovar o plano.
```

---

## 8. Política de `alwaysApply`

Somente `00-dispatcher.mdc` deve ser sempre aplicado.

Ele é curto e serve para:

- classificar a tarefa;
- indicar quais bases ler;
- selecionar o especialista;
- impor as proibições críticas;
- exigir validação.

As demais regras são escopadas por tipo de arquivo ou recuperadas sob demanda. Isso reduz conflito, ruído e consumo desnecessário de contexto.

---

## 9. Resultado esperado

Ao final da restauração, a landing page deve:

- parecer uma instituição executiva premium;
- explicar a tese das duas mãos sem exigir conhecimento prévio;
- apresentar o programa com precisão;
- transmitir confiança em menos de 30 segundos;
- permitir navegação completa por teclado;
- manter leitura confortável em mobile;
- carregar rapidamente;
- registrar eventos essenciais de conversão;
- direcionar todos os caminhos comerciais a `/aplicacao`;
- impedir que o agente invente dados, professores, depoimentos ou promessas.

---

## 10. Fontes de pesquisa

Consulte `knowledge/research/sources.md`.

As referências foram verificadas em julho de 2026 e devem ser revalidadas quando fatos comerciais, datas, preços ou funcionalidades do Cursor mudarem.
