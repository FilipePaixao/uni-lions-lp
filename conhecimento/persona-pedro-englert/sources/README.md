# sources/ — inbox de material bruto do Pedro Englert

Jogue aqui **qualquer coisa** sobre o Pedro / método da StartSe que você queira que a skill
eventualmente absorva: transcrições novas de aulas, palestras, entrevistas, posts dele.

## O que já existe

- **`transcricoes-aulas/`** — as 3 aulas do Board Program (canal Lions Dev) usadas na criação da
  skill em 2026-07-06: (1) Ambidestria e gestão por contexto, (2) Cultura de experimentação,
  (3) Alinhar cultura, estratégia e inovação.

## Fontes externas (não copiar pra cá, só apontar)

| Fonte | Onde | O que tem |
|---|---|---|
| **Google Drive** | pasta `1a3j6eAz5dm0670IuZTMm-6GBpySOPuh7` | 3 vídeos `.mp4` + `transcricoes/` (`.txt`/`.vtt`) |
| **YouTube (Lions Dev)** | youtu.be/VQV6WZ-i2IQ · hUCrc6geEdw · bbWi5x4HUXA | as 3 aulas originais |
| **Wiki LLM** | `~/wiki/20-wiki/maps/curso-pedro-englert-lions-dev-moc.md` + `concepts/` | 21 conceitos Zettelkasten + entidades `pedro-englert`, `startse` |

## Como funciona

Este é um **arquivo morto** até ser destilado. A skill **NÃO lê** estes arquivos numa conversa
normal — material cru é grande e estouraria o contexto. O que a skill usa são as **referências
curadas** em `../references/*.md`.

## Pra material virar inteligência da skill

Jogue o arquivo aqui (ou aponte o caminho no Drive/wiki) e diga numa conversa:
> "ingere a aula nova na skill do pedro-englert"

O Claude segue `../INGEST.md`: lê → extrai só os modelos mentais/frases/cases duráveis → destila na
referência certa (ou cria uma nova). Também funciona no meio de uma conversa: "salva isso na skill do Pedro".

## Formatos

- **Melhor:** `.md`, `.txt` (transcrições), `.pdf` (texto selecionável).
- **Evite:** `.mp4`/`.srt`/`.vtt` (ficam no Drive; a skill só consome texto).
