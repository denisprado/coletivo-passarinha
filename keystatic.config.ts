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
      format: { data: "json" },
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
        synopsis: fields.text({ label: "Sinopse", multiline: true }),
        releaseText: fields.text({
          label: "Texto de Apresentação / Release",
          multiline: true,
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
          }),
          {
            label: "Galeria de Fotos",
            itemLabel: (props) =>
              props.fields.caption.value || props.fields.alt.value || "Foto",
          },
        ),
      },
    }),

    praticasFormativas: collection({
      label: "Práticas Formativas & Oficinas",
      slugField: "title",
      path: "src/content/praticas-formativas/*",
      format: { data: "json" },
      previewUrl: "/praticas-formativas#{slug}",
      columns: ["targetAudience", "audienceLimit"],
      schema: {
        title: fields.slug({ name: { label: "Título da Prática / Oficina" } }),
        subtitle: fields.text({ label: "Subtítulo" }),
        concept: fields.text({ label: "Conceito / Proposta", multiline: true }),
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
        fullDescription: fields.array(
          fields.text({ label: "Parágrafo", multiline: true }),
          {
            label: "Descrição Completa (Parágrafos)",
            itemLabel: (props) => props.value?.slice(0, 45) || "Parágrafo",
          },
        ),
        highlights: fields.array(fields.text({ label: "Destaque" }), {
          label: "Pontos de Destaque",
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
      },
    }),

    audiovisual: collection({
      label: "Produções Audiovisuais",
      slugField: "title",
      path: "src/content/audiovisual/*",
      format: { data: "json" },
      previewUrl: "/audiovisual#{slug}",
      columns: ["category", "youtubeId"],
      schema: {
        title: fields.slug({ name: { label: "Título da Obra" } }),
        category: fields.text({
          label: "Formato / Categoria (ex: Curta-metragem, Longa-metragem)",
          defaultValue: "Curta-metragem",
        }),
        synopsis: fields.text({ label: "Sinopse", multiline: true }),
        context: fields.text({
          label: "Contexto / Apresentação",
          multiline: true,
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
          }),
          {
            label: "Galeria de Fotos",
            itemLabel: (props) =>
              props.fields.caption.value || props.fields.alt.value || "Foto",
          },
        ),
      },
    }),

    projetosGaratuja: collection({
      label: "Projetos do Quintal Garatuja",
      slugField: "title",
      path: "src/content/projetos-garatuja/*",
      format: { data: "json" },
      previewUrl: "/quintal-garatuja#{slug}",
      columns: ["tag"],
      schema: {
        title: fields.slug({ name: { label: "Título do Projeto" } }),
        tag: fields.text({
          label: "Tag / Etiqueta",
          defaultValue: "Projeto de Continuidade",
        }),
        shortDescription: fields.text({
          label: "Chamada / Resumo Inicial",
          multiline: true,
        }),
        paragraphs: fields.array(
          fields.text({ label: "Parágrafo", multiline: true }),
          {
            label: "Descrição Completa (Parágrafos)",
            itemLabel: (props) => props.value?.slice(0, 45) || "Parágrafo",
          },
        ),
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
      },
    }),

    equipe: collection({
      label: "Equipe e Artistas",
      slugField: "name",
      path: "src/content/equipe/*",
      format: { data: "json" },
      previewUrl: "/quem-somos#{slug}",
      columns: ["role"],
      schema: {
        name: fields.slug({ name: { label: "Nome" } }),
        role: fields.text({ label: "Função / Atuação Principal" }),
        bio: fields.text({ label: "Minibiografia", multiline: true }),
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
      },
    }),

    historico: collection({
      label: "Histórico e Marcos",
      slugField: "year",
      path: "src/content/historico/*",
      format: { data: "json" },
      previewUrl: "/quem-somos#historico",
      columns: ["title", "location", "tag"],
      schema: {
        year: fields.slug({
          name: { label: "Ano / Período (ex: 2014, 2018-2020)" },
        }),
        title: fields.text({ label: "Título do Marco" }),
        description: fields.text({
          label: "Descrição da Conquista / Acontecimento",
          multiline: true,
        }),
        location: fields.text({ label: "Local / Cidade" }),
        tag: fields.text({ label: "Tag / Categoria" }),
        photoUrl: fields.image({
          label: "Foto do Registro",
          directory: "public/photos/cms",
          publicPath: "/photos/cms/",
        }),
      },
    }),
  },

  singletons: {
    paginaInicial: singleton({
      label: "Página Inicial (Home)",
      path: "src/content/pagina-inicial",
      format: { data: "json" },
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
        introParagraphs: fields.array(
          fields.text({ label: "Parágrafo", multiline: true }),
          {
            label: "Apresentação do Coletivo (Parágrafos)",
            itemLabel: (props) => props.value?.slice(0, 45) || "Parágrafo",
          },
        ),
        ctaText: fields.text({
          label: "Texto do Botão de Chamada",
          defaultValue: "Conheça quem somos →",
        }),
      },
    }),

    quintalGaratuja: singleton({
      label: "Ponto de Cultura Quintal Garatuja (Sede)",
      path: "src/content/quintal-garatuja",
      format: { data: "json" },
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
        paragraphs: fields.array(
          fields.text({ label: "Parágrafo", multiline: true }),
          {
            label: "História e Manifesto (Parágrafos)",
            itemLabel: (props) => props.value?.slice(0, 45) || "Parágrafo",
          },
        ),
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
      },
    }),

    aru: singleton({
      label: "A História de Aru (Livro & Cordel)",
      path: "src/content/aru",
      format: { data: "json" },
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
        paragraphs: fields.array(
          fields.text({ label: "Parágrafo", multiline: true }),
          {
            label: "Apresentação e Sinopse (Parágrafos)",
            itemLabel: (props) => props.value?.slice(0, 45) || "Parágrafo",
          },
        ),
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
        principles: fields.array(
          fields.text({ label: "Princípio" }),
          {
            label: "12 Princípios da Permacultura",
            itemLabel: (props) => props.value || "Princípio",
          },
        ),
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
