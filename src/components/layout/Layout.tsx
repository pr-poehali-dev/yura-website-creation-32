import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Icon from "@/components/ui/icon";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen flex flex-col font-golos">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 animate-scale-in"
          style={{ backgroundColor: "hsl(var(--navy))", color: "white" }}
        >
          <Icon name="ArrowUp" size={18} />
        </button>
      )}
    </div>
  );
}
