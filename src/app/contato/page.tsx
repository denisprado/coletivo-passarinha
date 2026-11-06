"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import BrushBanner from "@/components/BrushBanner";

function ContatoForm() {
  const searchParams = useSearchParams();
  const initialInteresse = searchParams
    ? searchParams.get("interesse") || ""
    : "";

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    interesse: initialInteresse || "Espetáculo Teatral",
    mensagem: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Contato pelo Site: ${formData.interesse} - ${formData.nome}`
    );
    const body = encodeURIComponent(
      `Olá Coletivo Passarinha!\n\nNome: ${formData.nome}\nE-mail: ${formData.email}\nTelefone: ${formData.telefone}\nInteresse: ${formData.interesse}\n\nMensagem:\n${formData.mensagem}`
    );
    window.location.href = `mailto:coletivopassarinha@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="lg:col-span-7 painel-rustico p-7 sm:p-10">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 mx-auto rounded-lg bg-[#3A1D40] text-[#FDBC2E] border border-[#3A1D40]/25 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-[#3A1D40] uppercase">
            Mensagem Encaminhada!
          </h3>
          <p className="text-sm sm:text-base text-[#3A1D40]/90 max-w-md mx-auto font-medium">
            Seu aplicativo de e-mail foi aberto com os dados preenchidos para
            envio direto à nossa equipe. Em breve responderemos!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-foca bg-[#E91C47] hover:bg-[#c8153b] text-white text-xs py-3 px-6"
          >
            Enviar Outra Mensagem
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#3A1D40] uppercase">
              Envie uma Proposta ou Dúvida
            </h2>
            <p className="text-xs sm:text-sm text-[#3A1D40]/85 mt-1 font-semibold">
              Preencha o formulário abaixo para nos contar sobre o seu evento,
              escola, SESC ou festival.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-[#3A1D40]">
                Seu Nome *
              </label>
              <input
                type="text"
                required
                placeholder="Como podemos te chamar?"
                value={formData.nome}
                onChange={(e) =>
                  setFormData({ ...formData, nome: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#3A1D40]/25 focus:outline-none focus:border-[#E91C47] text-sm text-[#3A1D40] font-semibold"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-[#3A1D40]">
                E-mail para Resposta *
              </label>
              <input
                type="email"
                required
                placeholder="seuemail@exemplo.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#3A1D40]/25 focus:outline-none focus:border-[#E91C47] text-sm text-[#3A1D40] font-semibold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-[#3A1D40]">
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                placeholder="(19) 99999-9999"
                value={formData.telefone}
                onChange={(e) =>
                  setFormData({ ...formData, telefone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#3A1D40]/25 focus:outline-none focus:border-[#E91C47] text-sm text-[#3A1D40] font-semibold"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-[#3A1D40]">
                Área de Interesse
              </label>
              <select
                value={formData.interesse}
                onChange={(e) =>
                  setFormData({ ...formData, interesse: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#3A1D40]/25 focus:outline-none focus:border-[#E91C47] text-sm text-[#3A1D40] font-bold"
              >
                <option value="Espetáculo Teatral">
                  Contratação de Espetáculo
                </option>
                <option value="Ateliê Jogar Dentro">
                  Oficina: Ateliê Jogar Dentro
                </option>
                <option value="Ecobrinquedoteca">
                  Oficina: Ecobrinquedoteca
                </option>
                <option value="Orquestra de Pandeiros">
                  Oficina: Orquestra de Pandeiros
                </option>
                <option value="Projeto Aru">Projeto A História de Aru</option>
                <option value="Quintal Garatuja">
                  Ponto de Cultura Quintal Garatuja
                </option>
                <option value="Outro Assunto">Outro Assunto / Parceria</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase text-[#3A1D40]">
              Sua Mensagem *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Conte um pouco sobre as datas previstas, público esperado, localidade ou suas dúvidas..."
              value={formData.mensagem}
              onChange={(e) =>
                setFormData({ ...formData, mensagem: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-white border border-[#3A1D40]/25 focus:outline-none focus:border-[#E91C47] text-sm text-[#3A1D40] font-semibold"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full btn-foca bg-[#E91C47] hover:bg-[#c8153b] text-[#FDF6E4] text-sm py-3.5"
          >
            <Send className="w-4 h-4" />
            <span>Enviar Mensagem ao Coletivo</span>
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContatoPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* Header em Textura Roxa Acrílica */}
      <section className="canvas-roxo py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#3A1D40]">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-[#FDBC2E] text-xs font-black uppercase tracking-wider text-[#3A1D40]">
            <Mail className="w-4 h-4" /> Vamos Conversar
          </div>
          <div>
            <BrushBanner color="crimson" shape="wave">
              <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FDBC2E]">
                Entre em Contato
              </h1>
            </BrushBanner>
          </div>
          <p className="text-base sm:text-xl text-[#FDBC2E] max-w-3xl mx-auto leading-relaxed font-semibold">
            Solicite um orçamento para espetáculos, oficinas, vivências de
            arte-educação ambiental ou venha conhecer o Quintal Garatuja em
            Campinas/SP.
          </p>
        </div>
      </section>

      {/* Grid de Contato em Textura Amarela Ipê Acrílica */}
      <section className="canvas-amarelo py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Informações de Contato */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-[#3A1D40] uppercase">
                Canais Diretos
              </h2>
              <p className="text-sm sm:text-base text-[#3A1D40] leading-relaxed font-semibold">
                Respondemos rapidamente por e-mail, redes sociais ou WhatsApp.
                Escolha o canal mais prático para você!
              </p>
            </div>

            <div className="space-y-4">
              {/* E-mail */}
              <div className="painel-rustico p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#E91C47] text-[#FDF6E4] border border-[#3A1D40]/25 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#E91C47] uppercase tracking-wider block">
                    E-mails Oficiais
                  </span>
                  <a
                    href="mailto:coletivopassarinha@gmail.com"
                    className="text-sm font-black text-[#3A1D40] hover:underline block"
                  >
                    coletivopassarinha@gmail.com
                  </a>
                  <a
                    href="mailto:garatuja.decultura@gmail.com"
                    className="text-xs font-bold text-[#3A1D40]/85 hover:underline block"
                  >
                    garatuja.decultura@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="painel-rustico p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#25D366] text-white border border-[#3A1D40]/25 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#3A1D40] uppercase tracking-wider block">
                    WhatsApp para Produção
                  </span>
                  <a
                    href="https://wa.me/5519992510921?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20com%20o%20Coletivo%20Passarinha."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-black text-[#3A1D40] hover:text-[#E91C47]"
                  >
                    (19) 99251-0921 • Falar com a Produção
                  </a>
                </div>
              </div>

              {/* Sede */}
              <div className="painel-rustico p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#FDBC2E] text-[#3A1D40] border border-[#3A1D40]/25 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#E91C47] uppercase tracking-wider block">
                    Sede Física
                  </span>
                  <p className="text-sm font-black text-[#3A1D40]">
                    Ponto de Cultura Quintal Garatuja
                  </p>
                  <p className="text-xs font-bold text-[#3A1D40]/85">
                    Rua São Miguel Arcanjo, 1520 • Campinas / SP
                  </p>
                </div>
              </div>
            </div>

            {/* Redes no Instagram */}
            <div className="painel-rustico p-6 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#3A1D40]">
                Acompanhe no Instagram
              </h3>
              <div className="space-y-2.5 text-xs sm:text-sm font-bold">
                <a
                  href="https://www.instagram.com/coletivopassarinha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E91C47] hover:underline"
                >
                  <InstagramIcon className="w-4 h-4" /> @coletivopassarinha
                  (Coletivo Geral)
                </a>
                <a
                  href="https://www.instagram.com/quintalgaratuja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#3A1D40] hover:underline"
                >
                  <InstagramIcon className="w-4 h-4" /> @quintalgaratuja (Ponto
                  de Cultura)
                </a>
                <a
                  href="https://www.instagram.com/aru.permacultura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E91C47] hover:underline"
                >
                  <InstagramIcon className="w-4 h-4" /> @aru.permacultura
                  (Projeto Aru)
                </a>
                <a
                  href="https://www.instagram.com/orquestra.pandeiros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#3A1D40] hover:underline"
                >
                  <InstagramIcon className="w-4 h-4" /> @orquestra.pandeiros
                  (Orquestra de Pandeiros)
                </a>
              </div>
            </div>
          </div>

          {/* Formulário envolto em Suspense */}
          <Suspense
            fallback={
              <div className="lg:col-span-7 painel-rustico p-8 animate-pulse">
                Carregando formulário...
              </div>
            }
          >
            <ContatoForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
