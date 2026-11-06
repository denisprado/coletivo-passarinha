import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TEAM_MEMBERS, TIMELINE } from "@/data/siteData";
import {
  Users,
  Calendar,
  Sparkles,
  ExternalLink,
  MapPin,
  Heart,
  Music,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export const metadata = {
  title: "Quem Somos & Histórico | Coletivo Passarinha",
  description:
    "Conheça a trajetória do Coletivo Passarinha desde 2014, nossas pesquisas em arte, educação ambiental e as artistas integrantes.",
};

export default function QuemSomosPage() {
  return (
    <main className="w-full">
      {/* Header da Página */}
      <section className="bg-[#F21B54] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F2BF27]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 text-xs font-black uppercase tracking-wider text-white">
            <Users className="w-4 h-4 text-[#F2BF27]" /> Quem Somos
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Coletivo Passarinha
          </h1>
          <p className="text-base sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-semibold">
            Plataforma de criação, articulação e circulação artística, conectando linguagens, saberes, pessoas e territórios desde 2014.
          </p>
        </div>
      </section>

      {/* Manifesto e Apresentação Oficial */}
      <section className="bg-[#FAF7F0] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F2BF27]/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border-2 border-[#F2BF27]/40 space-y-6 text-base sm:text-lg text-[#22211E]/90 leading-relaxed font-medium">
            <h2 className="text-2xl sm:text-3xl font-black text-[#F21B54] uppercase">
              Arte, Educação Ambiental & Território
            </h2>
            <p>
              Somos o <strong>Coletivo Interdisciplinar Passarinha</strong>, artistas da cena, música, design e permacultura. Há anos, realizamos ações de arte educação ambiental em projetos itinerantes e também conservando relações com territórios.
            </p>
            <p>
              Promovemos práticas artísticas e discutimos urgências socioambientais relacionadas a essa sociedade do consumo e do descarte — que nos mobiliza a criar outras poéticas e modos de estar no mundo.
            </p>
            <p>
              O Coletivo Passarinha trabalha em várias frentes e em diferentes lugares. Somos uma plataforma de criação e circulação, que tem a inclusão e atenção às problemáticas socioambientais como temáticas transversais. Temos interesse em costurar nossas práticas de arte e cultura com os lugares e pessoas que cruzamos. Fazemos arte educação ambiental desde 2014.
            </p>
            <p className="text-sm sm:text-base text-[#22211E]/80 bg-[#FAF7F0] p-6 rounded-2xl border-l-4 border-[#02BF9B]">
              Trabalhamos em parceria com instituições públicas e particulares, com Pontos de Cultura e outros espaços culturais. Já realizamos projetos com apoio de esferas federais, estaduais, municipais e de alianças internacionais, sempre entregando excelência em todas as ações realizadas.
            </p>
          </div>
        </div>
      </section>

      {/* As Passarinhas / Integrantes */}
      <section className="bg-[#02BF9B] text-white py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F2BF27]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-[#F2BF27]">
              <Sparkles className="w-4 h-4" /> Equipe & Criadoras
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white">
              As Passarinhas
            </h2>
            <p className="text-white/90 max-w-xl mx-auto text-sm sm:text-base font-medium">
              Conheça as artistas e pesquisadoras que dão vida aos projetos, espetáculos e práticas formativas do coletivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white text-[#22211E] rounded-3xl p-8 shadow-xl border-2 border-white/40 flex flex-col justify-between space-y-6 hover:shadow-2xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl ${member.avatarColor} text-white font-black text-xl flex items-center justify-center shadow-md`}
                    >
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#22211E]">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-[#F28F16] uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#22211E]/85 leading-relaxed whitespace-pre-line font-medium">
                    {member.bio}
                  </p>
                </div>

                {/* Links Sociais / Portfólio do Integrante */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3">
                  {member.instagramUrl && (
                    <a
                      href={member.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-foca bg-[#FAF7F0] hover:bg-gray-100 text-[#22211E] text-xs py-2 px-4 border border-gray-200 flex items-center gap-2"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 text-[#F21B54]" />
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                    </a>
                  )}
                  {member.spotifyUrl && (
                    <a
                      href={member.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-foca bg-[#FAF7F0] hover:bg-gray-100 text-[#22211E] text-xs py-2 px-4 border border-gray-200 flex items-center gap-2"
                    >
                      <Music className="w-3.5 h-3.5 text-[#1DB954]" />
                      <span>Spotify</span>
                      <ExternalLink className="w-3 h-3 text-gray-400" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linha do Tempo e Histórico com Fotos */}
      <section className="bg-[#FAF7F0] py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#22211E]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#F28F16]">
              Desde 2014 na Estrada
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#22211E]">
              Histórico & Linha do Tempo
            </h2>
            <p className="text-[#22211E]/80 max-w-xl mx-auto text-sm sm:text-base font-medium">
              A trajetória do Coletivo Passarinha conectando saberes pelo Brasil.
            </p>
          </div>

          <div className="relative border-l-4 border-[#F2BF27] ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
            {TIMELINE.map((item, index) => (
              <div key={index} className="relative group">
                {/* Marcador */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#F21B54] border-4 border-white shadow-md group-hover:scale-125 transition-transform" />

                <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-[#F2BF27]/30 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-black text-[#F21B54] bg-[#FAF7F0] px-3 py-1 rounded-full border border-[#F21B54]/20">
                      {item.year}
                    </span>
                    {item.tag && (
                      <span className="text-xs font-bold text-[#02BF9B] uppercase tracking-wider">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-black text-[#22211E]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#22211E]/80 leading-relaxed font-medium">
                    {item.description}
                  </p>

                  {item.location && (
                    <div className="flex items-center gap-1.5 text-xs text-[#F28F16] font-bold pt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
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
