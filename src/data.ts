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
      "Atuações no setor de almoxarifado, Tecnologia e compras. Atualmente no setor de compras, responsável pela conferência de materiais provenientes de compras compartilhadas entre 27 municípios consorciados e do <a href='https://www.consorcioparanasaude.com.br/' style='text-decoration: none'>Programa Paraná Saúde.</a> Verificação de entregas, identificação de divergências, cobrança junto a fornecedores e organização de planilhas e documentos administrativos. ",
      link: ""
  },
  {
    company: "Companhia de Bebidas das Américas (AMBEV)",
    position: "Assistente Administrativo (Aprendiz)",
    sector: "Privado",
    period: "ago/2023 - jul/2024",
    description:
      "Manipulação, atualização e manutenção de planilhas e dashboards para controle de processos e indicadores (KPIs). Suporte ao atendimento de clientes, auxiliando na resolução de problemas relacionados a entregas, pedidos e demandas operacionais.",
      link: "/certificates/certificados-avulso/GERAR-Menor-Aprendiz-25092024.pdf"
  },
  {
    company: "Associação Regional de Saúde do Sudoeste (ARSS)",
    position: "Assistente Administrativo (Aprendiz)",
    sector: "Público",
    period: "fev/2022 - fev/2023",
    description:
      "Organização e arquivamento de documentos, como folhas de pregões, atas e contratos. Organização física de documentos em caixas, conferências, carimbos e demais rotinas administrativas.",
      link: "/certificates/certificados-avulso/SENAC-Menor-Aprendiz-14022023.pdf"
  },
];

export const educations: Education[] = [
  {
    duration: "2023 - Atual",
    institution: "Universidade Tecnológica Federal do Paraná (UTFPR)",
    summary: "Graduação em Sistemas de Informação (em andamento, 7º período).",
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
    name: "Desenvolvimento de uma aplicação web para disseminação e publicação de conteúdo técnico entre desenvolvedores iniciantes",
    description: "Idealização de um projeto para incentivar novos desenvolvedores. Muitas das vezes o iniciante não sabem por onde começar ou se perdem no caminho pela quantidade de informação em abundancia, isso acarreta na desistência de muitos.",
  },
  {
    name: "Criação de um robô 2WD com arduino e qualquer coisa que eu achar no ferro velho ou no chão do meu quarto",
    description: "Desenvolvimento de um robô de duas rodas motrizes focado em hardware livre. O objetivo é demonstrar que a robótica é acessível a todos, utilizando materiais recicláveis, sucata eletrônica e componentes de baixo custo para estimular a criatividade, a resolução de problemas e o aprendizado prático de programação e eletrônica.",
  },
];

export const proj: Projects[] = [
  {
    name: "Arphya",
    description: "Uma aplicação web em PHP e Postgresql com objetivo de disseminar conhecimento através de publicações e fontes confiáveis com gerenciamento para administradores.",
    link: "<a href='https://github.com/Myguel-H/Arphya.git'>Link do Projeto</a>",
  },
  {
    name: "Find your Certificate",
    description: "Um app para estudantes da utfpr que queiram buscar seus certificados e não lembram quais palestrar ou eventos participaram. Leia o README (Documentação).",
    link: "<a href='http://gitea.arphya.com.br/Myguel/Utfpr-Search-Certificate.git'>Link do Projeto</a>",
  },
  {
    name: "Gestão Atas - Compras",
    description: "Projetinho simples usando LLM para ajudar meus companheiros(a) nas conferencias de caixas no setor de compras-CONSUD. Um script em Typescript lê o padrão de ata Nova/Antiga e retorna a opção de inserir no banco de dados(NeonDb) os itens(descritivo, marca, produto e unid. méd. ). Assim agilizando o serviço de idas e vindas ao computador. ",
    link: "<a href='http://gitea.arphya.com.br/Myguel/Gestao-Atas-Compras.git'>Link do Projeto</a>",
  },
  {
    name: "Projeto - Sistemas Distribuído",
    description: "Sistema distribuído em Python, composto por cliente e servidor, simulando uma plataforma de pedidos e entrega de lanches. Desenvolvido como trabalho final da disciplina de Sistemas Distribuídos (2026/1), com responsabilidades divididas entre 23 alunos organizados em 8 setores: comunicação em rede, concorrência, segurança, tolerância a falhas, autenticação, processamento pesado, integração externa e documentação.",
    link: "<a href='https://github.com/jurandii/Projeto_final_Distribuidos_2026_1.git'>Link do projeto</a>",
  },
  {
    name: "Arduino - Sensor de Aproximação",
    description: "Um projeto simples feito com Arduino que usa um sensor de proximidade para acionar um alarme quando um objeto é detectado.",
    link: "<a href='https://github.com/Myguel-H/Arduino_Sensor_Aproxima-o.git'>Link do Projeto</a>",
  },
  {
    name: "Arduino - Sistema de Sinaleiro",
    description: "Um projeto simples e facil de fazer com arduino. Objetivo é criar um sistema fisico com arduino fundamentado na ideia de um sinal de transito (vermelho, amarelo e verde). ",
    link: "<a href='https://github.com/Myguel-H/Arduino_Sistema_Sinaleiro.git'>Link do projeto</a>",
  },
  {
    name: "AgroGuia",
    description: "Projeto criado durante o hackathon da semana academica de Sistemas de Informação da UTFPR/FB, com o objetivo de auxiliar no gerenciamento de pequenos agricultores/colonos por parte da secretaria de agricultura. Isso levou a incubação de uma empresa pela sprint da UTPFR",
    link: "",
  },
];

