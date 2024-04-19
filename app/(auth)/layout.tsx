import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

import "../globals.css";
import { Metadata } from "next";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Threads',
    description: 'A Next.js Meta Threads Application'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}