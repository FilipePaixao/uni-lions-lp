# Taxonomia de Analytics

## Objetivo

Entender a qualidade do funil sem coletar dados desnecessários.

## Convenção

- `snake_case`.
- Nome estável.
- Payload pequeno.
- Localização do CTA explícita.
- Sem PII.

## Eventos propostos

### Página

```ts
landing_view
landing_section_view
```

Payload:

- `page_variant`
- `campaign_source`
- `campaign_medium`
- `campaign_name`
- `section_id` quando aplicável

### CTA

```ts
application_cta_click
diagnostic_cta_click
preview_cta_click
```

Payload:

- `cta_location`
- `cta_label`
- `destination`
- `page_variant`

Localizações canônicas:

- `header`
- `hero`
- `deliverables`
- `room`
- `investment`
- `application_steps`
- `final_cta`
- `mobile_sticky` somente se aprovado

### Conteúdo

```ts
faq_expand
faculty_profile_view
deliverable_detail_view
investment_section_view
```

Payload:

- identificador estável, nunca texto livre.

### Aplicação

Idealmente instrumentado na rota da aplicação:

```ts
application_start
application_step_view
application_validation_error
application_submit
application_submit_success
application_submit_failure
```

Payload permitido:

- `step_id`
- `error_code`
- `referrer_context`
- `campaign_*`

Não enviar:

- nome;
- e-mail;
- telefone;
- CPF;
- empresa digitada;
- faturamento exato;
- texto aberto;
- diagnóstico sensível.

### Diagnóstico

```ts
diagnostic_start
diagnostic_step_view
diagnostic_complete
diagnostic_to_application_click
```

## Dedupe

- Eventos de click devem ocorrer no handler da ação.
- Eventos de view devem usar observer ou mecanismo estável.
- Evitar emitir em cada render.
- Em desenvolvimento, logar event name e payload sanitizado.

## Perguntas de negócio

- Qual seção gera mais aplicações qualificadas?
- Quem passa pelo diagnóstico conclui mais aplicações?
- Quais origens geram calls realizadas?
- Em qual etapa há maior abandono?
- O investimento visível melhora a qualificação?
- Mobile converte menos por fricção ou perfil?

## Privacidade

- Respeitar consentimento.
- Documentar fornecedor.
- Definir retenção.
- Garantir exclusão quando aplicável.
- Não usar fingerprinting invasivo.
