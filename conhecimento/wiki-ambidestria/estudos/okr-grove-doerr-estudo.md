---
title: "OKR: de Grove a Doerr (e a Lei de Goodhart)"
type: study
area: work
status: done
tags: [estudo, pesquisa, deep-research, okr, metas, gestao, goodhart, startse]
sources: ["[[board-program-startse-pedro-englert]]"]
created: 2026-07-06
updated: 2026-07-06
---

No Board Program, o [[pedro-englert]] resume [[okr-vs-kpi]] numa frase: "KPI pede os braços, OKR convida a mente". Ele cita [[john-doerr]] levando OKR ao Google e conta o case da empresa que, num negócio novo, bateu todas as metas de processo em 12 meses sem que o resultado viesse. Este estudo desce à fundação: OKR é a terceira geração de uma linhagem de 70 anos que começa no MBO de [[peter-drucker]], passa pela reengenharia de [[andy-grove]] na Intel e chega à sistematização de Doerr. E o case do Pedro tem nome e sobrenome na literatura: é a [[lei-de-goodhart]] em ação.

## A teoria original

**Geração 1: MBO (Drucker, 1954).** Em "The Practice of Management", Drucker propõe a [[gestao-por-objetivos]] como alternativa participativa ao comando e controle (com raízes em Mary Parker Follett, "The Giving of Orders", 1926). Gestor e subordinado definem objetivos em conjunto, alinhados aos da organização; o subordinado escreve a "carta do gerente" propondo os próprios objetivos; o princípio central é o autocontrole: quem executa monitora o próprio progresso. Na prática corporativa dos anos 60-70, o MBO degenerou em ritual anual, privado e atrelado a bônus.

**Geração 2: iMBO (Grove, Intel, início dos anos 1970).** [[andy-grove]] reengenharia o MBO respondendo duas perguntas operacionais: (1) aonde eu quero chegar? (o Objetivo, qualitativo e direcional); (2) como vou marcar o passo pra saber se estou chegando lá? (os Key Results, quantitativos, com prazo, verificáveis sim/não). As correções de Grove sobre o MBO clássico: cadência trimestral ou mensal em vez de anual; metas públicas em vez de privadas; desacopladas de remuneração; stretch (acertar ~50% já é bom); poucos objetivos por vez. Grove também pareava métricas de quantidade com métricas de qualidade pra evitar gaming. Documentado em "High Output Management" (1983). Case interno: Operation Crush (1980), o OKR corporativo que reorientou a Intel contra o Motorola 68000 e culminou com o 8088 dentro do IBM PC.

**Geração 3: OKR moderno (Doerr, Google, 1999).** [[john-doerr]] aprendeu o sistema num curso do próprio Grove na Intel (entrou em 1974, a verificar: algumas fontes dizem 1975). No outono de 1999, recém-investidor via Kleiner Perkins (US$11,8 milhões por ~12% do Google, o maior cheque dele até então), apresentou OKRs aos 30-40 funcionários da empresa, com Larry Page e Sergey Brin presentes. Em "Measure What Matters" (2018) ele sistematiza: fórmula "Eu vou [Objetivo] medido por [Key Results]"; 3 a 5 KRs por objetivo, específicos, com prazo, mensuráveis ("não é key result se não tem número", frase que Doerr atribui a Marissa Mayer); dois tipos de OKR: committed (nota esperada 1,0, falhar exige post-mortem) e aspirational (média esperada ~0,7, falha parcial é desenho do sistema); notas de 0,0 a 1,0 ao fim do ciclo.

**Os 4 superpoderes (estrutura do livro):** Focus (OKR força escolher o que NÃO fazer), Align (transparência total, alinhamento lateral em vez de cascata pura, ~50% dos OKRs nascendo bottom-up no Google), Track (check-ins periódicos, OKR pode ser alterado ou morto no meio do ciclo) e Stretch (metas além do confortável, com liberdade de falhar, fundamentado na goal-setting theory de Edwin Locke: metas difíceis e específicas elevam performance mais que metas fáceis ou vagas).

