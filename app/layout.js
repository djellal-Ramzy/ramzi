import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTtransition from "@/components/StairTtransition";
export const metadata = {
  title: "dj-ramzi",
  description: "portfolio web developer",
};

const JetBrain = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrain",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JetBrain.variable}>
        <Header />
        <StairTtransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
