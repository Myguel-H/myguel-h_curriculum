import type { PersonalData, Experience, Certificate, Education, FutureProjects, Projects } from "./types";

export const personalData: PersonalData = {
  name: "Myguel Henryque Dachery do Prado",
  location: "Francisco Beltrão - PR",
  email: "myguelhenry05@gmail.com",
};

export const experiences: Experience[] = [
  {
    company: "Consórcio Intermunicipal de Saúde do Sudoeste do Paraná (CONSUD)",
    position: "Assistente Administrativo",
    sector: "Público",
    period: "2024 - Atual",
    description:
      "Atuações no setor de almoxarifado, Tecnologia e compras. Atualmente no setor de compras, responsável pela conferência de materiais provenientes de compras compartilhadas entre 27 municípios consorciados e do <a href='https://www.consorcioparanasaude.com.br/' style='text-decoration: none'>Programa Paraná Saúde.</a> Verificação de entregas, identificação de divergências, cobrança junto a fornecedores e organização de planilhas e documentos administrativos.",
  },
  {
    company: "Companhia de Bebidas das Américas (AMBEV)",
    position: "Assistente Administrativo (Aprendiz)",
    sector: "Privado",
    period: "ago/2023 - jul/2024",
    description:
      "Manipulação, atualização e manutenção de planilhas e dashboards para controle de processos e indicadores (KPIs). Suporte ao atendimento de clientes, auxiliando na resolução de problemas relacionados a entregas, pedidos e demandas operacionais.",
  },
  {
    company: "Associação Regional de Saúde do Sudoeste (ARSS)",
    position: "Assistente Administrativo (Aprendiz)",
    sector: "Público",
    period: "fev/2022 - fev/2023",
    description:
      "Organização e arquivamento de documentos, como folhas de pregões, atas e contratos. Organização física de documentos em caixas, conferências, carimbos e demais rotinas administrativas.",
  },
];


export const educations: Education[] = [
  {
    duration: "2023 - Atual",
    institution: "Universidade Tecnológica Federal do Paraná (UTFPR)",
    summary: "Graduação em Sistemas de Informação (em andamento, 6º período).",
  },
  {
    duration: "2020 - 2022",
    institution: "Colégio Estadual Tancredo Neves",
    summary: "Ensino Médio.",
  },
  {
    duration: "2017 - 2019",
    institution: "Colégio Estadual Tancredo Neves",
    summary: "Ensino Fundamental.",
  },
];

export const futuproj: FutureProjects[] = [
  {
    name: "testando",
    description: "testando121314313138913"
  },
];

export const proj: Projects[] = [
  {
    name: "Arphya",
    description: "Uma aplicação web em PHP e Postgresql com objetivo de disseminar conhecimento através de publicações e fontes confiáveis com gerenciamento para administradores.",
    link: "https://github.com/Myguel-H/Arphya.git",
  },

    {
    name: "Projeto - Sistemas Distribuído",
    description: "Sistema distribuído em Python, composto por cliente e servidor, simulando uma plataforma de pedidos e entrega de lanches. Desenvolvido como trabalho final da disciplina de Sistemas Distribuídos (2026/1), com responsabilidades divididas entre 23 alunos organizados em 8 setores: comunicação em rede, concorrência, segurança, tolerância a falhas, autenticação, processamento pesado, integração externa e documentação.",
    link: "https://github.com/jurandii/Projeto_final_Distribuidos_2026_1.git",
  },
    {
    name: "AgroGuia",
    description: "Projeto criado durante o hackathon da semana academica de Sistemas de Informação da UTFPR/FB, com o objetivo de auxiliar no gerenciamento de pequenos agricultores/colonos por parte da secretaria de agricultura. Isso levou a incubação de uma empresa pela sprint da UTPFR",
  },
    {
    name: "Arduino - Sensor de Aproximação",
    description: "Um projeto simples feito com Arduino que usa um sensor de proximidade para acionar um alarme quando um objeto é detectado.",
    link: "https://github.com/Myguel-H/Arduino_Sensor_Aproxima-o.git",
  },
    {
    name: "Arduino - Sistema de Sinaleiro",
    description: "Um projeto simples e facil de fazer com arduino. Objetivo é criar um sistema fisico com arduino fundamentado na ideia de um sinal de transito (vermelho, amarelo e verde). ",
    link: "https://github.com/Myguel-H/Arduino_Sistema_Sinaleiro.git",
  },
];

export const certificates: Certificate[] = [
  {
    name: "Lei Geral de Proteção de Dados e a Administração Pública",
    duration: "40h",
    institution: "Escola de Gestão do Paraná (EGP)",
  },
  {
    name: "Modalidades Licitatórias",
    duration: "2h",
    institution: "Escola de Gestão do Paraná (EGP)",
  },
  {
    name: "HTML e CSS: Ambientes de Desenvolvimento, Estrutura de Arquivos e Tags",
    duration: "8h",
    institution: "Caelum",
  },
  {
    name: "Praticando Java: Condicionais If e Else",
    duration: "4h",
    institution: "Caelum",
  },
  {
    name: "Java: Criando a Sua Primeira Aplicação",
    duration: "8h",
    institution: "Caelum",
  },
  {
    name: "HTML e CSS: Classes, Posicionamento e Flexbox",
    duration: "8h",
    institution: "Caelum",
  },
  {
    name: "Descomplicando o Computador: Instalação e Manutenção para Iniciantes",
    duration: "12h",
    institution: "UTFPR",
  },
  {
    name: "Editores de Textos",
    duration: "12h",
    institution: "UTFPR",
  },
  {
    name: "CSS: Flexbox e Layouts Responsivos",
    duration: "6h",
    institution: "Caelum",
  },
  {
    name: "Git e GitHub: Compartilhando e Colaborando em Projetos",
    duration: "8h",
    institution: "Caelum",
  },
  {
    name: "Java JRE e JDK: Compile e Execute o Seu Programa",
    duration: "8h",
    institution: "Caelum",
  },
  {
    name: "Lógica de Programação: Explore Funções e Listas",
    duration: "6h",
    institution: "Caelum",
  },
  {
    name: "Lógica de Programação: Mergulhe em Programação com JavaScript",
    duration: "6h",
    institution: "Caelum",
  },
  {
    name: "TypeScript Parte 1: Evoluindo Seu JavaScript",
    duration: "10h",
    institution: "Caelum",
  },
  {
    name: "Começando em Programação: Carreira e Primeiros Passos",
    duration: "1h",
    institution: "Caelum",
  },
  {
    name: "Programa Aprendiz Gerar",
    duration: "142h",
    institution: "GERAR",
  },
  {
    name: "Aprendizagem Profissional de Qualificação em Serviços Administrativos",
    duration: "1000h",
    institution: "SENAC/PR",
  },
];
