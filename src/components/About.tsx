"use client";
import Image from "next/image";
import React from "react";


export default function About() {
  return (
    <section className="pt-60 flex items-center justify-center bg-[#0c1120] text-white px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 items-center gap-10">
        <div className="text-center">
          <p className="text-[24px] text-gray-400">
            Bem vindo <span className="inline-block animate-wiggle">👋</span>, eu sou
          </p>
          <h1 className="text-[80px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          JOÃO VITOR
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
          Desenvolvedor Full Stack
            <span className="animate-blink">|</span>
          </h2>
          <div className="flex justify-center gap-4 mt-4 text-2xl text-gray-400">
            <a href="/curriculo.pdf" target="_blank" title="Currículo">
              📄
            </a>
            <a href="https://github.com/seu-usuario" target="_blank" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/seu-usuario" target="_blank" title="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="mt-6">
            <a
              href="#portfolio"
              className="inline-block px-6 py-3 border-2 border-blue-500 rounded-md text-white font-semibold hover:bg-blue-500 transition duration-300"
            >
              Conheça meu portfólio →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
