"use client";

import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Curso Lei Maria da Penha
          </h2>
          <p className="text-gray-400">
            Domine todas as técnicas necessárias para advogar em defesa das mulheres.
          </p>
        </div>

        {/* Coluna 2 - Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Navegação</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-400">Início</a></li>
            <li><a href="#sobre" className="hover:text-blue-400">Sobre</a></li>
            <li><a href="#curso" className="hover:text-blue-400">Curso</a></li>
            <li><a href="#faq" className="hover:text-blue-400">Perguntas Frequentes</a></li>
          </ul>
        </div>

        {/* Coluna 3 - Contato / Redes */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contato</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-blue-400"><Facebook size={22} /></a>
            <a href="#" className="hover:text-blue-400"><Instagram size={22} /></a>
            <a href="#" className="hover:text-blue-400"><Linkedin size={22} /></a>
            <a href="mailto:contato@seudominio.com" className="hover:text-blue-400"><Mail size={22} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Curso Lei Maria da Penha. Todos os direitos reservados.
      </div>
    </footer>
  );
}
