"use client"

import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";

export function ContentModule () {

  const modules = [
    {
      titulo: "Módulo 1",
      descricao: "Introdução à Lei Maria da Penha e contexto histórico.",
      detalhes: "Aqui você vai aprender a origem da Lei, sua importância e como ela transformou a proteção das mulheres no Brasil.",
    },
    {
      titulo: "Módulo 2",
      descricao: "Procedimentos jurídicos na prática.",
      detalhes: "Explicação passo a passo de como funcionam os processos, medidas protetivas e atuação prática no dia a dia jurídico.",

    },
    {
      titulo: "Módulo 3",
      descricao: "Acolhimento e defesa de vítimas.",
      detalhes: "Técnicas de acolhimento, atendimento humanizado e boas práticas para lidar com vítimas de violência de gênero.",

    },
    {
      titulo: "Módulo 4",
      descricao: "Estudos de casos reais e estratégias de atuação.",
      detalhes: "Análise de casos concretos e estratégias eficazes para advogadas criminalistas atuarem com segurança e resultado.",

    },
    {
      titulo: "Módulo 5",
      descricao: "Aspectos psicológicos e sociais da violência de gênero.",
      detalhes: "Entendimento das consequências sociais e psicológicas, com insights de especialistas convidados.",

    },
  ];

  const [openModal, setOpenModal] = useState(false);
  const[moduleSelect, setModuleSelect] = useState(null);

  const openingModal = (module) => {
    setModuleSelect(module);
    setOpenModal(true);
  }

  return (
    <section id="contentCourse" className="px-6 py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A8A] mb-12">
        O que você vai aprender no curso
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto cursor-pointer">
        {modules.map((module, index) => (
          <div
            key={index}
            onClick={() => openingModal(module)}
            className="p-6 bg-white rounded-2xl shadow-md border-l-4 border-[#DB2777] hover:shadow-xl transition"
          >
            <h3 className="md:text-3xl font-semibold text-[#DB2777] mb-2">
              {module.titulo}
            </h3>
            <p className="md:text-lg text-gray-700">{module.descricao}</p>
          </div>
        ))}
      </div>
      
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>
          <div className="text-2xl text-[#DB2777]">
            {moduleSelect?.titulo}
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="text-lg space-y-6 text-gray-700">
            {moduleSelect?.detalhes}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="pink" onClick={() => setOpenModal(false)}>Fechar</Button>
        </ModalFooter>
      </Modal>
    </section>
  );
}
