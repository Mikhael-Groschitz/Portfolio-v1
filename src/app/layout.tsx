import type { Metadata } from "next";
import { Inter, Fira_Code, Press_Start_2P, Allerta_Stencil} from "next/font/google";
import "./globals.css";
import SiteProtection from "@/components/SiteProtection/SiteProtection";
import Konami from "@/components/EasterEgg/Konami";
import Tardis from "@/components/Tardis/Tardis";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
    metadataBase: new URL("https://mgroschitz.dev"),
    title: {
        default: "Mikhael Groschitz | Engenheiro de Dados",
        template: "%s | Mikhael Groschitz"
    },
    description: "Engenheiro de dados brasileiro especializado em arquitetura de pipelines, otimização de performance em bancos de dados e ciência de dados.",
    keywords: ["Engenheiro de Dados", "Data Engineer", "Data Engineering", "Arquitetura de Dados", "Ciência de Dados", "PUCPR", "Cybersecurity", "Next.js", "Porto Alegre", "Mikhael Groschitz"],
    authors: [{ name: "Mikhael Groschitz" }],
    creator: "Mikhael Groschitz",

    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://mgroschitz.dev/v1",
        title: "Mikhael Groschitz | Engenheiro de Dados",
        description: "Engenheiro de dados brasileiro explorando a interseção entre arquitetura de sistemas e ciência de dados.",
        siteName: "Mikhael Groschitz Portfolio",
        images: [
            {
                url: "/v1/og-image.png",
                width: 1200,
                height: 630,
                alt: "Mikhael Groschitz | Portfolio Preview",
            },
        ],
    },
    icons: {
        icon: '/v1/icon.png',
    },
    robots: {
        index: false,
        follow: false,
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
            <Tardis />
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
        </body>
        </html>
    );
}