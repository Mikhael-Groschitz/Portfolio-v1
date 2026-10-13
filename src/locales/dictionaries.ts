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
            desc1_start: "Comecei resolvendo problemas de outras pessoas no suporte técnico, mas o que sempre me prendia de verdade era ",
            desc1_highlight: 'ir atrás da causa raiz escondida nos dados por trás de cada chamado',
            desc1_end: ". Essa curiosidade foi o que me levou da análise para a engenharia de dados.",

            desc2_start: "Hoje minha rotina é ",
            desc2_highlight: "arquitetar e otimizar performance de bancos de dados relacionais para o setor financeiro",
            desc2_end: ", orquestrando pipelines de ETL/ELT e automações que precisam funcionar direito todos os dias — não só na primeira vez.",

            desc3_start: "Fora do expediente, sigo construindo pipelines e arquiteturas de dados do zero por conta própria — é assim que aprendo de verdade. É para lá que estou direcionando minha especialização: ",
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
            viewRepo: "Ver no GitHub",

            items: [
                {
                    id: 1,
                    title: 'Pipeline ELT de Preços de Combustíveis (ANP)',
                    category: 'Engenharia de Dados',
                    category2: 'Cloud/Azure',
                    image: '/v1/project-anp-fuel.svg',
                    description: 'Pipeline ELT na Azure que processa mais de 20 anos de preços de combustíveis da ANP (~32 milhões de linhas). Ingestão via web scraping para o Data Lake, padronização para Parquet, modelagem dimensional com SCD2 via Azure Data Factory e T-SQL, e dashboard final em Power BI.',
                    techs: ['Python', 'Azure Data Factory', 'Azure SQL', 'Power BI'],
                    repoLink: 'https://github.com/Mikhael-Groschitz/anp-fuel-prices-elt-azure',
                },
                {
                    id: 2,
                    title: 'CDC de SQL Server para Data Warehouse',
                    category: 'Engenharia de Dados',
                    category2: 'Data Warehouse',
                    image: '/v1/project-cdc-dw.svg',
                    description: 'Pipeline que captura mudanças direto do SQL Server via Change Data Capture nativo (rastreamento por LSN) e carrega incrementalmente um data warehouse dimensional com SCD2, sem orquestradores externos. Ambiente Dockerizado, com testes automatizados em pytest.',
                    techs: ['SQL Server', 'T-SQL', 'Python', 'Docker'],
                    repoLink: 'https://github.com/Mikhael-Groschitz/sqlserver-cdc-to-dw',
                },
                {
                    id: 3,
                    title: 'Data Lakehouse de CNPJs',
                    category: 'Engenharia de Dados',
                    category2: 'Big Data',
                    image: '/v1/project-cnpj-lakehouse.svg',
                    description: 'Lakehouse local em camadas (bronze, silver, gold) para os dados públicos de CNPJ da Receita Federal, com orquestração via Airflow, processamento distribuído em PySpark e armazenamento em Delta Lake sobre MinIO.',
                    techs: ['PySpark', 'Airflow', 'Delta Lake', 'Docker'],
                    repoLink: 'https://github.com/Mikhael-Groschitz/cnpj-lakehouse-spark-airflow',
                },
                {
                    id: 4,
                    title: 'MTG TokenForge',
                    category: 'Mobile / Web App',
                    category2: 'Fullstack',
                    category3: 'Hobby',
                    image: '/v1/project-token-forge.png',
                    description: 'Crie e administre seus tokens customizados. Focado em ajudar jogadores de MTG a ter um controle melhor sobre o "Estado da mesa" ',
                    techs: ['React','Java', 'Spring boot', 'PostgreSQL'],
                    repoLink: 'https://github.com/Mikhael-Groschitz/MTG-Token-Counter-Web',
                    demoLink: 'https://www.theforgeoftokens.com'
                }
            ]
        },

        // --- SEÇÃO CONTATO ---
        contact: {
            title: "Bora Conversar?",
            description: "Tem um desafio de dados complexo, uma vaga para Engenharia/Análise de Dados Pleno, ou quer conversar sobre arquitetura e performance?",
            cta: "Diga Olá",
            emailAriaLabel: "Enviar email",
            whatsappAriaLabel: "WhatsApp"
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

        tardis: {
            label: "Voltar para a v2"
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
            desc1_start: "I started out fixing other people's problems in IT support, but what really hooked me was ",
            desc1_highlight: "chasing the root cause hidden in the data behind every ticket",
            desc1_end: ". That curiosity is what pulled me from analysis into data engineering.",

            desc2_start: "These days my day-to-day is ",
            desc2_highlight: "architecting and tuning relational database performance for the financial sector",
            desc2_end: ", orchestrating ETL/ELT pipelines and automations that need to hold up every single day — not just work once.",

            desc3_start: "Outside of work, I keep building pipelines and data architectures from scratch on my own — that's how I actually learn. It's what's driving my specialization in ",
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
            viewRepo: "View on GitHub",

            items: [
                {
                    id: 1,
                    title: 'ANP Fuel Prices ELT Pipeline',
                    category: 'Data Engineering',
                    category2: 'Cloud/Azure',
                    image: '/v1/project-anp-fuel.svg',
                    description: 'An Azure ELT pipeline processing 20+ years of Brazilian fuel price data (~32 million rows). Web-scraped ingestion into a Data Lake, Parquet standardization, dimensional modeling with SCD2 via Azure Data Factory and T-SQL, and a Power BI dashboard.',
                    techs: ['Python', 'Azure Data Factory', 'Azure SQL', 'Power BI'],
                    repoLink: 'https://github.com/Mikhael-Groschitz/anp-fuel-prices-elt-azure',
                },
                {
                    id: 2,
                    title: 'SQL Server CDC to Data Warehouse',
                    category: 'Data Engineering',
                    category2: 'Data Warehouse',
                    image: '/v1/project-cdc-dw.svg',
                    description: 'A pipeline that captures changes straight from SQL Server via native Change Data Capture (LSN-based tracking) and incrementally loads a dimensional warehouse with SCD2, no external orchestrators. Dockerized, with automated pytest coverage.',
                    techs: ['SQL Server', 'T-SQL', 'Python', 'Docker'],
                    repoLink: 'https://github.com/Mikhael-Groschitz/sqlserver-cdc-to-dw',
                },
                {
                    id: 3,
                    title: 'CNPJ Data Lakehouse',
                    category: 'Data Engineering',
                    category2: 'Big Data',
                    image: '/v1/project-cnpj-lakehouse.svg',
                    description: "A local layered lakehouse (bronze, silver, gold) for Brazil's public CNPJ registry data, orchestrated with Airflow, processed with distributed PySpark, and stored as Delta Lake on MinIO.",
                    techs: ['PySpark', 'Airflow', 'Delta Lake', 'Docker'],
                    repoLink: 'https://github.com/Mikhael-Groschitz/cnpj-lakehouse-spark-airflow',
                },
                {
                    id: 4,
                    title: 'MTG Token Forge',
                    category: 'Mobile / Web App',
                    category2: ' Full Stack',
                    category3: 'Hobby',
                    image: '/v1/project-token-forge.png',
                    description: 'Create and manage our own custom tokens. Focused on helping MTG players to have a better control of their "board state" ',
                    techs: ['React Native', 'JS', 'Java', 'Spring boot', 'CSS'],
                    repoLink: 'https://github.com/Mikhael-Groschitz/MTG-Token-Counter-Web',
                    demoLink: 'https://www.theforgeoftokens.com'
                }
            ]
        },

        // --- SEÇÃO CONTATO (EN) ---
        contact: {
            title: "Let's Chat?",
            description: "Have a complex data challenge, a mid-level Data Engineer/Analyst opening, or want to talk about architecture and performance?",
            cta: "Say Hello",
            emailAriaLabel: "Send email",
            whatsappAriaLabel: "WhatsApp"
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

        tardis: {
            label: "Back to v2"
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
