import "./globals.scss";
import { Inter, Crimson_Text } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Emma Felsing: Your next partner for social media",
  description:
    "Discover the power of Emma Felsing, your ultimate social media partner. Boost your online presence and engage with your audience like never before. Let Emma's expertise in social media management and strategy drive your success. Start your journey to social media excellence today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={crimson.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