export const certificates: Certificate[] = [
  { name: "Carreira Desenvolvimento Back-End Java: Boas-vindas e primeiros passos", duration: "1h", institution: "Alura", link: "/certificates/cursos-alura/Carreira-Desenvolvimento-Back-End-Java-Boas-vindas-e-primeiros-passos.pdf" },
  { name: "Carreira Desenvolvimento Back-End PHP: Boas-vindas e primeiros passos", duration: "1h", institution: "Alura", link: "/certificates/cursos-alura/Carreira-Desenvolvimento-Back-End-PHP-Boas-vindas-e-primeiros-passos.pdf" },
  { name: "Começando em Programação: Carreira e Primeiros Passos", duration: "1h", institution: "Alura", link: "/certificates/cursos-alura/Curso-Comecando-em-Programacao-carreira-e-primeiros-passos.pdf" },
  { name: "CSS: Flexbox e Layouts Responsivos", duration: "6h", institution: "Alura", link: "/certificates/cursos-alura/Curso-Css-flexbox-e-layouts-e-responsivos.pdf" },
  { name: "Excel: Domine o Editor de Planilhas", duration: "8h", institution: "Alura", link: "/certificates/cursos-alura/Excel-domine-o-editor-de-planilhas.pdf" },
  { name: "Git e GitHub: Compartilhando e Colaborando em Projetos", duration: "8h", institution: "Alura", link: "/certificates/cursos-alura/Curso-Git-e-GitHub-compartilhando-e-colaborando-em-projetos.pdf" },
  { name: "HTML e CSS: Ambientes de Desenvolvimento, Estrutura de Arquivos e Tags", duration: "8h", institution: "Alura", link: "/certificates/cursos-alura/Curso-Html-e-css-ambientes-de-desenvolvimento-estrutura-de-arquivos-e-tags.pdf" },
  { name: "HTML e CSS: Classes, Posicionamento e Flexbox", duration: "8h", institution: "Alura", link: "/certificates/cursos-alura/Curso-Html-e-css-posicionamentos-e-flexbox.pdf" },
  { name: "Java: Criando a Sua Primeira Aplicação", duration: "8h", institution: "Alura", link: "/certificates/cursos-alura/Curso-Java-criando-sua-primeira-aplicacao.pdf" },
  { name: "Java JRE e JDK: Compile e Execute o Seu Programa", duration: "8h", institution: "Alura", link: "/certificates/cursos-alura/Curso-Java-JRE-e-JDK-compile-e-execute-o-seu-programa.pdf" },
  { name: "JavaScript: Utilizando Tipos, Variáveis e Funções", duration: "8h", institution: "Alura", link: "/certificates/cursos-alura/JavaScript-utilizando-tipos-variaveis-e-funcoes.pdf" },
  { name: "Lógica de Programação: Explore Funções e Listas", duration: "6h", institution: "Alura", link: "/certificates/cursos-alura/Curso-Logica-de-programacao-explorando-funcoes-e-listas.pdf" },
  { name: "Lógica de Programação: Mergulhe em Programação com JavaScript", duration: "6h", institution: "Alura", link: "/certificates/cursos-alura/Curso-Logica-de-programacao-com-JavaScript.pdf" },
  { name: "Lógica de Programação: Praticando com Desafios", duration: "8h", institution: "Alura", link: "/certificates/cursos-alura/Logica-de-programacao-praticando-com-desafios.pdf" },
  { name: "PHP: Criando Sua Aplicação", duration: "8h", institution: "Alura", link: "/certificates/cursos-alura/PHP-criando-sua-aplicacao.pdf" },
  { name: "Praticando Java: Condicionais If e Else", duration: "4h", institution: "Alura", link: "/certificates/cursos-alura/Curso-Praticando-Java-condicionais-if-e-else.pdf" },
  { name: "TypeScript Parte 1: Evoluindo Seu JavaScript", duration: "10h", institution: "Alura", link: "/certificates/cursos-alura/Curso-TypeScript-parte-1-evoluindo-seu-JavaScript.pdf" },
  { name: "Lei Geral de Proteção de Dados e a Administração Pública", duration: "40h", institution: "Escola de Gestão do Paraná (EGP)", link: "/certificates/cursos-evg-e-ead/Lei-Geral-de-Protecao-de-Dados-e-a-Administracao-Publica.pdf" },
  { name: "Modalidades Licitatórias", duration: "2h", institution: "Escola de Gestão do Paraná (EGP)", link: "/certificates/cursos-evg-e-ead/Modalidades-Licitatorias.pdf" },
  { name: "Modalidades Licitatórias - EAD", duration: "2h", institution: "Escola de Gestão do Paraná (EGP)", link: "/certificates/cursos-evg-e-ead/Minicurso-Modalidades-Licitatorias-EAD.pdf" },
  { name: "UTFPR - 2º Simposio de Agronomia 2024", duration: "4h", institution: "UTFPR", link: "/certificates/certificados-utfpr/UTFPR-2o-Simposio-de-Agronomia-2024.pdf" },
  { name: "UTFPR - Conferência Municipal De Ciência, Tecnologia e Inovação 2024", duration: "4h", institution: "UTFPR", link: "/certificates/certificados-utfpr/UTFPR-Conferencia-Municipal-De-Ciencia-Tecnologia-e-Inovacao-2024.pdf" },
  { name: "UTFPR - II Abril Indígena - Roda de Conversa com Katú Mirim 2026", duration: "3h", institution: "UTFPR", link: "/certificates/certificados-utfpr/UTFPR-II-Abril-Indigena-Roda-de-Conversa-com-Katu-Mirim-2026.pdf" },
  { name: "UTFPR - III Novembro Negro 2024", duration: "4h", institution: "UTFPR", link: "/certificates/certificados-utfpr/UTFPR-III-Novembro-Negro-2024.pdf" },
  { name: "UTFPR - Ouvinte - Apresentação da Orquestra e Coral 2024", duration: "1h", institution: "UTFPR", link: "/certificates/certificados-utfpr/UTFPR-Ouvinte-Apresentacao-da-Orquestra-e-Coral-2024.pdf" },
  { name: "UTFPR -  Palestra Musicada Gauchismo Líquido 2023", duration: "4h", institution: "UTFPR", link: "/certificates/certificados-utfpr/UTFPR-Palestra-Musicada-Gauchismo-Liquido-2023.pdf" },
  { name: "UTFPR - Rondon 2025", duration: "0h", institution: "UTFPR", link: "/certificates/certificados-utfpr/UTFPR-Rondon-2025.jpeg" },
  { name: "UTFPR - Setembro Amarelo Como está nossa Saúde Mental 01112023", duration: "4h", institution: "UTFPR", link: "/certificates/certificados-utfpr/UTFPR-Setembro-Amarelo-Como-esta-nossa-Saude-Mental-01112023.pdf" },
  { name: "UTFPR - VII WCTI - Workshop de Ciência, Tecnologia e Inovação 19-20092023", duration: "3h", institution: "UTFPR", link: "/certificates/certificados-utfpr/UTFPR-VII-WCTI-Workshop-de-Ciencia-Tecnologia-e-Inovacao-19-20092023.pdf" },
  { name: "UTFPR - Visita Técnica as Agroindústrias da COOPAFI 03122024", duration: "4h", institution: "UTFPR", link: "/certificates/certificados-utfpr/UTFPR-Visita-Tecnica-as-Agroindustrias-da-COOPAFI-03122024.pdf" },
  { name: "UTFPR - XIV Seminário de Extensão e Inovação & XXIX SEISICITE VOLUNTARIO", duration: "6h", institution: "UTFPR", link: "/certificates/certificados-utfpr/XIV-Seminario-de-Extensao-e-Inovacao-XXIX-SEISICITE-VOLUNTARIO.pdf" },
  { name: "UTFPR - XIV Seminário de Extensao", duration: "0h", institution: "UTFPR", link: "/certificates/certificados-utfpr/UTFPR-XIV-Seminario-de-Extensao.pdf" },
  { name: "UTFPR - XIV Seminário de Extensão e Inovação & XXIX SEISICITE VOLUNTARIO", duration: "6h", institution: "UTFPR", link: "/certificates/certificados-utfpr/XIV-Seminario-de-Extensao-e-Inovacao-XXIX-SEISICITE-VOLUNTARIO.pdf" },
  // ═══ Eventos e Congressos ═══
  { name: "Latinoware_25", duration: "28h", institution: "Latinoware", link: "/certificates/certificados-eventos/Latinoware-25.pdf" },
  { name: "Latinoware_26", duration: "27h", institution: "Latinoware", link: "/certificates/certificados-eventos/Latinoware-26.pdf" },
  { name: "Dev_Pr-Dv_25", duration: "3h", institution: "Codaqui", link: "/certificates/certificados-eventos/Dev-Pr-Dv-25.pdf" },
  { name: "Php_Velho_Oeste_26", duration: "12h", institution: "PHP Velho Oeste", link: "/certificates/certificados-eventos/Php-Velho-Oeste-26.pdf" },
  // ═══ Formação Profissional ═══
  { name: "GERAR - Menor Aprendiz 25092024", duration: "142h", institution: "GERAR", link: "/certificates/certificados-avulso/GERAR-Menor-Aprendiz-25092024.pdf" },
  { name: "SENAC - Menor Aprendiz 14022023", duration: "1000h", institution: "SENAC/PR", link: "/certificates/certificados-avulso/SENAC-Menor-Aprendiz-14022023.pdf" },
];
