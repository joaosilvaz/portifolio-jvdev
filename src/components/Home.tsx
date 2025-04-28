"use client";

import Image from "next/image";
import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section id="home" className="pt-60 pb-30 flex items-center justify-center bg-[linear-gradient(90deg,_rgb(3,7,18)_0%,_rgb(30,30,37)_35%,_rgb(6,5,5)_100%)] text-white px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[24px] text-gray-400">
            Bem vindo <span className="inline-block animate-wiggle">👋</span>, eu sou
          </p>
          <h1 className="text-[80px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            JOÃO VITOR
          </h1>
          <h2 className="text-3xl font-semibold text-gray-200">
            Desenvolvedor Full Stack
            <span className="animate-blink">|</span>
          </h2>

          <div className="flex justify-center gap-4 mt-6 text-2xl text-gray-400">
            <a href="/curriculo-jv.pdf" target="_blank" title="Baixar Currículo">
              <img
                src="images/logoCurriculo.svg"
                alt="Baixar Currículo"
                className="w-10 h-10 opacity-30 hover:opacity-100 transform hover:scale-110 hover:shadow-lg hover:shadow-[rgb(132_133_246)] transition-all duration-300"
              />
            </a>
          </div>

          <div className="mt-8">
            <a
              href="#portfolio"
              className="inline-block px-6 py-4 border-2 border-blue-500 rounded-md text-white font-semibold hover:bg-blue-500 transition duration-300"
            >
              Conheça meu portfólio →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
