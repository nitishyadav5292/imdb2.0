import { Inter } from "next/font/google";
import global from "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "This is IMDB Clone Website.",
};

/**
 * Renders the root layout for the application.
 *
 * This function is the entry point for the application's layout. It sets up the HTML structure, including the `<html>` and `<body>` tags, and renders the `<Header>` component along with the main content of the page (`{children}`).
 *
 * @param {Object} props - The props passed to the layout component.
 * @param {React.ReactNode} props.children - The main content of the page to be rendered.
 * @returns {React.ReactElement} - The rendered root layout.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
