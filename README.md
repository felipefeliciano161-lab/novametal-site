# Nova Metal — site novo

Projeto Next.js/TypeScript com catálogo estruturado, busca, filtros, páginas de produto, páginas institucionais, soluções e formulário de orçamento.

## Rodar localmente

1. Instale Node.js LTS.
2. Abra esta pasta no terminal.
3. Rode:

```bash
npm install
npm run dev
```

4. Abra http://localhost:3000

## Onde editar os produtos

O catálogo está em:

`lib/products.json`

Ali ficam nomes, categorias e descrições. As categorias que aparecem no catálogo público mas não tiveram nomes de produtos recuperados no índice público ficaram preparadas para cadastro.

## Imagens

O layout possui placeholders de imagem para não inventar fotos. Substitua por imagens oficiais da empresa em `public/` e adicione a URL/caminho no objeto de cada produto.

## Orçamento

O formulário está funcionando no front-end. Para receber os dados de verdade, conecte a uma API, e-mail, WhatsApp ou Supabase.

## Fonte

Os dados de catálogo usados como base foram conferidos no site público da Nova Metal:
https://www.novametal.ind.br/produtos.html


## Atualização baseada na gravação enviada

O catálogo foi ampliado com modelos que aparecem na gravação de tela fornecida pelo usuário, incluindo linhas de iluminação T.G.V.P., iluminação decorativa, iluminação industrial, iluminação de longo alcance/específica e suspensões/acessórios.

As descrições que não puderam ser confirmadas integralmente pela gravação ficam como "consulte a equipe comercial", evitando inventar especificações.


### Imagens do catálogo
As imagens dos produtos foram recortadas diretamente da gravação de tela enviada pelo usuário e vinculadas aos produtos correspondentes. Para produção, substitua por arquivos originais em alta resolução quando disponíveis.
