import type { Metadata } from "next";
import { Inter, Fira_Code, Press_Start_2P, Allerta_Stencil} from "next/font/google";
import "./globals.css";
import SiteProtection from "@/components/SiteProtection/SiteProtection";
import Konami from "@/components/EasterEgg/Konami";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });
const pressStart2P = Press_Start_2P({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-press-start"
});
const allerta = Allerta_Stencil({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-allerta",
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: "Mikhael Groschitz | Software Architecture & Data Science",
        template: "%s | Mikhael Groschitz"
    },
    description: "Junior Data Analyst & Software Architecture student at PUCPR. Specialist in Data Science, Cybersecurity, and Homelab systems.",
    keywords: ["Data Analyst", "Software Architecture", "PUCPR", "Cybersecurity", "Next.js", "Porto Alegre", "Mikhael Groschitz"],
    authors: [{ name: "Mikhael Groschitz" }],
    creator: "Mikhael Groschitz",

    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://seu-portfolio.com",
        title: "Mikhael Groschitz | Portfolio",
        description: "Explorando a interseção entre análise de dados e arquitetura de sistemas.",
        siteName: "Mikhael Groschitz Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Mikhael Groschitz | Portfolio Preview",
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
        <body className={`${inter.variable} ${firaCode.variable} ${pressStart2P.variable} ${allerta.variable} font-sans bg-black text-white antialiased`}>
        <LanguageProvider>
            <SiteProtection />
            <Konami />
            {children}
        </LanguageProvider>
        </body>
        </html>
    );
}