**A camada humana: CFRs.** [[cfr-conversas-feedback-reconhecimento]] (Conversations, Feedback, Recognition) é a gestão contínua de desempenho que acompanha os OKRs e substitui a avaliação anual. Sem CFR, OKR vira burocracia de planilha; com CFR, dá pra desacoplar meta de remuneração sem perder accountability.

**O contrapeso: Lei de Goodhart.** Charles Goodhart (1975, contexto de política monetária): "qualquer regularidade estatística observada tende a colapsar quando se coloca pressão sobre ela para fins de controle". A formulação famosa, "quando uma medida vira meta, deixa de ser boa medida", é de Marilyn Strathern (1997), não do próprio Goodhart. A mecânica: toda métrica é proxy do que importa; quando vira alvo com consequências, os agentes otimizam a proxy e rompem a correlação dela com o objetivo real. Manheim e Garrabrant (2018) mapearam 4 modos de falha: regressional, extremal, causal e adversarial. O case do Pedro é o modo **causal**: as metas de processo eram proxies sem relação causal validada com o outcome num negócio novo, então otimizá-las não moveu o resultado. É exatamente o risco de usar lógica de KPI (processo conhecido) em território de OKR (caminho desconhecido).

## Evidências e dados

- Drucker publica o MBO em "The Practice of Management" (1954); Grove implanta o iMBO na Intel no início dos anos 1970 (fontes citam ~1971, sem fonte primária datando; a verificar) e documenta em "High Output Management" (1983) [whatmatters.com].
- Doerr apresenta OKRs ao Google no outono de 1999, empresa com 30-40 pessoas (fontes divergem entre 30 e 40), logo após investir US$11,8 milhões por ~12% [Measure What Matters, 2018].
- Google usa escala 0,0-1,0 por KR; sweet spot declarado é 0,6-0,7: abaixo, a empresa entrega pouco; acima, as metas foram tímidas [Google re:Work].
- re:Work afirma textualmente que "OKRs não são sinônimo de avaliação de desempenho": desacoplados de salário e promoção, justamente pra viabilizar stretch sem punir a falha; 1,0 constante indica sandbagging [Google re:Work].
- Sob Grove como CEO (1987-1998), a receita da Intel foi de US$1,9 bilhão a US$26 bilhões [whatmatters.com].
- Wells Fargo (2016-17): metas agressivas de cross-selling ("Eight is great") levaram funcionários a abrir ~3,5 milhões de contas não autorizadas (número revisado ao longo do tempo, de 2,1M pra 3,5M); multa inicial de US$185 milhões. Case padrão de meta + bônus = fraude, Goodhart no modo adversarial.
- Fábricas soviéticas: medidas por peso, produziam poucos pregos enormes; medidas por quantidade, milhares de pregos minúsculos. Exemplo canônico de gaming de quota.
- Campbell's law (Donald T. Campbell, 1969/1976) antecede a popularização de Goodhart: quanto mais um indicador quantitativo é usado pra decisão, mais sujeito a pressões de corrupção ele fica [Rodamar, Significance, 2018].
- O "efeito cobra" de Délhi não tem documentação primária: é parábola cunhada por Horst Siebert (2001). O caso documentado análogo é a caça a ratos de Hanói (1902).
- Spotify abandonou OKRs individuais (~2013-2016): "consumiam tempo e energia sem agregar valor" [Spotify HR Blog, 2016].

## Críticas e limites

