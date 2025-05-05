"use client";

import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import Link from "next/link";

export default function Home() {
  const texts = ['Full Stack Developer', 'Apaixonado por tecnologia', ''];
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const fullText = texts[textIndex];
    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );
      setSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex, speed]);

  return (
    <section id="home" className="md:pt-70 pt-40 pb-30 flex items-center justify-center bg-gradient-custom text-white px-4">
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
          <h1 className="md:text-[80px] text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            JOÃO VITOR
          </h1>

          <h2 className="text-3xl font-semibold text-gray-200">
            {displayedText}
            <span className="animate-blink">|</span>
          </h2>

          <div className="flex justify-center gap-3 mt-6 text-2xl text-gray-400 relative">
            <a
              href="/curriculo-jv-pt.pdf"
              download 
              title="Baixar Currículo"
              className="flex flex-col items-center relative"
            >
              <img
                src="images/logoCurriculo.svg"
                alt="Baixar Currículo"
                className="w-10 h-10 opacity-30 hover:opacity-100 transform hover:scale-110 hover:shadow-lg hover:shadow-[rgb(132_133_246)] transition-all duration-300 peer"
              />
              <span className="absolute top-12 5 bg-indigo-500 text-white text-xs px-2 py-1 rounded shadow opacity-0 peer-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                Baixar Currículo
              </span>
            </a>
          </div>


          <div className="mt-10">
            <Link
              href="#projetos"
              style={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderImage: 'linear-gradient(225deg, rgb(0, 144, 255) 0%, rgb(192, 1, 250) 100%) 1',
              }}
              className="inline-block px-6 py-4 border-2 border-purple-500 to-blue-500 rounded-md text-white font-semibold hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 transition duration-300"
            >
              Conheça meu portifólio →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
