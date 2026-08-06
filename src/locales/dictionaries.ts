export const dictionaries = {
    pt: {
        // --- NAVBAR ---
        nav: {
            home: "Início",
            about: "Sobre",
            skills: "Habilidades",
            career: "Carreira",
            projects: "Projetos",
            contact: "Contato",
        },

        // --- SEÇÃO HERO ---
        hero: {
            title: "Hello World!",
            subtitle: "Eu me chamo Mikhael Groschitz",
            roles: ["Engenheiro de dados", "Analista de dados Backend", "Entusiasta de TI"],
        },

        // --- SEÇÃO ABOUT ---
        about: {
            title: "Sobre Mim",
            desc1_start: "Sou um profissional movido pelo desafio de transformar ambientes complexos de dados em inteligência de negócios.",
            desc1_highlight: 'Especialista em otimização de performance e construção de pipelines robustos',
            desc1_end: ".",

            desc2_start: "Atuo na intersecção ",
            desc2_highlight: "entre a engenharia de software e a ciência de dados",
            desc2_end: "para garantir que a informação chegue com qualidade, segurança e velocidade.",

            desc3_start: "Especializando-me em ",
            desc3_highlight: "Arquitetura e Ciência de dados",
            desc3_end: ".",

            subtitle: "// ALÉM DO TERMINAL",
            trait1_title: "BUILDER:",
            trait1_desc: " Unindo hobbies e código, desenvolvendo aplicações e projetos paralelos para a comunidade de jogos.",
            trait2_title: "HOMELABBER:",
            trait2_desc: "Construindo servidores caseiros e redes internas.",
            trait3_title: "HOBBYIST:",
            trait3_desc: "Jogador periódico de Magic:The Gathering e colecionador de boardgame."
        },

        // --- SEÇÃO SKILLS ---
        skills: {
            title: "Tech Stack & Ferramentas",
        },

        // --- SEÇÂO CARREIRA ---

        career: {
            title: "Trajetória Profissional",
            items: [
                {
                    id: 1,
                    period: "03/2026 ~ Atualmente",
                    role: "Engenheiro de dados | Analista Back End",
                    company: "Credware Tecnologia (Cliente: Facta Financeira)",
                    description: "Foco na arquitetura e otimização de alta performance em bancos de dados relacionais (SQL Server) para o setor financeiro. Responsável pelo desenvolvimento e orquestração de pipelines de ETL/ELT com Apache Airflow, além da arquitetura, revisão de código e melhoria contínua de robôs e automações em Python, garantindo escalabilidade, integridade sistêmica e excelência operacional.",
                },
                {
                    id: 2,
                    period: "11/2024 ~ 03/2026",
                    role: "Analista de Dados Júnior",
                    company: "Escofi Contabilidade",
                    description: "Foco na transformação de dados contábeis em insights de negócio, apoiando a tomada de decisão estratégica e ajudando a impulsionar a evolução da empresa para uma cultura orientada por dados.",
                },
                {
                    id: 3,
                    period: "10/2023 ~ 10/2024",
                    role: "Estagiário de Suporte de TI",
                    company: "Payer Serviços de Pagamentos",
                    description: "Responsável por diagnosticar e solucionar problemas técnicos, garantindo a satisfação e o sucesso do cliente. Além do suporte direto, foquei em utilizar os dados gerados para otimizar processos e prevenir ocorrências futuras.",
                }
            ]
        },

        // --- SEÇÃO PROJETOS ---
        projects: {
            title: "Projetos em Destaque",
            subtitle: "Confira meus projetos mais recentes",
            techStack: "Tech Stack:",

            items: [
                {
                    id: 1,
                    title: 'Dashboard de insights de negócio',
                    category: 'Análise de Dados',
                    image: '/project1.jpg',
                    description: 'Dashboard interativo para análise de vendas. ETL com Python e visualização no Power BI.',
                    techs: ['Python', 'Pandas', 'Power BI', 'SQL'],
                    repoLink: 'https://github.com/seu-usuario/repo',
                    demoLink: 'https://demo-link.com'
                },
                {
                    id: 2,
                    title: 'Homelab Monitor & Controlador',
                    category: 'DevOps',
                    category2: 'Hobby',
                    image: '/project2.png',
                    description: 'Aplicação full-stack para monitoramento de recursos do servidor caseiro e containers Docker.',
                    techs: ['Python', 'React', 'Docker'],
                    repoLink: 'https://github.com/seu-usuario/repo',
                    demoLink: 'https://demo-link.com'
                },
                {
                    id: 3,
                    title: 'MTG TokenForge',
                    category: 'Mobile / Web App',
                    category2: 'Fullstack',
                    category3: 'Hobby',
                    image: '/project3.png',
                    description: 'Crie e administre seus tokens customizados. Focado em ajudar jogadores de MTG a ter um controle melhor sobre o "Estado da mesa" ',
                    techs: ['React','Java', 'Spring boot', 'PostgreSQL'],
                    repoLink: 'https://github.com/Mikhael-Groschitz/MTG-Token-Counter-Web',
                    demoLink: 'https://mtg-token-counter-web.vercel.app'
                },
                {
                    id: 4,
                    title: 'Corporate ERP Integration',
                    category: 'Arquitetura Backend',
                    image: '/Project4.png',
                    description: 'API RESTful robusta para integrar sistemas legados com novas plataformas de e-commerce.',
                    techs: ['Java', 'Spring', 'PostgreSQL'],
                    repoLink: 'https://github.com/seu-usuario/repo',
                    demoLink: 'https://demo-link.com'
                }
            ]
        },

        // --- SEÇÃO CONTATO ---
        contact: {
            title: "Bora Conversar?",
            description: "Tem um desafio de dados complexo, uma vaga para Engenharia/Análise de Dados Pleno, ou quer conversar sobre arquitetura e performance?",
            button: "Diga Olá"
        },

        // --- SEÇÃO FOOTER ---
        footer: {
            rights: "Todos os direitos reservados."
        },

        // --- SEÇÃO KONAMI ---
        easterEgg: {
            title: "DESCULPE, NADA DE NOVO POR AQUI!",
            text: "(Mas valeu a tentativa!)",
            button: "CLIQUE PARA VOLTAR"
        },

        // --- MENSAGENS DO CONSOLE ---
        console: {
            fanfare: "🎵 Victory Fanfare:",
            secret: "Você encontrou um dos easter egg",
            contact: "Curtiu o código? Vamos conversar: mgroschitz@gmail.com"
        },

        // --- SEO ---
        seo: {
            title: "Mikhael Groschitz | Analista de Dados & Engenheiro de dados",
            description: "Portfolio de Mikhael Groschitz, Analista de Dados e estudante de Pós-graduação em Arquitetura de Software na PUCPR. Especialista em Data Science, Cybersecurity e Homelabs.",
            keywords: "Data Analyst, Software Architecture, PUCPR, Portfolio, Python, SQL, Cybersecurity, Porto Alegre"
        }
    },
    en: {
        // --- NAVBAR (EN) ---
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            career: "Carrer",
            projects: "Projects",
            contact: "Contact",
        },

        // --- SEÇÃO HERO (EN) ---
        hero: {
            title: "Hello World!",
            subtitle: "My name is Mikhael Groschitz",
            roles: ["Data Engineer", "Backend Data Analyst", "IT Enthusiast"],
        },

        // --- SEÇÃO ABOUT (EN) ---
        about: {
            title: "About Me",
            desc1_start: "I am a professional driven by the challenge of transforming complex data environments into business intelligence.",
            desc1_highlight: "Specialist in performance optimization and building robust pipelines",
            desc1_end: ".",

            desc2_start: "I operate at the intersection ",
            desc2_highlight: "of software engineering and data science",
            desc2_end: " to ensure that information is delivered with quality, security, and speed.",

            desc3_start: "Specializing in ",
            desc3_highlight: "Data Architecture and Data Science",
            desc3_end: ".",

            subtitle: "// BEYOND THE TERMINAL",
            trait1_title: "BUILDER:",
            trait1_desc: "Bridging hobbies and code through side projects and apps for the gaming community.",
            trait2_title: "HOMELABBER:",
            trait2_desc: "Building and breaking servers.",
            trait3_title: "HOBBYIST:",
            trait3_desc: "Periodic Magic: The Gathering player."
        },

        // --- SEÇÃO SKILLS (EN) ---
        skills: {
            title: "Tech Stack & Tools",
        },

        // --- SEÇÂO CARREIRA (EN) ---
        career: {
            title: "Career Trajectory",
            items: [
                {
                    id: 1,
                    period: "03/2026 ~ Present",
                    role: "Data Engineer | Back End Analyst",
                    company: "Credware Technology (Client: Facta Financeira)",
                    description: "Focused on the architecture and high-performance optimization of relational databases (SQL Server) for the financial sector. Responsible for developing and orchestrating ETL/ELT pipelines with Apache Airflow, as well as the architecture, code review, and continuous improvement of bots and automations in Python, ensuring scalability, system integrity, and operational excellence.",
                },
                {
                    id: 2,
                    period: "11/2024 ~ 03/2026",
                    role: "Junior Data Analyst",
                    company: "Escofi Contabilidade",
                    description: "Focused on transforming accounting data into business insights, supporting strategic decision-making and helping drive the company's evolution towards a data-driven culture.",
                },
                {
                    id: 3,
                    period: "10/2023 ~ 10/2024",
                    role: "IT Support Intern",
                    company: "Payer Serviços de Pagamentos",
                    description: "Responsible for diagnosing and solving technical issues, ensuring customer satisfaction and success. In addition to direct support, I focused on using the generated data to optimize processes and prevent future occurrences.",
                }
            ]
        },

        // --- SEÇÃO PROJETOS (EN) ---
        projects: {
            title: "Featured Projects",
            subtitle: "Check out my latest projects",
            techStack: "Tech Stack:",

            items: [
                {
                    id: 1,
                    title: 'Sales Intelligence Dashboard',
                    category: 'Data Analysis',
                    image: '/project1.jpg',
                    description: 'Interactive dashboard for sales analysis. ETL with Python and visualization in Power BI.',
                    techs: ['Python', 'Pandas', 'Power BI', 'SQL'],
                    repoLink: 'https://github.com/seu-usuario/repo',
                    demoLink: 'https://demo-link.com'
                },
                {
                    id: 2,
                    title: 'Homelab Monitor & Controller',
                    category: 'DevOps & Systems',
                    category2: 'Hobby',
                    image: '/project2.png',
                    description: 'Full-stack application for monitoring home server resources and Docker containers.',
                    techs: ['Java', 'Spring Boot', 'React', 'Docker'],
                    repoLink: 'https://github.com/seu-usuario/repo',
                    demoLink:  'https://demo-link.com'
                },
                {
                    id: 3,
                    title: 'MTG Token Forge',
                    category: 'Mobile / Web App',
                    category2: ' Full Stack',
                    category3: 'Hobby',
                    image: '/project3.png',
                    description: 'Create and manage our own custom tokens. Focused on helping MTG players to have a better control of their "board state" ',
                    techs: ['React Native', 'JS', 'Java', 'Spring boot', 'CSS'],
                    repoLink: 'https://github.com/Mikhael-Groschitz/MTG-Token-Counter-Web',
                    demoLink: 'https://mtg-token-counter-web.vercel.app'
                },
                {
                    id: 4,
                    title: 'Corporate ERP Integration',
                    category: 'Backend Architecture',
                    image: '/Project4.png',
                    description: 'Robust RESTful API to integrate legacy systems with new e-commerce platforms.',
                    techs: ['Java', 'Spring', 'PostgreSQL', 'Swagger'],
                    repoLink: 'https://github.com/seu-usuario/repo',
                    demoLink: 'https://demo-link.com'
                }
            ]
        },

        // --- SEÇÃO CONTATO (EN) ---
        contact: {
            title: "Let's Chat?",
            description: "Have a complex data challenge, a mid-level Data Engineer/Analyst opening, or want to talk about architecture and performance?",
            button: "Say Hello"
        },

        // --- SEÇÃO FOOTER (EN) ---
        footer: {
            rights: "All rights reserved."
        },

        // --- SEÇÃO KONAMI (EN) ---
        easterEgg: {
            title: "SORRY! NOTHING THIS TIME!",
            text: "(Nice try though!)",
            button: "CLICK TO RETURN"
        },

        // --- MENSAGEM DO CONSOLE (EN)
        console: {
            fanfare: "🎵 Victory Fanfare:",
            secret: "You found one of the easter eggs!",
            contact: "Like the code? Let's talk: mgroschitz@gmail.com"
        },

        // --- SEO (EN) ---
        seo: {
            title: "Mikhael Groschitz | Data Analyst & Software Architect",
            description: "Portfolio of Mikhael Groschitz, Junior Data Analyst and Post-graduate student in Software Architecture at PUCPR. Specialist in Data Science, Cybersecurity, and Homelabs.",
            keywords: "Data Analyst, Software Architecture, PUCPR, Portfolio, Python, SQL, Cybersecurity, Brazil"
        }
    }
};

export type Language = 'pt' | 'en';
