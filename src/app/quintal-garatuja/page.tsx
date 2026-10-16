import React from "react";
import Link from "next/link";
import {
  Home,
  MapPin,
  Sparkles,
  Heart,
  Trees,
  Theater,
  Users,
  Download,
  FileText,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export const metadata = {
  title: "Ponto de Cultura Quintal Garatuja | Coletivo Passarinha",
  description:
    "Espaço de criação artística, formação teatral, cultura popular e educação ambiental com gestão do Coletivo Passarinha desde 2016 em Campinas/SP.",
};

export default function QuintalGaratujaPage() {
  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-[#2e6f40] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#e5a823]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-[#e5a823]">
            <Home className="w-4 h-4" /> Sede em Campinas / SP
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Ponto de Cultura Quintal Garatuja
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Um ninho de criação artística, formação e convivência comunitária no coração de Campinas.
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="bg-[#faf7f0] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#e2d8c3]">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Box de Apresentação */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-[#e2d8c3] space-y-6 text-base sm:text-lg text-[#22211e]/90 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-black text-[#2e6f40] uppercase">
              O Quintal como Espaço de Encontro
            </h2>
            <p>
              Desde 2016, a Passarinha faz a gestão do <strong>Ponto de Cultura Quintal Garatuja</strong>,
              na cidade de Campinas/SP. O espaço nasceu do desejo de fincar raízes e criar um território fértil
              para a produção cultural independente, o diálogo com os vizinhos e a celebração das tradições
              populares brasileiras.
            </p>
            <p>
              Em diálogo constante com a comunidade e o território local, o Garatuja desenvolve cursos livres,
              oficinas de formação, ensaios abertos, apresentações cênico-musicais e projetos que aproximam o
              teatro, a música, as brincadeiras tradicionais e a educação ambiental.
            </p>

            <div className="bg-[#faf7f0] p-6 rounded-2xl border-l-4 border-[#2e6f40] space-y-2">
              <h3 className="font-bold text-[#2e6f40] text-lg">
                Pesquisas e Eixos de Ação do Garatuja:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#22211e]/85 pt-2">
                <li className="flex items-center gap-2">
                  <Theater className="w-4 h-4 text-[#c85028]" /> Formação Teatral & Mediação
                </li>
                <li className="flex items-center gap-2">
                  <Trees className="w-4 h-4 text-[#2e6f40]" /> Educação Ambiental & Permacultura
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#e5a823]" /> Difusão Musical Popular
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#c85028]" /> Acessibilidade Cultural
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#1b7a82]" /> Fortalecimento de Redes de Artistas
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#583259]" /> Memória Local & Bosque dos Guarantãs
                </li>
              </ul>
            </div>

            <p>
              Em 2019, o Quintal Garatuja foi contemplado com projeto via <strong>Lei Cultura Viva</strong>,
              pela Prefeitura Municipal de Campinas. Na ocasião, foram promovidas mais de 30 ações envolvendo
              teatro e brincadeiras, articulando escolas municipais, artistas parceiros e outros Pontos de
              Cultura em todo o território vizinho.
            </p>

            {/* Links Rápidos */}
            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-[#e2d8c3]">
              <a
                href="https://www.instagram.com/quintalgaratuja"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-[#2e6f40] hover:bg-[#235431] text-white text-sm"
              >
                <InstagramIcon className="w-4 h-4" /> Seguir @quintalgaratuja
              </a>
              <a
                href="https://drive.google.com/drive/folders/1kFoF2oxH-wlFktXUD7yhyQoL7Kjft55Y"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-white hover:bg-neutral-100 text-[#22211e] border border-[#e2d8c3] text-sm"
              >
                <Download className="w-4 h-4 text-[#c85028]" /> Portfólio do Espaço
              </a>
              <a
                href="https://drive.google.com/drive/folders/1kFoF2oxH-wlFktXUD7yhyQoL7Kjft55Y"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-foca bg-white hover:bg-neutral-100 text-[#22211e] border border-[#e2d8c3] text-sm"
              >
                <FileText className="w-4 h-4 text-[#e5a823]" /> Clipping
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
