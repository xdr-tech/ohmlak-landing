import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import ActiveLink from "../components/ActiveLink";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ohmlak Enterprises",
  description: "Empowering Industries, Designing Futures, Keeping good it Hertz!.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen-2xl mx-auto`}
      >
        <nav className="flex flex-row justify-between items-center sticky top-8 z-50 m-8 px-8 py-4 rounded-full bg-[#D6E4F0] text-[#163172]">
          <Link href="/">
            <h4 className="font-bold text-2xl">Ohmlak</h4>
          </Link>
          <ul className="flex flex-row gap-4 text-lg">
            <li>
              <ActiveLink href="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/services">Services</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/projects">Projects</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/about">About us</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/contact">Contact us</ActiveLink>
            </li>
          </ul>
        </nav>

        {children}

        <footer className="bg-gray-700 text-white p-8 flex flex-row justify-between">
          <div className="flex flex-col gap-8">
            <img
              src="/assets/logo.jpeg"
              alt="Ohmlak logo"
              className="w-1/3"
            />
            <span>All rights reserved by Ohmlak enterprises</span>
          </div>

          <nav className="px-16 flex flex-row rounded-full">
            <ul className="flex flex-col gap-4 text-lg">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
