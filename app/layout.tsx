import BackToTop from "../components/backToTop/BackToTop";
import Header from "../components/header/Header";
import './globals.css'

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <Header />
        <BackToTop/>
        {children}
      </body>
    </html>
  );
}