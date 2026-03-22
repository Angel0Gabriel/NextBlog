import { Layout } from "@/components/layout/layout";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site.set",
  description: "Venda seus produtos como afiliado em um único lugar",
  openGraph: {
    title: "Site.set",
    description: "Venda seus produtos como afiliado em um único lugar",
    // url: 'URL_PRODUCAO'
    siteName: "Site.set",
    locale: "pt_BR",
    type: "website",
    // images: [
    //   {
    //     url: 'URL_PRODUCAO',
    //     width: 800,
    //     height: 600,
    //     alt: 'Site.set'
    //   }
    // ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
