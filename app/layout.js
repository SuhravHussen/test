import { Saira } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const SairaSans = Saira({
  variable: "--font-saira-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "INTELLIZLAB | IT Company",
  description: "IT Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${SairaSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
