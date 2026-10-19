import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Heart } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-[#22211E] text-[#FAF7F0] border-t-4 border-[#F2BF27] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1: Sobre */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 shadow-md flex items-center justify-center border-2 border-[#F2BF27]">
                <Image
                  src="/logo-passarinha.jpg"
                  alt="Coletivo Passarinha"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-base tracking-wide uppercase text-white">
                  Coletivo Passarinha
                </h3>
                <span className="text-[11px] text-[#F2BF27] font-bold uppercase tracking-wider block">
                  Arte • Educação • Ambiental
                </span>
              </div>
            </div>
            <p className="text-sm text-[#FAF7F0]/80 leading-relaxed">
              Arte, educação ambiental e cultura popular desde 2014. Criações cênicas,
              oficinas itinerantes, brinquedos de resíduos reaproveitados e permacultura.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#F2BF27]">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Sede: Quintal Garatuja • Campinas / SP</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm tracking-wider uppercase text-[#F2BF27]">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF7F0]/80">
              <li>
                <Link href="/quem-somos" className="hover:text-white transition-colors">
                  • Quem Somos & Histórico
                </Link>
              </li>
              <li>
                <Link href="/quintal-garatuja" className="hover:text-white transition-colors">
                  • Ponto de Cultura Quintal Garatuja
                </Link>
              </li>
              <li>
                <Link href="/aru" className="hover:text-white transition-colors">
                  • A História de Aru (E-book)
                </Link>
              </li>
              <li>
                <Link href="/espetaculos" className="hover:text-white transition-colors">
                  • Espetáculos Cênicos
                </Link>
              </li>
              <li>
                <Link href="/oficinas" className="hover:text-white transition-colors">
                  • Oficinas & Ecobrinquedoteca
                </Link>
              </li>
              <li>
                <Link href="/audiovisual" className="hover:text-white transition-colors">
                  • Produções Audiovisuais
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Nossas Redes Sociais */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm tracking-wider uppercase text-[#F2BF27]">
              Instagram & Redes
            </h4>
            <div className="flex flex-col space-y-2.5">
              <a
                href="https://www.instagram.com/coletivopassarinha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#FAF7F0]/90 hover:text-[#F21B54] transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-[#FAF7F0]/10 flex items-center justify-center group-hover:bg-[#F21B54] text-white transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <span>@coletivopassarinha</span>
              </a>

              <a
                href="https://www.instagram.com/quintalgaratuja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#FAF7F0]/90 hover:text-[#02BF9B] transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-[#FAF7F0]/10 flex items-center justify-center group-hover:bg-[#02BF9B] text-white transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <span>@quintalgaratuja</span>
              </a>

              <a
                href="https://www.instagram.com/aru.permacultura"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#FAF7F0]/90 hover:text-[#F28F16] transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-[#FAF7F0]/10 flex items-center justify-center group-hover:bg-[#F28F16] text-white transition-colors">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <span>@aru.permacultura</span>
              </a>
            </div>
          </div>

          {/* Coluna 4: Contato Direto */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm tracking-wider uppercase text-[#F2BF27]">
              Contato & Contratação
            </h4>
            <p className="text-xs text-[#FAF7F0]/70">
              Disponível para festivais, escolas, SESCs, semanas do meio ambiente e eventos comunitários.
            </p>
            <a
              href="mailto:coletivopassarinha@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#F21B54] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F2BF27]" />
              <span>coletivopassarinha@gmail.com</span>
            </a>
            <div className="pt-2">
              <Link
                href="/contato"
                className="btn-foca bg-[#F21B54] hover:bg-[#d61346] text-white text-xs w-full py-2.5"
              >
                Solicitar Proposta
              </Link>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright */}
        <div className="border-t border-[#FAF7F0]/15 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F0]/60 gap-3">
          <p>© 2026 Coletivo Interdisciplinar Passarinha. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-[#F21B54] fill-current" /> arte, educação e permacultura.
          </p>
        </div>
      </div>
    </footer>
  );
}
