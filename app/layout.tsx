import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}