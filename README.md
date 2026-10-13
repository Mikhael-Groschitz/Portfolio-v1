# 🗃️ Mikhael Groschitz | Portfolio v1 (legado)

> [!NOTE]
> **Esta é a primeira versão do meu portfólio, mantida como legado.**
> A versão atual está em **[mgroschitz.dev](https://mgroschitz.dev)**. Esta v1 continua no ar, como registro, em **[mgroschitz.dev/v1](https://mgroschitz.dev/v1)**.

Este projeto foi desenvolvido para servir como uma vitrine técnica da minha transição de carreira e especialização em **Arquitetura de Software, Data Science e Cybersecurity** pela **PUCPR**.

---

## 🛠️ Tech Stack

O projeto utiliza tecnologias robustas para garantir performance e escalabilidade:

| Categoria | Tecnologias |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), TypeScript |
| **Estilização** | Tailwind CSS, Lucide Icons |
| **Animações** | GSAP, Framer Motion |
| **Segurança** | JIT Email Obfuscation, Site Protection Middleware |
| **UX/UI** | Glassmorphism, Responsive Design (Mobile First) |

---

## ✨ Funcionalidades em Destaque

* **Internacionalização (i18n)**: Sistema dinâmico de troca de idioma (PT-BR / EN-US) gerenciado via **React Context API**, com persistência no `localStorage` e retorno automático ao topo da página.
* **Camada de Segurança**:
    * **Site Protection**: Bloqueio de teclas de inspeção (F12, Ctrl+Shift+I) e menu de contexto para proteger a integridade visual.
    * **JIT Email Obfuscation**: O link de contato é montado dinamicamente via JavaScript apenas sob interação humana, prevenindo a coleta por bots de spam.
* **🎮 Easter Eggs**:
    * **Konami Code**: Homenagem à cultura geek que desbloqueia uma surpresa interativa.
    * **Console Fanfare**: Mensagens personalizadas no DevTools para desenvolvedores curiosos.
* **🚪 Volta para a v2**: Uma TARDIS 3D flutua no canto inferior direito e leva de volta à versão atual do portfólio. No celular, ela aparece em uma versão 2.5D mais leve.

---

## 🏗️ Arquitetura e Engenharia

* **Componentização**: Código modular seguindo padrões modernos de desenvolvimento.
* **SEO**: Meta Tags (Open Graph) configuradas. Por ser legado, a v1 é marcada como `noindex, nofollow`, para que apenas a versão atual apareça nas buscas.
* **Otimização Mobile**: Interface totalmente adaptada para dispositivos de baixa resolução, como o iPhone SE.
* **Publicação em `/v1`**: O app roda com `basePath: "/v1"` na Vercel, e o domínio da versão atual repassa (rewrite) o caminho `/v1` para este projeto.

---

## 🚀 Como Executar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/Mikhael-Groschitz/Portfolio-v1.git
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

4. **Acesse** [http://localhost:3000/v1](http://localhost:3000/v1). Por causa do `basePath`, a raiz (`/`) responde 404.

## ✉️ Contato
**LinkedIn**: https://www.linkedin.com/in/mikhael-groschitz/

**Email**: mgroschitz@gmail.com
