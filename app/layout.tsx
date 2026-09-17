import "./globals.css";
import { Header } from "../components/Header";

export const metadata = {
  title: "ENM Elétrica Nova Metal | Soluções elétricas industriais",
  description: "Catálogo ENM Elétrica Nova Metal: equipamentos, iluminação, conexões e soluções para aplicações industriais.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body><Header />{children}<footer className="siteFooter"><div className="container footerInner"><img src="/logo-enm.png" alt="ENM Elétrica Nova Metal"/><span>ENM Elétrica Nova Metal</span><span>Qualidade - Garantia - Satisfação • Catálogo e soluções elétricas industriais</span></div></footer></body></html>
}
