# INGEST — como a skill do Pedro Englert cresce com o tempo

Esta skill consome **referências curadas** (`references/*.md`), não material bruto.
Este arquivo é o playbook pra transformar fonte nova em inteligência — sem inchar contexto.

## Duas camadas

1. **`sources/` (bruto)** — transcrições de aulas, palestras, entrevistas do Pedro. **Nada aqui é
   lido em conversa normal.**
2. **`references/*.md` (curado)** — conciso, load-on-demand. É daqui que o roteador lê.

A skill só melhora quando alguém **destila** (1) → (2). Esse alguém é o Claude, sob pedido.

## Onde vive o bruto desta skill

- **`sources/transcricoes-aulas/`** — as 3 aulas do Board Program (canal Lions Dev) usadas na
  criação da skill em 2026-07-06 (transcrições `.txt` limpas).
- **Google Drive** — pasta `1a3j6eAz5dm0670IuZTMm-6GBpySOPuh7`: os 3 vídeos `.mp4` + `transcricoes/`
  (`.txt` + `.vtt`). Aulas futuras do programa entram aqui.
- **Wiki LLM** — `~/wiki/20-wiki/`: 21 conceitos Zettelkasten + MOC `maps/curso-pedro-englert-lions-dev-moc.md`
  + entidades `pedro-englert`, `startse`.

## Gatilhos de ingestão

- Rafael traz aula/palestra/entrevista nova do Pedro ("saiu o módulo X, ingere na skill");
- joga arquivo em `sources/` e diz "atualiza a skill do Pedro";
- no meio da conversa: "salva isso na skill do Pedro".

## Passo a passo

1. **Localize a fonte.** Vídeo do YouTube → baixe a legenda automática (`yt-dlp --write-auto-subs
   --sub-langs pt-orig --skip-download`) e limpe o VTT em texto corrido. Guarde o `.txt` em
   `sources/transcricoes-aulas/`.
2. **Extraia só o durável:** modelos mentais nomeados (frames), definições e critérios, as frases
   canônicas verbatim, os cases (StartSe, Nubank, Spotify, Netflix, Gerdau...), as autoridades com
   procedência (Diamandis, Steve Blank, John Doerr, Son, Escobar), e as recusas explícitas.
   **Ignore** saudação, repetição e "muletas" da fala.
3. **Cuidado com a transcrição automática:** nomes chegam corrompidos ("Pedro Engler/Engraer" =
   Englert, "Starts" = StartSe, "Peter Mendes" = Peter Diamandis, "John Doer" = John Doerr, "ar/
   Yokiar" = OKR, "Macios son" = Masayoshi Son, "Martim Escobar" ok). Corrija por contexto.
4. **Decida o destino.** Bate com referência existente → **atualize** (adicione seção). Domínio novo
   (ex.: módulo de incentivos/valuation do programa, sucessão, governança de conselho) → **crie**
   `references/NN-<slug>.md` e **adicione a linha na tabela do `SKILL.md`** com o gatilho.
5. **Mantenha enxuto:** ~30–120 linhas por referência. Se passar de ~150, quebre com ponteiros.
6. **Registre procedência:** rodapé `<!-- fontes: aula/palestra, ingerido em AAAA-MM-DD -->`.
7. **Não duplique:** `grep` antes de criar; se o conceito existe, refine.

## Fontes ainda NÃO ingeridas (backlog conhecido)

- Demais módulos do **Board Program** da StartSe (o Pedro cita "um módulo que aborda só incentivos de
  curto/longo prazo" — ainda não coberto).
- Palestras e entrevistas públicas do Pedro (Agenda Bahia, podcasts, YouTube StartSe).

## Princípio

A skill não melhora por acumular arquivos — melhora por **destilar** arquivos em regras
que o roteador aplica. Bruto entra em `sources/`; inteligência sai em `references/`.