- **Deming (Out of the Crisis, 1982, ponto 11b):** eliminar o MBO, a gestão por números e as metas numéricas. Meta acima da capacidade do sistema não melhora o sistema, só gera frustração ou fraude; a variação vem do sistema (responsabilidade da gestão), não do esforço individual. É a crítica-mãe de tudo que depois virou Goodhart aplicado a metas.
- **Spotify (2016):** o ciclo de definir, alinhar e iterar OKRs individuais era mais lento que o ritmo de mudança da empresa; substituíram por prioridades de empresa + contexto ("o porquê importa mais que o como").
- **Radhika Dutt (Radical Product Thinking):** OKR funciona mal pra problemas complexos onde não há resposta conhecida e a performance depende de estratégia, não de esforço repetitivo. E quando o Google atrelou OKRs de uso de produto a remuneração, as pessoas jogaram o sistema: o próprio criador do padrão tropeçou em Goodhart ao quebrar a regra do desacoplamento.
- **Ravi Mehta (ex-CPO do Tinder):** na prática o OKR degenera em KRs sandbagged ou KRs de fantasia, e o par O+KR comprime demais o contexto estratégico. Propõe NCTs (Narratives, Commitments, Tasks) como correção.
- **Felipe Castro (consultor brasileiro):** "OKRs nunca cascateiam, OKRs se alinham". Cascata rígida top-down é waterfall disfarçado: cria silos verticais, mata autonomia e leva ciclos inteiros pra fechar. E o anti-pattern task list: se você completou todos os KRs e nada melhorou, eram tarefas, não key results.
- **John Cutler:** em empresas grandes o OKR vira "zombie practice" e teatro de metas; antes de adotar, a empresa precisa saber o que é sua estratégia, senão o OKR só formaliza a confusão.
- **Debate "OKRs estão mortos" (2023-24):** Sifted ("RIP OKRs") e defensores de dashboards contínuos/North Star argumentam que ciclos trimestrais são lentos demais. Do outro lado, Christina Wodtke ("Radical Focus") sustenta que o problema é implementação sem cadência e sem foco, não o framework.
- **Atribuição histórica (Rodamar, 2018):** a "lei de Goodhart" popular é uma colagem: a frase famosa é de Strathern (1997, via Keith Hoskin 1996) e Campbell articulou o fenômeno antes. O Pedro (como quase todo mundo) cita como "Goodhart"; vale a nota de rodapé.

## Conexões

- A frase do Pedro ("KPI pede os braços, OKR convida a mente") traduz a distinção consolidada whatmatters/Perdoo: KPI monitora a saúde de um processo conhecido (lag, dashboard, executar o já sabido = braços); OKR é aposta de mudança em caminho desconhecido (exige descobrir o como = mente). Ecoa Grove: o sistema foi desenhado pro trabalhador do conhecimento se autodirigir, avaliado por output. Ver [[okr-vs-kpi]] e [[gestao-por-contexto]].
- O case do Pedro é [[lei-de-goodhart]] no modo causal + o anti-pattern task list do Felipe Castro. Correção prática: KRs de outcome (receita, retenção, conversão) + pareamento quantidade/qualidade como Grove fazia.
- Genealogia como um mesmo sistema em 3 iterações, cada uma corrigindo o gaming da anterior: anual→trimestral, privado→público, atrelado a bônus→desacoplado. Ver [[gestao-por-objetivos]].
- Ponte com [[peter-drucker]]: as 5 perguntas do Drucker são o passo anterior ao O do OKR; Doerr repete Drucker quando diz que o erro número 1 é fazer OKR sem estratégia clara.
- Ponte com [[giovanni-salvador]] (RevOps/bowtie): o bowtie parametrizado fornece os KPIs de saúde do funil; os OKRs do trimestre são as apostas de mudança sobre os gargalos que a MBR identificou. Regra que fecha o loop: KPI fora da faixa gera um OKR.
- Pro board (contexto do curso): comitê de remuneração que atrela bônus executivo a métrica única viola a lição mais dura do Google. Wells Fargo é o case de governança da Lei de Goodhart. Regra derivada pra conselheiro: métrica que vira gatilho de bônus precisa de métrica-par de qualidade e auditoria do processo. Ver [[incentivos-perversos-efeito-cobra]] e [[teoria-da-agencia]].
- Stretch exige [[seguranca-para-experimentar]] e [[transparencia-gera-engajamento]]; sem elas, stretch + cobrança = sandbagging ou fraude.
- [[autonomia-exige-alinhamento]] é o mecanismo do superpoder Align: metas públicas alinham sem cascatear.

## Referências

