"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  MessageCircle,
  Mail,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

export default function ContatoForm() {
  const searchParams = useSearchParams();
  const initialInteresse = searchParams
    ? searchParams.get("interesse") || ""
    : "";

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    interesse: initialInteresse || "Espetáculo Teatral",
    cidade: "",
    mensagem: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastChannel, setLastChannel] = useState<"whatsapp" | "email">("whatsapp");

  const buildMessageText = () => {
    return [
      `*Olá, Coletivo Passarinha!*`,
      ``,
      `Gostaria de solicitar informações/proposta pelo site:`,
      `• *Nome:* ${formData.nome}`,
      `• *E-mail:* ${formData.email}`,
      formData.telefone ? `• *Telefone/WhatsApp:* ${formData.telefone}` : null,
      formData.cidade ? `• *Cidade/Estado:* ${formData.cidade}` : null,
      `• *Área de Interesse:* ${formData.interesse}`,
      ``,
      `*Mensagem:*`,
      formData.mensagem,
    ]
      .filter((line) => line !== null)
      .join("\n");
  };

  const handleSendWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) {
      setErrorMessage(
        "Por favor, preencha todos os campos obrigatórios marcados com asterisco (Nome, E-mail e Mensagem)."
      );
      return;
    }

    setErrorMessage(null);
    const message = buildMessageText();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5519992510921?text=${encoded}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setLastChannel("whatsapp");
    setSubmitted(true);
  };

  const handleSendEmail = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) {
      setErrorMessage(
        "Por favor, preencha todos os campos obrigatórios marcados com asterisco (Nome, E-mail e Mensagem)."
      );
      return;
    }

    setErrorMessage(null);
    const subject = encodeURIComponent(
      `[Proposta Site] ${formData.interesse} - ${formData.nome}`
    );
    const body = encodeURIComponent(
      `Olá Coletivo Passarinha!\n\nNome: ${formData.nome}\nE-mail: ${formData.email}\nTelefone: ${formData.telefone}\nCidade: ${formData.cidade}\nInteresse: ${formData.interesse}\n\nMensagem:\n${formData.mensagem}`
    );
    const mailtoUrl = `mailto:coletivopassarinha@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setLastChannel("email");
    setSubmitted(true);
  };

  const handleCopy = () => {
    const text = buildMessageText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="lg:col-span-7 painel-rustico p-7 sm:p-10">
      {submitted ? (
        <div
          role="status"
          aria-live="polite"
          className="text-center py-8 sm:py-12 space-y-6"
        >
          <div className="w-16 h-16 mx-auto rounded-xl bg-[#3A1D40] text-[#FDBC2E] border border-[#3A1D40]/25 flex items-center justify-center shadow-md">
            <CheckCircle2 aria-hidden="true" className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#3A1D40] uppercase">
              {lastChannel === "whatsapp"
                ? "Mensagem Pronta no WhatsApp!"
                : "Aplicativo de E-mail Aberto!"}
            </h3>
            <p className="text-sm sm:text-base text-[#3A1D40]/90 max-w-md mx-auto font-medium leading-relaxed">
              {lastChannel === "whatsapp"
                ? "A conversa com a equipe do Coletivo Passarinha foi iniciada com os seus dados pré-preenchidos. Basta clicar em Enviar no WhatsApp."
                : "Seu cliente de e-mail foi acionado com os dados da mensagem. Se preferir, você também pode enviar direto pelo WhatsApp abaixo."}
            </p>
          </div>

          {/* Ações pós-envio */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => handleSendWhatsApp()}
              className="btn-foca bg-[#128C47] hover:bg-[#0E6F38] text-white text-xs sm:text-sm py-3 px-6 shadow-md"
            >
              <MessageCircle aria-hidden="true" className="w-4 h-4 fill-white stroke-[#128C47]" />
              Abrir no WhatsApp Novamente
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="btn-foca bg-[#FDF6E4] hover:bg-[#FDBC2E] text-[#3A1D40] text-xs sm:text-sm py-3 px-5 border border-[#3A1D40]/25"
            >
              {copied ? (
                <>
                  <Check aria-hidden="true" className="w-4 h-4 text-green-800" />
                  Copiado para Área de Transferência!
                </>
              ) : (
                <>
                  <Copy aria-hidden="true" className="w-4 h-4" />
                  Copiar Texto da Mensagem
                </>
              )}
            </button>
          </div>

          <div className="pt-4 border-t border-[#3A1D40]/15">
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs sm:text-sm font-bold text-[#E91C47] hover:underline"
            >
              ← Voltar e preencher outro formulário
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSendWhatsApp} noValidate className="space-y-6">
          <div>
            <span className="inline-block text-xs font-black uppercase px-3 py-1 rounded-md tracking-wider bg-[#E91C47] text-white mb-2">
              Proposta & Contratação
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#3A1D40] uppercase">
              Envie sua Proposta ou Dúvida
            </h2>
            <p className="text-xs sm:text-sm text-[#3A1D40]/85 mt-1 font-semibold">
              Preencha os campos abaixo. Você pode enviar diretamente para o WhatsApp do Coletivo Passarinha ou abrir em seu e-mail.
            </p>
          </div>

          {errorMessage && (
            <div
              role="alert"
              aria-live="assertive"
              className="p-4 rounded-xl bg-[#E91C47] text-white text-xs sm:text-sm font-bold shadow-md"
            >
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="contato-nome"
                className="text-xs font-black uppercase text-[#3A1D40] block"
              >
                Seu Nome ou Instituição *
              </label>
              <input
                id="contato-nome"
                name="nome"
                type="text"
                required
                aria-required="true"
                autoComplete="name"
                placeholder="Ex: Maria / SESC / Escola..."
                value={formData.nome}
                onChange={(e) => {
                  setFormData({ ...formData, nome: e.target.value });
                  if (errorMessage) setErrorMessage(null);
                }}
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#3A1D40]/25 focus:border-[#E91C47] text-sm text-[#3A1D40] font-semibold"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contato-email"
                className="text-xs font-black uppercase text-[#3A1D40] block"
              >
                E-mail para Retorno *
              </label>
              <input
                id="contato-email"
                name="email"
                type="email"
                required
                aria-required="true"
                autoComplete="email"
                placeholder="seuemail@exemplo.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errorMessage) setErrorMessage(null);
                }}
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#3A1D40]/25 focus:border-[#E91C47] text-sm text-[#3A1D40] font-semibold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="contato-telefone"
                className="text-xs font-black uppercase text-[#3A1D40] block"
              >
                Telefone / WhatsApp
              </label>
              <input
                id="contato-telefone"
                name="telefone"
                type="tel"
                autoComplete="tel"
                placeholder="(DDD) 99999-9999"
                value={formData.telefone}
                onChange={(e) =>
                  setFormData({ ...formData, telefone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#3A1D40]/25 focus:border-[#E91C47] text-sm text-[#3A1D40] font-semibold"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contato-cidade"
                className="text-xs font-black uppercase text-[#3A1D40] block"
              >
                Cidade / Estado do Evento
              </label>
              <input
                id="contato-cidade"
                name="cidade"
                type="text"
                autoComplete="address-level2"
                placeholder="Ex: Campinas / SP"
                value={formData.cidade}
                onChange={(e) =>
                  setFormData({ ...formData, cidade: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#3A1D40]/25 focus:border-[#E91C47] text-sm text-[#3A1D40] font-semibold"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contato-interesse"
              className="text-xs font-black uppercase text-[#3A1D40] block"
            >
              Área de Interesse ou Espetáculo *
            </label>
            <select
              id="contato-interesse"
              name="interesse"
              aria-required="true"
              value={formData.interesse}
              onChange={(e) =>
                setFormData({ ...formData, interesse: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-white border border-[#3A1D40]/25 focus:border-[#E91C47] text-sm text-[#3A1D40] font-bold"
            >
              <optgroup label="Espetáculos Teatrais & Cênicos">
                <option value="Espetáculo: Histórias que a Passarinha me contou">
                  Histórias que a Passarinha me contou (Infâncias/Livre)
                </option>
                <option value="Espetáculo: Plástico, um mito contemporâneo">
                  Plástico, um mito contemporâneo (Jovens/Adultos)
                </option>
                <option value="Espetáculo: Histórias do Bosque dos Guarantãs">
                  Histórias do Bosque dos Guarantãs (Passeio Cênico)
                </option>
                <option value="Espetáculo: Show Nascente">
                  Show Nascente (Música Brasileira)
                </option>
              </optgroup>
              <optgroup label="Práticas Formativas & Oficinas">
                <option value="Oficina: Ateliê Jogar Dentro">
                  Ateliê Jogar Dentro (Reaproveitamento Criativo)
                </option>
                <option value="Oficina: Ecobrinquedoteca Jogar Dentro">
                  Ecobrinquedoteca Jogar Dentro (Brincar Sustentável)
                </option>
                <option value="Oficina: Orquestra de Pandeiros">
                  Orquestra de Pandeiros (Educação Musical Coletiva)
                </option>
              </optgroup>
              <optgroup label="Outros Projetos & Parcerias">
                <option value="Ponto de Cultura Quintal Garatuja">
                  Ponto de Cultura Quintal Garatuja (Parcerias/Residências)
                </option>
                <option value="Audiovisual / Filmes">
                  Exibições Audiovisuais (A Caixa Mágica, etc.)
                </option>
                <option value="Outro assunto">Outro assunto / Parceria Geral</option>
              </optgroup>
            </select>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="contato-mensagem"
              className="text-xs font-black uppercase text-[#3A1D40] block"
            >
              Conte-nos sobre a proposta ou evento *
            </label>
            <textarea
              id="contato-mensagem"
              name="mensagem"
              required
              aria-required="true"
              rows={5}
              placeholder="Descreva detalhes como público estimado, espaço pretendido, datas de interesse ou qualquer dúvida..."
              value={formData.mensagem}
              onChange={(e) => {
                setFormData({ ...formData, mensagem: e.target.value });
                if (errorMessage) setErrorMessage(null);
              }}
              className="w-full px-4 py-3 rounded-lg bg-white border border-[#3A1D40]/25 focus:border-[#E91C47] text-sm text-[#3A1D40] font-medium resize-y"
            ></textarea>
          </div>

          {/* Botões Duplos de Envio */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              type="submit"
              className="btn-foca bg-[#128C47] hover:bg-[#0E6F38] text-white text-xs sm:text-sm py-3.5 px-6 flex-1 shadow-md"
            >
              <MessageCircle aria-hidden="true" className="w-4 h-4 fill-white stroke-[#128C47]" />
              Enviar Proposta via WhatsApp
            </button>

            <button
              type="button"
              onClick={handleSendEmail}
              className="btn-foca bg-[#3A1D40] hover:bg-[#532E5A] text-[#FDBC2E] text-xs sm:text-sm py-3.5 px-6 flex-1 shadow-md"
            >
              <Mail aria-hidden="true" className="w-4 h-4" />
              Enviar por E-mail
            </button>
          </div>

          <p className="text-[11px] text-center text-[#3A1D40]/75 font-semibold">
            Ao clicar, seus dados são organizados diretamente para atendimento da nossa equipe.
          </p>
        </form>
      )}
    </div>
  );
}
