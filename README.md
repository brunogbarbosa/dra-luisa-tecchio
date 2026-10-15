# Dra. Luísa Tecchio

Um único site em Next.js, personalizado a partir do código original do template **Premium Vendas V4**. Hero cinematográfico, navegação transparente, capítulos editoriais animados, seis registros reais com ampliação e comparação, menu mobile e favicon LT.

## Executar

Requer Node.js 20.9 ou superior e npm.

```sh
npm ci
npm run dev
```

Abra http://127.0.0.1:3000.

## Verificar e compilar

```sh
npm run typecheck
npm run build
npm start
```

O build gera `.next/`. Não configure `dist` como diretório de saída.

## Importar na Vercel

1. Importe este repositório GitHub em **Add New → Project**.
2. Selecione **Next.js** e mantenha a raiz do projeto como `./`.
3. Instalação: `npm ci`. Build: `npm run build`. Diretório de saída: padrão do Next.js.
4. Publique. Não há variáveis de ambiente obrigatórias.

O projeto não usa Sites, banco de dados nem serviços privados. A URL de produção da Vercel é reconhecida automaticamente para metadados. Nenhuma imagem OG, social card ou imagem de compartilhamento é gerada.

## Conteúdo e identidade

Dados, paleta e contatos: `data/site.ts`. Os tokens compartilhados são aplicados em `app/layout.tsx`; a camada visual personalizada está em `app/luisa.css`. O favicon está em `app/icon.svg`.

| Token | Cor |
| --- | --- |
| Fundo escuro quente | `#201E18` |
| Texto escuro | `#29271F` |
| Dourado | `#B39A58` |
| Dourado profundo | `#89733D` |
| Champagne | `#E7D9A6` |
| Marfim | `#F7F4ED` |
| Areia | `#EBE5D7` |
| Texto secundário | `#746D5E` |

A direção de identidade parte do monograma dourado e dos retratos fornecidos da profissional. A referência do Instagram identifica harmonização facial em Ijuí e a profissão de enfermeira esteta. Não foram incluídos qualificações adicionais, número de registro incompleto, depoimentos ou endereço físico.

WhatsApp: `+55 (55) 99208-7414`. Instagram: `https://www.instagram.com/dra.luisatecchio/`.

As dez fotografias fornecidas foram convertidas integralmente para WebP, sem retoque, alteração de rosto, pele ou resultados. As quatro comparações lado a lado e as duas empilhadas preservam sua composição original. O modo de comparação usa as metades do próprio arquivo, sem modificar as imagens originais. Fotografias com enquadramentos diferentes não representam um alinhamento anatômico exato.

As animações respeitam a preferência de movimento reduzido do navegador. O menu e a galeria usam diálogos nativos, fechamento com Escape e retorno de foco.
