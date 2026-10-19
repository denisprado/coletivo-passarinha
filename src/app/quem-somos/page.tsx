import React from "react";
import Link from "next/link";
import { TEAM_MEMBERS, TIMELINE } from "@/data/siteData";
import {
  Users,
  Calendar,
  Sparkles,
  ExternalLink,
  Download,
  MapPin,
  FileText,
} from "lucide-react";

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-white">
            <Users className="w-4 h-4" /> Nossa Trajetória
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Quem Somos
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
            Somos artistas da cena, música, design e permacultura. Há mais de uma década,
            realizamos ações de arte-educação ambiental em projetos itinerantes e conservando
            relações vivas com os territórios.
          </p>
        </div>
      </section>

      {/* Manifesto / Apresentação */}
      <section className="bg-[#FAF7F0] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F2BF27]/30">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#F2BF27]/30 space-y-4 text-base sm:text-lg text-[#22211E]/90 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-black text-[#F21B54] uppercase">
              Para Crianças de Zero a Cem Anos
            </h2>
            <p>
              Trabalhamos com e para pessoas de todas as idades. Também discutimos bastante sobre as
              problemáticas relacionadas ao lixo e essa sociedade do consumo e do descarte — que nos
              apavora, mas também nos mobiliza a criar!
            </p>
            <p>
              Fundado em 2014, o <strong>Coletivo Passarinha</strong> promoveu sua primeira ação em
              Campinas/SP: o evento <em>“Grafite na praça”</em>, uma intervenção artística como
              preparação para a jornada que ganharia as estradas do Brasil a bordo de uma Kombi Safari.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/drive/folders/1kFoF2oxH-wlFktXUD7yhyQoL7Kjft55Y"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#F21B54] hover:bg-[#d61346] text-white text-sm"
              >
                <Download className="w-4 h-4" /> Acessar Portfólio Geral (Drive)
              </a>
              <a
                href="https://drive.google.com/drive/folders/1kFoF2oxH-wlFktXUD7yhyQoL7Kjft55Y"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-white hover:bg-neutral-100 text-[#22211E] border-2 border-[#02BF9B] text-sm"
              >
                <FileText className="w-4 h-4 text-[#02BF9B]" /> Ver Clipping de Imprensa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe / As Passarinhas */}
      <section className="bg-[#02BF9B] text-white py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F2BF27]">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-[#F2BF27]">
              <Sparkles className="w-4 h-4" /> Criadoras & Pesquisadoras
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase">
              As Passarinhas
            </h2>
            <p className="text-white/90 max-w-xl mx-auto text-sm sm:text-base">
              Conheça as pessoas que colocam as ideias para voar, misturando linguagens, música,
              teatro, palhaçaria e educação ambiental.
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
                      className={`w-16 h-16 rounded-2xl ${member.avatarColor} text-white flex items-center justify-center font-black text-2xl shadow-md shrink-0`}
                    >
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[#22211E]">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-[#F21B54] uppercase tracking-wider">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="text-sm text-[#22211E]/85 leading-relaxed space-y-2 whitespace-pre-line">
                    {member.bio}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center gap-3">
                  {member.portfolioUrl && (
                    <a
                      href={member.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#02BF9B] hover:text-[#F21B54] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Portfólio</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.curriculoUrl && (
                    <a
                      href={member.curriculoUrl}
                      className="text-xs font-bold text-[#F28F16] hover:text-[#F21B54] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Currículo Lattes</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linha do Tempo / Histórico */}
      <section className="bg-[#FAF7F0] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2BF27]/20 text-[#22211E] text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-[#F28F16]" /> Linha do Tempo
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#22211E] uppercase">
              Histórico das Nossas Ações (2014 – Presente)
            </h2>
            <p className="text-[#22211E]/75 text-sm sm:text-base">
              Uma década de itinerâncias, pesquisas com a comunidade, editais públicos e criação artística.
            </p>
          </div>

          <div className="relative border-l-4 border-[#F28F16] ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
            {TIMELINE.map((item, index) => (
              <div key={index} className="relative group">
                {/* Marcador */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#FAF7F0] border-4 border-[#F28F16] group-hover:scale-125 group-hover:bg-[#F2BF27] transition-all" />

                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#F2BF27]/30 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xl sm:text-2xl font-black text-[#F21B54]">
                      {item.year}
                    </span>
                    {item.tag && (
                      <span className="bg-[#02BF9B]/10 text-[#02BF9B] text-xs font-bold px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#22211E]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#22211E]/80 leading-relaxed">
                    {item.description}
                  </p>
                  {item.location && (
                    <div className="flex items-center gap-1 text-xs text-[#F28F16] font-semibold pt-1">
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
