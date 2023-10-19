import "./globals.css";
import "../css/quill-custom-css.css";

import { Noto_Sans_KR } from "next/font/google";
import Header from "./components/Header";
import Providers from "./provider";
import { Nav } from "./components/Nav";

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
          
          <Providers>
          <Nav />
            {children}</Providers>
        </div>
      </body>
    </html>
  );
}
