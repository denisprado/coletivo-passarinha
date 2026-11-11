import React from "react";
import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage:
    process.env.NODE_ENV === "production"
      ? {
          kind: "github",
          repo: "denisprado/coletivo-passarinha",
        }
      : {
          kind: "local",
        },
  ui: {
    brand: {
      name: "Coletivo Passarinha",
      mark: () =>
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "10px",
            },
          },
          [
            React.createElement("img", {
              key: "brand-logo",
              src: "/brand/passarinha-ave.webp",
              alt: "Coletivo Passarinha",
              style: {
                height: "32px",
                width: "auto",
                maxHeight: "32px",
                objectFit: "contain",
              },
            }),
            React.createElement(
              "span",
              {
                key: "brand-title",
                style: {
                  fontWeight: 700,
                  fontSize: "15px",
                  lineHeight: "1.2",
                  color: "inherit",
                },
              },
              "Coletivo Passarinha",
            ),
          ],
        ),
    },
    navigation: {
      "Páginas Principais": ["paginaInicial", "aru", "quintalGaratuja"],
      "Criações Artísticas": ["espetaculos", "audiovisual"],
      "Arte Educação & Oficinas": ["praticasFormativas"],
      "Ponto de Cultura Quintal Garatuja": ["projetosGaratuja"],
      "Sobre o Coletivo": ["equipe", "historico"],
      "Configurações": ["configuracoes"],
    },
  },
  collections: {
    espetaculos: collection({
      label: "Espetáculos",
      slugField: "title",
      path: "src/content/espetaculos/*",
      format: { contentField: "content" },
      previewUrl: "/espetaculos#{slug}",
      columns: ["category", "duration", "ageRating"],
      schema: {
        title: fields.slug({ name: { label: "Título do Espetáculo" } }),
        subtitle: fields.text({ label: "Subtítulo / Chamada" }),
        category: fields.select({
          label: "Categoria / Linguagem Principal",
          options: [
            { label: "Contação & Música", value: "Contação & Música" },
            {
              label: "Teatro & Meio Ambiente",
              value: "Teatro & Meio Ambiente",
            },
            { label: "Música Popular", value: "Música Popular" },
            {
              label: "Patrimônio & Território",
              value: "Patrimônio & Território",
            },
            { label: "Espetáculo Teatral", value: "Espetáculo Teatral" },
            { label: "Show Musical", value: "Show Musical" },
            { label: "Intervenção Artística", value: "Intervenção Artística" },
            { label: "Instalação / Vivência", value: "Instalação / Vivência" },
            { label: "Outro", value: "Outro" },
          ],
          defaultValue: "Contação & Música",
        }),
        accentColor: fields.text({
          label: "Cor de Destaque (Hex)",
          defaultValue: "#F95922",
        }),
        ageRating: fields.text({
          label: "Classificação Indicativa",
          defaultValue: "Livre",
        }),
        duration: fields.text({
          label: "Duração (ex: 50 min)",
          defaultValue: "50 min",
        }),
        videoUrl: fields.url({ label: "Link de Vídeo (YouTube/Vimeo)" }),
        technicalSheet: fields.array(
          fields.object({
            label: fields.text({ label: "Função / Rótulo" }),
            value: fields.text({ label: "Nome / Crédito" }),
          }),
          {
            label: "Ficha Técnica",
            itemLabel: (props) =>
              `${props.fields.label.value || "Item"}: ${props.fields.value.value || ""}`,
          },
        ),
        photos: fields.array(
          fields.object({
            src: fields.image({
              label: "Foto",
              directory: "public/photos/cms",
              publicPath: "/photos/cms/",
            }),
            alt: fields.text({ label: "Descrição da Foto (Acessibilidade)" }),
            caption: fields.text({ label: "Legenda" }),
            fit: fields.select({
              label: "Enquadramento da foto",
              options: [
                { label: "Cobrir (cover - padrão horizontal)", value: "cover" },
                { label: "Conter inteiro (contain - cartaz vertical)", value: "contain" },
              ],
              defaultValue: "cover",
            }),
          }),
          {
            label: "Galeria de Fotos",
            itemLabel: (props) =>
              props.fields.caption.value || props.fields.alt.value || "Foto",
          },
        ),
        content: fields.document({
          label: "Apresentação, Sinopse e Rider Técnico (Texto Rico)",
          formatting: true,
          links: true,
          dividers: true,
        }),
      },
    }),

    praticasFormativas: collection({
      label: "Práticas Formativas & Oficinas",
      slugField: "title",
      path: "src/content/praticas-formativas/*",
      format: { contentField: "content" },
      previewUrl: "/praticas-formativas#{slug}",
      columns: ["targetAudience", "audienceLimit"],
      schema: {
        title: fields.slug({ name: { label: "Título da Prática / Oficina" } }),
        subtitle: fields.text({ label: "Subtítulo" }),
        accentColor: fields.text({
          label: "Cor de Destaque (Hex)",
          defaultValue: "#FDBC2E",
        }),
        targetAudience: fields.text({
          label: "Público Alvo",
          defaultValue: "Público em geral",
        }),
        audienceLimit: fields.text({
          label: "Limite de Vagas / Público",
          defaultValue: "30 pessoas",
        }),
        whatsappContact: fields.text({
          label: "WhatsApp para Contratação",
          defaultValue: "5519992510921",
        }),
        highlights: fields.array(fields.text({ label: "Destaque" }), {
          label: "Pontos de Destaque / Pilares",
          itemLabel: (props) => props.value || "Destaque",
        }),
        principles: fields.array(fields.text({ label: "Princípio" }), {
          label: "Princípios Metodológicos",
          itemLabel: (props) => props.value || "Princípio",
        }),
        photos: fields.array(
          fields.object({
            src: fields.image({
              label: "Foto",
              directory: "public/photos/cms",
              publicPath: "/photos/cms/",
            }),
            alt: fields.text({ label: "Descrição da Foto" }),
            caption: fields.text({ label: "Legenda" }),
          }),
          {
            label: "Galeria de Fotos",
            itemLabel: (props) =>
              props.fields.caption.value || props.fields.alt.value || "Foto",
          },
        ),
        content: fields.document({
          label: "Conceito, Metodologia e Apresentação (Texto Rico)",
          formatting: true,
          links: true,
          dividers: true,
        }),
      },
    }),

    audiovisual: collection({
      label: "Produções Audiovisuais",
      slugField: "title",
      path: "src/content/audiovisual/*",
      format: { contentField: "content" },
      previewUrl: "/audiovisual#{slug}",
      columns: ["category", "youtubeId"],
      schema: {
        title: fields.slug({ name: { label: "Título da Obra" } }),
        category: fields.text({
          label: "Formato / Categoria (ex: Curta-metragem, Longa-metragem)",
          defaultValue: "Curta-metragem",
        }),
        videoUrl: fields.url({ label: "Link do Vídeo (YouTube/Vimeo)" }),
        youtubeId: fields.text({
          label: "ID do Vídeo no YouTube (opcional, para embed)",
        }),
        accentColor: fields.text({
          label: "Cor de Destaque (Hex)",
          defaultValue: "#E91C47",
        }),
        technicalSheet: fields.array(
          fields.object({
            label: fields.text({ label: "Função / Rótulo" }),
            value: fields.text({ label: "Nome / Crédito" }),
          }),
          {
            label: "Ficha Técnica",
            itemLabel: (props) =>
              `${props.fields.label.value || "Item"}: ${props.fields.value.value || ""}`,
          },
        ),
        photos: fields.array(
          fields.object({
            src: fields.image({
              label: "Foto",
              directory: "public/photos/cms",
              publicPath: "/photos/cms/",
            }),
            alt: fields.text({ label: "Descrição da Foto (Acessibilidade)" }),
            caption: fields.text({ label: "Legenda" }),
            fit: fields.select({
              label: "Enquadramento da foto",
              options: [
                { label: "Cobrir (cover - padrão horizontal)", value: "cover" },
                { label: "Conter inteiro (contain - cartaz vertical)", value: "contain" },
              ],
              defaultValue: "cover",
            }),
          }),
          {
            label: "Galeria de Fotos",
            itemLabel: (props) =>
              props.fields.caption.value || props.fields.alt.value || "Foto",
          },
        ),
        content: fields.document({
          label: "Sinopse, Contexto e Reflexões (Texto Rico)",
          formatting: true,
          links: true,
          dividers: true,
        }),
      },
    }),

    projetosGaratuja: collection({
      label: "Projetos do Quintal Garatuja",
      slugField: "title",
      path: "src/content/projetos-garatuja/*",
      format: { contentField: "content" },
      previewUrl: "/quintal-garatuja#{slug}",
      columns: ["tag"],
      schema: {
        title: fields.slug({ name: { label: "Título do Projeto" } }),
        tag: fields.text({
          label: "Tag / Etiqueta",
          defaultValue: "Projeto de Continuidade",
        }),
        accentColor: fields.text({
          label: "Cor de Destaque (Hex)",
          defaultValue: "#532E5A",
        }),
        externalLink: fields.url({ label: "Link Externo (opcional)" }),
        externalLinkLabel: fields.text({
          label: "Texto do Link Externo (opcional)",
        }),
        photos: fields.array(
          fields.object({
            src: fields.image({
              label: "Foto",
              directory: "public/photos/cms",
              publicPath: "/photos/cms/",
            }),
            alt: fields.text({ label: "Descrição da Foto" }),
            caption: fields.text({ label: "Legenda" }),
          }),
          {
            label: "Galeria de Fotos",
            itemLabel: (props) =>
              props.fields.caption.value || props.fields.alt.value || "Foto",
          },
        ),
        content: fields.document({
          label: "Apresentação e Descrição Completa (Texto Rico)",
          formatting: true,
          links: true,
          dividers: true,
        }),
      },
    }),

    equipe: collection({
      label: "Equipe e Artistas",
      slugField: "name",
      path: "src/content/equipe/*",
      format: { contentField: "bio" },
      previewUrl: "/quem-somos#{slug}",
      columns: ["role"],
      schema: {
        name: fields.slug({ name: { label: "Nome" } }),
        role: fields.text({ label: "Função / Atuação Principal" }),
        avatarColor: fields.text({
          label: "Cor de Fundo do Avatar (Hex)",
          defaultValue: "#FDBC2E",
        }),
        photoUrl: fields.image({
          label: "Foto de Perfil",
          directory: "public/photos/cms",
          publicPath: "/photos/cms/",
        }),
        instagramUrl: fields.url({ label: "Instagram" }),
        spotifyUrl: fields.url({ label: "Spotify" }),
        portfolioUrl: fields.url({ label: "Portfólio / Site Pessoal" }),
        bio: fields.document({
          label: "Minibiografia Rica (Negrito, Itálico, Links)",
          formatting: true,
          links: true,
        }),
      },
    }),

    historico: collection({
      label: "Histórico e Marcos (Memória Viva)",
      slugField: "year",
      path: "src/content/historico/*",
      format: { contentField: "content" },
      previewUrl: "/quem-somos#historico",
      columns: ["title", "periodLabel", "location"],
      schema: {
        year: fields.slug({
          name: { label: "Identificador / Slug do Período (ex: 2014-2015)" },
        }),
        periodLabel: fields.text({
          label: "Rótulo Exibido do Período (ex: 2014 – 2015)",
          defaultValue: "2014 – 2015",
        }),
        title: fields.text({ label: "Título do Marco" }),
        location: fields.text({ label: "Local / Cidade" }),
        tag: fields.text({ label: "Tag / Categoria" }),
        photoStacked: fields.checkbox({
          label: "Fotos em Coluna Única (Empilhadas verticalmente)",
          defaultValue: true,
        }),
        photos: fields.array(
          fields.object({
            src: fields.image({
              label: "Foto",
              directory: "public/photos/cms",
              publicPath: "/photos/cms/",
            }),
            alt: fields.text({ label: "Descrição da Foto" }),
            caption: fields.text({ label: "Legenda" }),
          }),
          {
            label: "Fotos do Registro",
            itemLabel: (props) =>
              props.fields.caption.value || props.fields.alt.value || "Foto",
          },
        ),
        content: fields.document({
          label: "Relato Histórico e Memória Viva (Texto Rico)",
          formatting: true,
          links: true,
          dividers: true,
        }),
      },
    }),
  },

  singletons: {
    paginaInicial: singleton({
      label: "Página Inicial (Home)",
      path: "src/content/pagina-inicial",
      format: { contentField: "content" },
      previewUrl: "/",
      schema: {
        heroTitle: fields.text({
          label: "Título Principal do Hero",
          defaultValue: "Coletivo Interdisciplinar Passarinha",
        }),
        heroSubtitle: fields.text({
          label: "Subtítulo / Chamada",
          defaultValue: "arte educação ambiental",
        }),
        ctaText: fields.text({
          label: "Texto do Botão de Chamada",
          defaultValue: "Conheça quem somos →",
        }),
        content: fields.document({
          label: "Apresentação do Coletivo na Home (Texto Rico)",
          formatting: true,
          links: true,
          dividers: true,
        }),
      },
    }),

    quintalGaratuja: singleton({
      label: "Ponto de Cultura Quintal Garatuja (Sede)",
      path: "src/content/quintal-garatuja",
      format: { contentField: "content" },
      previewUrl: "/quintal-garatuja#sobre",
      schema: {
        title: fields.text({
          label: "Título Principal",
          defaultValue: "Ponto de Cultura Quintal Garatuja",
        }),
        tag: fields.text({
          label: "Etiqueta / Badge",
          defaultValue: "Ponto de Cultura • Campinas / SP",
        }),
        leadText: fields.text({
          label: "Texto Destaque / Apresentação",
          multiline: true,
        }),
        street: fields.text({
          label: "Rua e Número",
          defaultValue: "Rua São Miguel Arcanjo, 1520",
        }),
        neighborhood: fields.text({
          label: "Bairro e Cidade",
          defaultValue: "Jardim Nova Europa • Campinas / SP",
        }),
        email: fields.text({
          label: "E-mail de Contato",
          defaultValue: "garatuja.decultura@gmail.com",
        }),
        instagram: fields.url({
          label: "Instagram do Quintal",
          defaultValue: "https://www.instagram.com/quintalgaratuja",
        }),
        linktree: fields.url({
          label: "Linktree de Cursos e Inscrições",
          defaultValue: "https://linktr.ee/quintalgaratuja",
        }),
        whatsappGroup: fields.url({
          label: "Linha de Transmissão / Grupo no WhatsApp",
          defaultValue: "https://chat.whatsapp.com/IE2FV0vXBLeAcPFULcxjfK",
        }),
        photos: fields.array(
          fields.object({
            src: fields.image({
              label: "Foto",
              directory: "public/photos/cms",
              publicPath: "/photos/cms/",
            }),
            alt: fields.text({ label: "Descrição da Foto" }),
            caption: fields.text({ label: "Legenda" }),
          }),
          {
            label: "Galeria Principal de Fotos do Quintal",
            itemLabel: (props) =>
              props.fields.caption.value || props.fields.alt.value || "Foto",
          },
        ),
        content: fields.document({
          label: "História, Manifesto e Atuação Territorial (Texto Rico)",
          formatting: true,
          links: true,
          dividers: true,
        }),
      },
    }),

    aru: singleton({
      label: "A História de Aru (Livro & Cordel)",
      path: "src/content/aru",
      format: { contentField: "content" },
      previewUrl: "/aru",
      schema: {
        title: fields.text({
          label: "Título da Obra",
          defaultValue: "A História de Aru",
        }),
        tagline: fields.text({
          label: "Etiqueta / Categoria",
          defaultValue: "Arte-Educação Ambiental & Cordel",
        }),
        originalAuthor: fields.text({
          label: "Autor da História Original",
          defaultValue: "Paulo Roberto Amaral Lencioni",
        }),
        cordelAdaptation: fields.text({
          label: "Adaptação para Cordel",
          defaultValue: "Mari Rebelo e Sarah Gregorio",
        }),
        ebookUrl: fields.url({
          label: "Link de Download do E-book Gratuito",
        }),
        cartilhaUrl: fields.url({
          label: "Link de Download da Cartilha Pedagógica",
        }),
        principles: fields.array(fields.text({ label: "Princípio" }), {
          label: "12 Princípios da Permacultura",
          itemLabel: (props) => props.value || "Princípio",
        }),
        photos: fields.array(
          fields.object({
            src: fields.image({
              label: "Foto",
              directory: "public/photos/cms",
              publicPath: "/photos/cms/",
            }),
            alt: fields.text({ label: "Descrição da Foto" }),
            caption: fields.text({ label: "Legenda" }),
            fit: fields.select({
              label: "Ajuste da Imagem",
              options: [
                { label: "Cobrir (Cover)", value: "cover" },
                { label: "Conter (Contain)", value: "contain" },
              ],
              defaultValue: "cover",
            }),
          }),
          {
            label: "Galeria de Fotos dos Personagens e Cenários",
            itemLabel: (props) =>
              props.fields.caption.value || props.fields.alt.value || "Foto",
          },
        ),
        content: fields.document({
          label: "Apresentação e Sinopse da História (Texto Rico)",
          formatting: true,
          links: true,
          dividers: true,
        }),
      },
    }),

    configuracoes: singleton({
      label: "Configurações do Site e Contatos",
      path: "src/content/configuracoes",
      format: { data: "json" },
      previewUrl: "/contato",
      schema: {
        phone: fields.text({
          label: "Telefone Principal",
          defaultValue: "(19) 99251-0921",
        }),
        whatsappNumber: fields.text({
          label: "WhatsApp (somente números)",
          defaultValue: "5519992510921",
        }),
        emailGeral: fields.text({
          label: "E-mail Coletivo",
          defaultValue: "coletivopassarinha@gmail.com",
        }),
        emailGaratuja: fields.text({
          label: "E-mail Quintal Garatuja",
          defaultValue: "garatuja.decultura@gmail.com",
        }),
        instagramUrl: fields.url({
          label: "Instagram Coletivo",
          defaultValue: "https://instagram.com/coletivopassarinha",
        }),
        instagramGaratujaUrl: fields.url({
          label: "Instagram Quintal Garatuja",
          defaultValue: "https://instagram.com/quintalgaratuja",
        }),
        spotifyUrl: fields.url({
          label: "Spotify",
          defaultValue: "https://open.spotify.com/artist/7z5Nn5mGqKqgQvKq1",
        }),
        youtubeUrl: fields.url({
          label: "YouTube",
          defaultValue: "https://www.youtube.com/@coletivopassarinha",
        }),
        address: fields.text({
          label: "Endereço Quintal Garatuja",
          defaultValue: "Rua São Tomé, 56 - Vila Nogueira, Campinas - SP",
        }),
      },
    }),
  },
});
