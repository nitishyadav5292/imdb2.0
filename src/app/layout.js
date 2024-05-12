import { Inter } from "next/font/google";
import global from "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is IMDB Clone Website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Providers>
        <Header />
        <Navbar/>
        <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
