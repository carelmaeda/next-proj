"use client";

import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Import the check-circle icon

const Pricing = () => {
  const [selectedPlan] = useState("pro");

  const plans = [
    {
      id: "tier1",
      name: "Básico",
      description:
        "Para pequenas empresas que precisam estar ativas nas redes sociais",
      price: "R$1.000",
      features: [
        "Gestão de 1 perfil",
        "8 posts/mês",
        "Legendas estratégicas e persuasivas",
        "Planejamento de conteúdo",
        "Relatório de desempenho",
        "Postagem por conta do cliente",
      ],
    },
    {
      id: "tier2",
      name: "Intermediário",
      description: "Para marcas que desejam aumentar sua visibilidade",
      price: "R$2.000",
      features: [
        "Gestão de até 2 perfis",
        "12 posts/mês",
        "Legendas estratégicas e persuasivas",
        "Monitoramento e resposta a comentários/mensagens",
        "Planejamento de conteúdo",
        "Relatório de desempenho",
        "Criação de material gráfico ou digital",
        "Programação de postagem e acesso às redes sociais.",
      ],
    },
    {
      id: "tier3",
      name: "Premium",
      description:
        "Para negócios que querem uma estratégia completa para atrair e converter clientes",
      price: "R$3.000",
      features: [
        "Gestão de até 2 perfis",
        "20 posts/mês",
        "Legendas estratégicas e persuasivas",
        "Monitoramento e resposta a comentários/mensagens",
        "Planejamento de conteúdo",
        "Relatório de desempenho quinzenal",
        "Gestão de campanhas e patrocinados",
        "Acompanhamento de performance e leads gerados",
        "Webdesign (wix, nuvemshop, hostinger)",
      ],
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <h2 className="text-center mb-4">Planos</h2>
      <div className="row">
        {plans.map((plan) => (
          <div key={plan.id} className="col-lg-4 mb-3 d-flex">
            <div
              className={`card p-4 shadow-lg d-flex flex-column h-100 ${
                selectedPlan === plan.id ? "border-primary" : ""
              }`}
            >
              <h4 className="card-title">{plan.name}</h4>
              <small>{plan.description}</small>

              <div className="my-4">
                <span className="display-6">{plan.price}</span>
                <small>/mês</small>
              </div>

              <div className="flex-grow-1">
                <ul className="list-unstyled d-grid gap-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="d-flex align-items-center gap-2">
                      <FaCheckCircle className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="btn btn-primary mt-3" onClick={scrollToContact}>
                Fala Comigo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
