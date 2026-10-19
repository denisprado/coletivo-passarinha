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

function ContatoForm() {
  const searchParams = useSearchParams();
  const initialInteresse = searchParams ? searchParams.get("interesse") || "" : "";

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    interesse: initialInteresse || "Oficina ou Espetáculo",
    mensagem: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato pelo Site: ${formData.interesse} - ${formData.nome}`);
    const body = encodeURIComponent(
      `Olá Coletivo Passarinha!\n\nNome: ${formData.nome}\nE-mail: ${formData.email}\nTelefone: ${formData.telefone}\nInteresse: ${formData.interesse}\n\nMensagem:\n${formData.mensagem}`
    );
    window.location.href = `mailto:coletivopassarinha@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#F2BF27]/30">
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#02BF9B] text-white flex items-center justify-center shadow-lg">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-[#22211E]">
            Mensagem Encaminhada!
          </h3>
          <p className="text-sm text-[#22211E]/80 max-w-md mx-auto">
            Seu cliente de e-mail foi aberto com os dados preenchidos para envio
            direto à nossa equipe. Em breve responderemos!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-foca bg-[#F21B54] hover:bg-[#d61346] text-white text-xs py-2.5 px-6"
          >
            Enviar Outra Mensagem
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-2xl font-black text-[#22211E] uppercase">
              Envie uma Proposta ou Dúvida
            </h2>
            <p className="text-xs text-[#22211E]/70 mt-1">
              Preencha o formulário abaixo para nos contar sobre o seu evento, escola ou festival.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-[#22211E]">
                Seu Nome *
              </label>
              <input
                type="text"
                required
                placeholder="Como podemos te chamar?"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#F2BF27]/40 focus:outline-none focus:ring-2 focus:ring-[#F21B54] text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-[#22211E]">
                E-mail para Resposta *
              </label>
              <input
                type="email"
                required
                placeholder="seuemail@exemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#F2BF27]/40 focus:outline-none focus:ring-2 focus:ring-[#F21B54] text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-[#22211E]">
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                placeholder="(19) 99999-9999"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#F2BF27]/40 focus:outline-none focus:ring-2 focus:ring-[#F21B54] text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase text-[#22211E]">
                Área de Interesse
              </label>
              <select
                value={formData.interesse}
                onChange={(e) => setFormData({ ...formData, interesse: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-[#F2BF27]/40 focus:outline-none focus:ring-2 focus:ring-[#F21B54] text-sm bg-white"
              >
                <option value="Espetáculo Teatral">Contratação de Espetáculo</option>
                <option value="Ateliê Jogar Dentro">Oficina: Ateliê Jogar Dentro</option>
                <option value="Ecobrinquedoteca">Oficina: Ecobrinquedoteca</option>
                <option value="Orquestra de Pandeiros">Oficina: Orquestra de Pandeiros</option>
                <option value="Projeto Aru">Projeto A História de Aru</option>
                <option value="Quintal Garatuja">Ponto de Cultura Quintal Garatuja</option>
                <option value="Outro Assunto">Outro Assunto / Parceria</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-[#22211E]">
              Sua Mensagem *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Conte um pouco sobre as datas previstas, público esperado, localidade ou suas dúvidas..."
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-[#F2BF27]/40 focus:outline-none focus:ring-2 focus:ring-[#F21B54] text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full btn-foca bg-[#F21B54] hover:bg-[#d61346] text-white text-sm py-3.5 flex items-center justify-center gap-2"
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
    <main className="w-full">
      {/* Header */}
      <section className="bg-[#F21B54] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-[#F2BF27]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider text-[#FAF7F0]">
            <Mail className="w-4 h-4" /> Vamos Conversar
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
            Entre em Contato
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
            Solicite um orçamento para espetáculos, oficinas, vivências de arte-educação
            ambiental ou venha conhecer o Quintal Garatuja em Campinas/SP.
          </p>
        </div>
      </section>

      {/* Grid de Contato */}
      <section className="bg-[#FAF7F0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Informações de Contato */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-black text-[#22211E] uppercase">
                Canais Diretos
              </h2>
              <p className="text-sm text-[#22211E]/80 leading-relaxed font-medium">
                Respondemos rapidamente por e-mail, redes sociais ou WhatsApp. Escolha o
                canal mais prático para você!
              </p>
            </div>

            <div className="space-y-4">
              {/* E-mail */}
              <div className="bg-white p-5 rounded-2xl border border-[#F2BF27]/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F21B54] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F21B54] uppercase tracking-wider block">
                    E-mail Principal
                  </span>
                  <a
                    href="mailto:coletivopassarinha@gmail.com"
                    className="text-sm font-bold text-[#22211E] hover:underline"
                  >
                    coletivopassarinha@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white p-5 rounded-2xl border border-[#F2BF27]/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#02BF9B] text-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#02BF9B] uppercase tracking-wider block">
                    WhatsApp para Produção
                  </span>
                  <a
                    href="https://wa.me/5519999999999?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20o%20Coletivo%20Passarinha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#22211E] hover:underline"
                  >
                    Falar com a Produção (Sassa)
                  </a>
                </div>
              </div>

              {/* Sede */}
              <div className="bg-white p-5 rounded-2xl border border-[#F2BF27]/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F2BF27] text-[#22211E] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F28F16] uppercase tracking-wider block">
                    Sede Física
                  </span>
                  <p className="text-sm font-bold text-[#22211E]">
                    Ponto de Cultura Quintal Garatuja
                  </p>
                  <p className="text-xs text-[#22211E]/70">Campinas / SP • Brasil</p>
                </div>
              </div>
            </div>

            {/* Redes no Instagram */}
            <div className="bg-white p-6 rounded-2xl border border-[#F2BF27]/30 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#22211E]/70">
                Acompanhe no Instagram
              </h3>
              <div className="space-y-2 text-xs font-bold">
                <a
                  href="https://www.instagram.com/coletivopassarinha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#F21B54] hover:underline"
                >
                  <InstagramIcon className="w-4 h-4" /> @coletivopassarinha (Coletivo Geral)
                </a>
                <a
                  href="https://www.instagram.com/quintalgaratuja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#02BF9B] hover:underline"
                >
                  <InstagramIcon className="w-4 h-4" /> @quintalgaratuja (Ponto de Cultura)
                </a>
                <a
                  href="https://www.instagram.com/aru.permacultura"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#F28F16] hover:underline"
                >
                  <InstagramIcon className="w-4 h-4" /> @aru.permacultura (Projeto Aru)
                </a>
              </div>
            </div>
          </div>

          {/* Formulário envolto em Suspense */}
          <Suspense fallback={<div className="lg:col-span-7 bg-white p-8 rounded-3xl animate-pulse">Carregando formulário...</div>}>
            <ContatoForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
