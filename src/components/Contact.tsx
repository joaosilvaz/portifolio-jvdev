'use client';

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_b8ki7z8",           // ID do serviço
        "template_z4i5biq",          // ID do template
        form.current,                // formulário
        "37BPOmmry-S_0f_GY"     // substitua pela sua chave pública do EmailJS
      )
      .then(() => {
        setStatus("Mensagem enviada com sucesso!");
        form.current?.reset();
      })
      .catch(() => {
        setStatus("Erro ao enviar. Tente novamente.");
      });
  };

  return (
    <motion.section
      id="contato"
      className="min-h-screen flex flex-col items-center justify-center bg-[linear-gradient(90deg,_rgb(3,7,18)_0%,_rgb(30,30,37)_35%,_rgb(6,5,5)_100%)] px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-lg w-full space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-white">Contato</h2>
          <p className="text-gray-400 mt-2">
            Vamos conversar! Estou aberto a parcerias e novos projetos.
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-4 text-center">
          <input
            type="text"
            name="title"
            placeholder="Título"
            required
            className="w-full p-3 bg-[#1c2536] text-white rounded-md outline-none placeholder-gray-400"
          />
          <input
            type="text"
            name="joao"
            placeholder="Seu nome"
            required
            className="w-full p-3 bg-[#1c2536] text-white rounded-md outline-none placeholder-gray-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            required
            className="w-full p-3 bg-[#1c2536] text-white rounded-md outline-none placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            rows={5}
            required
            className="w-full p-3 bg-[#1c2536] text-white rounded-md outline-none placeholder-gray-400"
          ></textarea>

          <button
            type="submit"
            className="w-fit px-6 py-2 font-medium text-white rounded-md bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:opacity-90 transition cursor-pointer"
          >
            Enviar mensagem
          </button>

          {status && <p className="text-sm text-gray-300 mt-2">{status}</p>}
        </form>
      </div>
    </motion.section>
  );
}
