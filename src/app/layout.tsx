import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Providers from "./provider";
import Article from "./components/Article";

const KR = Noto_Sans_KR({ weight: "300", display: "swap", subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={KR.className}>
        <Header />
        <div className="flex">
          <Nav />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
