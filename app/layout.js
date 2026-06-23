import "./globals.css"; // Uses local relative import directly next to the file
import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "ShopEase | Mini Store",
  description: "Modern e-commerce frontend presentation template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f1f1f2] text-[#282828] flex flex-col min-h-screen antialiased">
        <CartProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

