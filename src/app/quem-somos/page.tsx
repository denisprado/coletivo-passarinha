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
import PhotoCarouselFrame from "@/components/PhotoCarouselFrame";

export const metadata = {
  title: "Quem Somos & Histórico | Coletivo Passarinha",
  description:
    "Conheça a trajetória do Coletivo Passarinha desde 2014, nossas pesquisas em arte, educação ambiental e as artistas e criadores integrantes.",
};

export default function QuemSomosPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header da Página em Textura Roxa Acrílica */}
      <section className="canvas-roxo py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#FDBC2E]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FDBC2E]/15 border border-[#FDBC2E]/40 text-xs font-black uppercase tracking-wider text-[#FDBC2E]">
            <Users className="w-4 h-4 text-[#FDBC2E]" /> Desde 2014 na Estrada
          </div>
          <div>
            <BrushBanner color="crimson" shape="wave">
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                Quem Somos
              </h1>
            </BrushBanner>
          </div>
          <p className="text-base sm:text-xl text-[#FDBC2E] max-w-3xl mx-auto leading-relaxed font-semibold">
            Plataforma de criação, articulação e circulação artística,
            conectando linguagens, saberes, pessoas e territórios desde 2014.
          </p>
        </div>
      </section>

      {/* Manifesto + Carrossel da Pasta Quem somos/Historico */}
      <section className="bg-[#FDF6E4] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 bg-white p-8 sm:p-11 rounded-[36px] shadow-md border-2 border-[#FDBC2E]/50 space-y-5 text-base sm:text-lg text-[#532E5A] leading-relaxed font-medium">
            <h2 className="text-2xl sm:text-3xl font-black text-[#E91C47] uppercase">
              Arte, Educação Ambiental & Território
            </h2>
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
              inclusão e atenção às problemáticas socioambientais como temáticas
              transversais. Temos interesse em costurar nossas práticas de arte
              e cultura com os lugares e pessoas que cruzamos. Fazemos arte
              educação ambiental desde 2014.
            </p>
            <p className="text-sm sm:text-base text-[#532E5A] bg-[#FDF6E4] p-6 rounded-2xl border-l-4 border-[#F79335] font-semibold">
              Trabalhamos em parceria com instituições públicas e particulares,
              com Pontos de Cultura e outros espaços culturais. Já realizamos
              projetos com apoio de esferas federais, estaduais, municipais e de
              alianças internacionais, sempre entregando excelência em todas as
              ações realizadas.
            </p>
          </div>

          {/* Carrossel com acervo histórico de Quem somos/Historico */}
          <div className="lg:col-span-5">
            <PhotoCarouselFrame
              aspectClass="aspect-[4/4]"
              photos={[
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
              ]}
            />
          </div>
        </div>
      </section>

      {/* As Passarinhas / Integrantes (Pasta Quem somos/Passarinhas) */}
      <section className="canvas-amarelo py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#532E5A]/10 text-xs font-black uppercase tracking-wider text-[#532E5A]">
              <Sparkles className="w-4 h-4 text-[#E91C47]" /> Equipe & Criadores
            </div>
            <div>
              <BrushBanner color="crimson" shape="wave">
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#FDBC2E]">
                  As Passarinhas
                </h2>
              </BrushBanner>
            </div>
            <p className="text-[#532E5A] max-w-2xl mx-auto text-sm sm:text-lg font-semibold">
              Conheça artistas, educadoras e pesquisadores que dão vida aos
              projetos, espetáculos e práticas formativas do coletivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white text-[#532E5A] rounded-[36px] p-7 sm:p-8 shadow-xl border-2 border-white flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-all"
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    {member.photoUrl ? (
                      <div className="relative w-24 h-24 rounded-3xl overflow-hidden border-3 border-[#FDBC2E] shadow-md shrink-0">
                        <Image
                          src={member.photoUrl}
                          alt={member.name}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-20 h-20 rounded-2xl ${member.avatarColor} text-white font-black text-xl flex items-center justify-center shadow-md shrink-0`}
                      >
                        {member.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#532E5A]">
                        {member.name}
                      </h3>
                      <p className="text-xs font-black text-[#E91C47] uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#532E5A]/90 leading-relaxed whitespace-pre-line font-medium">
                    {member.bio}
                  </p>
                </div>

                {/* Links Sociais / Portfólio do Integrante */}
                {(member.instagramUrl || member.spotifyUrl) && (
                  <div className="pt-4 border-t border-[#532E5A]/10 flex flex-wrap items-center gap-3">
                    {member.instagramUrl && (
                      <a
                        href={member.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-foca bg-[#FDF6E4] hover:bg-[#FDBC2E]/30 text-[#532E5A] text-xs py-2 px-4 border border-[#FDBC2E]/60 flex items-center gap-2"
                      >
                        <InstagramIcon className="w-3.5 h-3.5 text-[#E91C47]" />
                        <span>Instagram</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    )}
                    {member.spotifyUrl && (
                      <a
                        href={member.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-foca bg-[#FDF6E4] hover:bg-[#FDBC2E]/30 text-[#532E5A] text-xs py-2 px-4 border border-[#FDBC2E]/60 flex items-center gap-2"
                      >
                        <Music className="w-3.5 h-3.5 text-[#1DB954]" />
                        <span>Spotify</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linha do Tempo e Histórico com Fotos Reais de Quem somos/Historico */}
      <section className="bg-[#FDF6E4] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#E91C47]">
              Memória Viva • 2014 a Hoje
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#532E5A] uppercase">
              Histórico & Linha do Tempo
            </h2>
            <p className="text-[#532E5A]/80 max-w-xl mx-auto text-sm sm:text-base font-semibold">
              A trajetória do Coletivo Passarinha conectando saberes, escolas e
              comunidades pelo Brasil.
            </p>
          </div>

          <div className="relative border-l-4 border-[#FDBC2E] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {TIMELINE.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[35px] sm:-left-[51px] top-2 w-6 h-6 rounded-full bg-[#E91C47] border-4 border-[#FDF6E4] shadow-md group-hover:scale-125 transition-transform" />

                <div className="bg-white p-6 sm:p-8 rounded-[32px] shadow-md border-2 border-[#FDBC2E]/40 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div
                    className={
                      item.photoUrl
                        ? "md:col-span-7 space-y-3"
                        : "md:col-span-12 space-y-3"
                    }
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-black text-[#FDF6E4] bg-[#532E5A] px-3.5 py-1 rounded-full">
                        {item.year}
                      </span>
                      {item.tag && (
                        <span className="text-xs font-black text-[#E91C47] uppercase tracking-wider">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#532E5A]">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#532E5A]/85 leading-relaxed font-medium">
                      {item.description}
                    </p>

                    {item.location && (
                      <div className="flex items-center gap-1.5 text-xs text-[#F79335] font-black pt-1 uppercase tracking-wide">
                        <MapPin className="w-4 h-4 text-[#E91C47]" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>

                  {item.photoUrl && (
                    <div className="md:col-span-5">
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-4 border-[#FDF6E4] shadow-md">
                        <Image
                          src={item.photoUrl}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
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
