# Padrões de Frontend

## Premissa

Restaurar a experiência sem acoplar a entrega a uma migração de framework.

O arquivo-base informado no contexto é `src/pages/LandingPage.tsx`, portanto a estrutura assume React + TypeScript, mas deve se adaptar ao repositório real.

## Arquitetura recomendada

```text
src/
├── pages/
│   └── LandingPage.tsx
├── components/
│   ├── landing/
│   │   ├── HeroSection.tsx
│   │   ├── ProofBar.tsx
│   │   ├── ContextSection.tsx
│   │   ├── TwoHandsSection.tsx
│   │   ├── OutcomesSection.tsx
│   │   ├── DeliverablesSection.tsx
│   │   ├── JourneySection.tsx
│   │   ├── AudienceSection.tsx
│   │   ├── RoomSection.tsx
│   │   ├── FacultySection.tsx
│   │   ├── ProofSection.tsx
│   │   ├── InvestmentSection.tsx
│   │   ├── ApplicationSteps.tsx
│   │   ├── FaqSection.tsx
│   │   └── FinalCtaSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Container.tsx
│       ├── Section.tsx
│       ├── Eyebrow.tsx
│       └── ResponsiveImage.tsx
├── content/
│   └── landing.ts
├── analytics/
│   ├── events.ts
│   └── track.ts
├── styles/
│   ├── tokens.css
│   ├── globals.css
│   └── landing.css
└── tests/
```

Não criar esta árvore cegamente. Primeiro mapear a convenção existente.

## Componentes

- Uma seção deve ter propósito editorial claro.
- Primitivos devem ser verdadeiramente reutilizáveis.
- Não criar abstração para um único detalhe sem perspectiva de reuso.
- Separar dados factuais da marca quando isso facilita revisão.
- Evitar componente monolítico com centenas de linhas.
- Evitar fragmentação em microcomponentes sem valor.

## TypeScript

- `strict: true`.
- Sem `any`.
- Tipos de conteúdo explícitos.
- Eventos de analytics com união discriminada.
- Props opcionais apenas quando há comportamento definido.
- Validar dados externos em fronteiras.

## CSS

- Tokens semânticos.
- Mobile-first.
- `clamp()` para tipografia e espaçamento quando útil.
- Grid e flexbox com comportamento intrínseco.
- Evitar `!important`.
- Evitar seletores frágeis.
- Reservar dimensões de mídia.
- Respeitar reduced motion.
- Não usar altura fixa em conteúdo textual.

## Imagens

- Usar `picture`/mecanismo equivalente para art direction.
- Definir `width` e `height`.
- `loading="lazy"` abaixo da dobra.
- Hero não deve ser lazy se for LCP.
- Usar `fetchpriority` somente quando suportado e necessário.
- Alt deve ser editorial, não lista de palavras-chave.
- Imagem decorativa usa alt vazio.

## Formulários e rotas

- Não duplicar lógica da aplicação na landing.
- CTA navega para rota canônica.
- Preservar query params de campanha quando necessário.
- Nunca colocar dados sensíveis em URL.
- Estados de erro precisam de mensagem e recuperação.

## Dependências

Adicionar somente quando:

- resolve problema real;
- já não existe equivalente no projeto;
- custo de bundle é aceitável;
- manutenção é conhecida;
- acessibilidade foi avaliada.

## Testes

### Unitário

- Renderização condicional.
- Conteúdo crítico.
- Analytics adapter.
- Helpers.

### Integração

- CTA.
- FAQ.
- Navegação por âncora.
- Form errors quando aplicável.

### E2E

- Landing → aplicação.
- Diagnostic → aplicação.
- Query attribution.
- Mobile menu.
- Keyboard journey.

## Segurança

- Não renderizar HTML de CMS sem sanitização.
- Não expor chaves.
- Não registrar PII.
- Links externos com comportamento seguro.
- Dependências e scripts terceiros revisados.
