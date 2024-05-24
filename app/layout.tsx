import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Space Between Ur Hand",
    description: "Educational purposes",
    icons: {
        icon: '/mars_planet_space_icon_176329.svg'
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}
                <Analytics />
            </body>
        </html>
    );
}