- John Doerr, Measure What Matters, 2018, [link](https://www.whatmatters.com/the-book)
- Andrew S. Grove, High Output Management, 1983, [link](https://en.wikipedia.org/wiki/High_Output_Management)
- Peter F. Drucker, The Practice of Management, 1954, [link](https://en.wikipedia.org/wiki/Management_by_objectives)
- What Matters, OKRs History: Andy Grove and Intel, [link](https://www.whatmatters.com/articles/the-origin-story)
- Google re:Work, Guide: Set goals with OKRs, [link](https://rework.withgoogle.com/en/guides/set-goals-with-okrs)
- Charles Goodhart, Problems of Monetary Management: The UK Experience, 1975, [link](https://link.springer.com/chapter/10.1007/978-1-349-17295-5_4)
- Marilyn Strathern, "Improving ratings": audit in the British University system, 1997, [link](https://www.cambridge.org/core/journals/european-review/article/improving-ratings-audit-in-the-british-university-system/FC2EE640C0C44E3DB87C29FB666E9AAB)
- David Manheim e Scott Garrabrant, Categorizing Variants of Goodhart's Law, 2018, [link](https://arxiv.org/abs/1803.04585)
- Jeffrey Rodamar, There ought to be a law! Campbell versus Goodhart, Significance, 2018, [link](https://maritimesafetyinnovationlab.org/wp-content/uploads/2023/05/Significance-2018-Rodamar-There-ought-to-be-a-law-Campbell-versus-Goodhart.pdf)
- John Doerr, Why the secret to success is setting the right goals, TED, 2018, [link](https://www.ted.com/talks/john_doerr_why_the_secret_to_success_is_setting_the_right_goals)
- Spotify HR Blog, Why individual OKRs don't work for us, 2016, [link](https://hrblog.spotify.com/2016/08/15/our-beliefs)
- Ravi Mehta, An alternative to OKRs (NCTs), 2021, [link](https://www.ravi-mehta.com/an-alternative-to-okrs-how-to-set-and-achieve-ambitious-goals/)
- Felipe Castro, Why you should not cascade your goals, 2017, [link](https://medium.com/the-alignment-shop/why-you-should-not-cascade-your-goals-c5f12020976a)
- Radhika Dutt, Why OKRs Fail?, 2023, [link](https://www.radicalproduct.com/blog/okrs-criticism)
- W. Edwards Deming, Out of the Crisis, 1982, [link](https://mitpress.mit.edu/9780262535946/out-of-the-crisis/)
- Christina Wodtke, Radical Focus, 2016 (2a ed. 2021), [link](https://cwodtke.com/)
- Sifted (Financial Times), RIP OKRs: How we've rethought goal-setting, 2023, [link](https://sifted.eu/articles/rip-okr-goal-setting)
- What Matters, KPIs vs OKRs: Differences and Examples, [link](https://www.whatmatters.com/resources/difference-between-okr-kpi)

## Como aplicar

- **Growai (MRR R$51k → R$100k até dez/2026):** a meta de MRR é um committed OKR clássico. Os KRs têm que ser outcome (MRR novo, churn, NRR, conversão de funil), nunca atividade (posts publicados, calls feitas, automações entregues). Medir a operação por atividade é o exato gaming de processo do case do Pedro.
- **Teste do task list antes de fechar cada ciclo:** "se eu completar todos esses KRs e nada melhorar no negócio, eles eram tarefas?" Se sim, reescrever pelo resultado da atividade.
- **Checklist Goodhart antes de promover métrica a meta:** qual modo pode falhar aqui (regressional, extremal, causal, adversarial)? A relação métrica→resultado foi validada ou é assumida? Existe métrica-par de qualidade (padrão Grove)?
- **Desacoplar de bônus, sempre.** Se um bônus de cliente ou de time precisar de métrica, exigir métrica-par de qualidade e auditoria do processo, não só do número. Lição pro papel de conselheiro: é o comitê de remuneração que costuma quebrar essa regra.
- **Cadência mínima:** check-in quinzenal + nota 0,0-1,0 no fim do trimestre; mirar 0,6-0,7 nos aspiracionais. 1,0 constante = sandbagging, investigar.
- **Em motion nova de GTM (ponte com o bowtie do Giovanni):** KPI monitora o funil que já funciona; OKR carrega a aposta de mudança. KPI fora da faixa é o gatilho natural pra criar um OKR.
