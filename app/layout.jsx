import Navbar from "@/components/navbar";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

const noto_sans = Noto_Sans({
    subsets: ["latin"],
    weight: ["300", "400"],
});

export const metadata = {
    title: "Explore Ametista",
    description:
        "Explore Ametista - Um site com o objetivo de ajudar nossos visitantes!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className={noto_sans.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
