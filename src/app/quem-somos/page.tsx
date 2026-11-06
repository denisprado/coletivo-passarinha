import React from "react";
import Image from "next/image";
import { TEAM_MEMBERS, TIMELINE } from "@/data/siteData";
import {
  Users,
  Sparkles,
  ExternalLink,
  MapPin,
  Music,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import BrushBanner from "@/components/BrushBanner";
import PhotoMosaic from "@/components/PhotoMosaic";

export const metadata = {
  title: "Quem Somos & Histórico | Coletivo Passarinha",
  description:
    "Conheça a trajetória do Coletivo Passarinha desde 2014, nossas pesquisas em arte, educação ambiental e as artistas e criadores integrantes.",
};

export default function QuemSomosPage() {
  const historicoPhotos = [
    {
      src: "/photos/historico/inicio-1.webp",
      alt: "Início itinerante do Coletivo Passarinha em 2014",
      caption: "2014 — Início itinerante e ações na estrada",
    },
    {
      src: "/photos/historico/permacultura-4.webp",
      alt: "Vivências de Permacultura da Passarinha",
      caption: "Permacultura, saberes da terra e educação ambiental",
    },
    {
      src: "/photos/historico/oficina-cortejo-4.webp",
      alt: "Oficina Cortejo com instrumentos reaproveitados",
      caption: "Oficinas Cortejo — Música e reutilização criativa",
    },
    {
      src: "/photos/historico/jogar-dentro-1.webp",
      alt: "Primeiras edições do Ateliê Jogar Dentro",
      caption: "Ateliê Jogar Dentro — Invenção coletiva de brinquedos",
    },
    {
      src: "/photos/historico/ecobrinquedoteca-3.webp",
      alt: "Ecobrinquedoteca em circulação",
      caption: "Ecobrinquedoteca — Cultura do brincar em praças e festivais",
    },
    {
      src: "/photos/historico/reciclarnaval-1.webp",
      alt: "Reciclarnaval no SESC Campinas",
      caption: "Reciclarnaval — Mais de 800 adereços criados coletivamente",
    },
  ];

  return (
    <main className="w-full overflow-x-hidden">
      {/* FAIXA 1 — MANIFESTO + MOSAICO FOTOGRÁFICO ABERTO (Roxo Acrílico) */}
      <section className="canvas-roxo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#FDBC2E] text-xs font-black uppercase tracking-wider text-[#3A1D40] border border-[#3A1D40]">
              <Users className="w-4 h-4" /> Desde 2014 na Estrada
            </div>

            <div>
              <BrushBanner color="crimson" shape="wave" className="-ml-2">
                <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                  Quem Somos
                </h1>
              </BrushBanner>
            </div>

            <div className="space-y-4 text-base sm:text-xl text-[#FDBC2E] leading-relaxed font-medium">
              <p>
                Somos o{" "}
                <strong className="font-black">
                  Coletivo Interdisciplinar Passarinha
                </strong>
                , artistas da cena, música, design e permacultura. Há anos,
                realizamos ações de arte educação ambiental em projetos
                itinerantes e também conservando relações com territórios.
              </p>
              <p>
                Promovemos práticas artísticas e discutimos urgências
                socioambientais relacionadas a essa sociedade do consumo e do
                descarte — que nos mobiliza a criar outras poéticas e modos de
                estar no mundo.
              </p>
              <p>
                O Coletivo Passarinha trabalha em várias frentes e em diferentes
                lugares. Somos uma plataforma de criação e circulação, que tem a
                inclusão e atenção às problemáticas socioambientais como
                temáticas transversais. Temos interesse em costurar nossas
                práticas de arte e cultura com os lugares e pessoas que
                cruzamos. Fazemos arte educação ambiental desde 2014.
              </p>
            </div>

            <div className="painel-rustico p-5 sm:p-6 text-sm sm:text-base font-bold text-[#3A1D40]">
              Trabalhamos em parceria com instituições públicas e particulares,
              com Pontos de Cultura e outros espaços culturais. Já realizamos
              projetos com apoio de esferas federais, estaduais, municipais e de
              alianças internacionais, sempre entregando excelência em todas as
              ações realizadas.
            </div>
          </div>

          {/* Mosaico Fotográfico Aberto com as fotos de Quem somos/Historico */}
          <div className="space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#FDBC2E]/90 block">
              Registros da Nossa Caminhada (Clique nas fotos para ampliar)
            </span>
            <PhotoMosaic photos={historicoPhotos} variant="editorial" />
          </div>
        </div>
      </section>

      {/* FAIXA 2 — AS PASSARINHAS / INTEGRANTES (Amarelo Ipê Acrílico com Retratos Grandes) */}
      <section className="canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#3A1D40] text-xs font-black uppercase tracking-wider text-[#FDBC2E]">
              <Sparkles className="w-4 h-4 text-[#FDBC2E]" /> Equipe & Criadores
            </div>
            <div>
              <BrushBanner color="crimson" shape="wave" className="-ml-2">
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#FDBC2E]">
                  As Passarinhas
                </h2>
              </BrushBanner>
            </div>
            <p className="text-[#3A1D40] max-w-2xl text-base sm:text-xl font-bold">
              Conheça artistas, educadoras e pesquisadores que dão vida aos
              projetos, espetáculos e práticas formativas do coletivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="painel-rustico p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 border-b-2 border-[#3A1D40]/15 pb-5">
                    {member.photoUrl ? (
                      <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-xl overflow-hidden border border-[#3A1D40]/25/30 shadow-md shrink-0 bg-[#3A1D40]">
                        <Image
                          src={member.photoUrl}
                          alt={member.name}
                          fill
                          sizes="160px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-28 h-28 rounded-xl ${member.avatarColor} text-white font-black text-2xl flex items-center justify-center border border-[#3A1D40]/30 shrink-0`}
                      >
                        {member.name.charAt(0)}
                      </div>
                    )}
                    <div className="space-y-1.5">
                      <span className="inline-block bg-[#E91C47] text-[#FDF6E4] text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                        {member.role}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#3A1D40] uppercase tracking-tight">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#3A1D40] leading-relaxed whitespace-pre-line font-medium">
                    {member.bio}
                  </p>
                </div>

                {/* Links Sociais / Portfólio do Integrante */}
                {(member.instagramUrl || member.spotifyUrl) && (
                  <div className="pt-4 border-t-2 border-[#3A1D40]/15 flex flex-wrap items-center gap-3">
                    {member.instagramUrl && (
                      <a
                        href={member.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-foca bg-[#FDBC2E] hover:bg-[#f79335] text-[#3A1D40] text-xs py-2 px-4"
                      >
                        <InstagramIcon className="w-3.5 h-3.5 text-[#E91C47]" />
                        <span>Instagram</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {member.spotifyUrl && (
                      <a
                        href={member.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-foca bg-[#3A1D40] hover:bg-[#532E5A] text-[#FDBC2E] text-xs py-2 px-4"
                      >
                        <Music className="w-3.5 h-3.5 text-[#1DB954]" />
                        <span>Spotify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAIXA 3 — LINHA DO TEMPO E HISTÓRICO (Laranja Acrílico) */}
      <section className="canvas-laranja py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-3">
            <span className="inline-block bg-[#3A1D40] text-[#FDBC2E] text-xs font-black uppercase tracking-widest px-3 py-1 rounded-lg">
              Memória Viva • 2014 a Hoje
            </span>
            <div>
              <BrushBanner color="yellow" shape="wave" className="-ml-2">
                <h2 className="text-3xl sm:text-4xl font-black text-[#532E5A] uppercase">
                  Histórico & Linha do Tempo
                </h2>
              </BrushBanner>
            </div>
            <p className="text-[#2A1230] max-w-2xl text-base sm:text-lg font-bold">
              A trajetória do Coletivo Passarinha conectando saberes, escolas e
              comunidades pelo Brasil.
            </p>
          </div>

          <div className="relative border-l-4 border-[#3A1D40] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-8">
            {TIMELINE.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[36px] sm:-left-[52px] top-4 w-6 h-6 rounded-lg bg-[#FDBC2E] border border-[#3A1D40]/25 shadow-lg" />

                <div className="painel-rustico p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div
                    className={
                      item.photoUrl
                        ? "md:col-span-7 space-y-3"
                        : "md:col-span-12 space-y-3"
                    }
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-black text-[#FDBC2E] bg-[#3A1D40] px-3.5 py-1 rounded-lg border border-[#3A1D40]">
                        {item.year}
                      </span>
                      {item.tag && (
                        <span className="text-xs font-black text-[#E91C47] uppercase tracking-wider bg-[#FDBC2E]/35 px-2.5 py-0.5 rounded-lg border border-[#3A1D40]/20">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#3A1D40] uppercase">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#3A1D40]/90 leading-relaxed font-medium">
                      {item.description}
                    </p>

                    {item.location && (
                      <div className="flex items-center gap-1.5 text-xs text-[#E91C47] font-black pt-1 uppercase tracking-wide">
                        <MapPin className="w-4 h-4 text-[#E91C47]" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>

                  {item.photoUrl && (
                    <div className="md:col-span-5">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#3A1D40]/25 shadow-lg">
                        <Image
                          src={item.photoUrl}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 360px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
