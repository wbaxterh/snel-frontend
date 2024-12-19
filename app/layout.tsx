import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "SNeL - Premium Memecoin",
	description:
		"SNeL is immortal. A premium memecoin based on community and fairness. Join the revolution on Cardano with Snek.fun.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.png' />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-secondary`}
			>
				{children}
			</body>
		</html>
	);
}
