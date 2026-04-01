import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ServiceDetail from "./pages/ServiceDetail";
import Executors from "./pages/Executors";
import ExecutorProfile from "./pages/ExecutorProfile";
import Prices from "./pages/Prices";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// HashRouter используется для работы на статических хостингах (Netlify, GitHub Pages)
// и внутри iframe в Google Sites. URL будет вида: site.com/#/catalog
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/service" element={<ServiceDetail />} />
          <Route path="/executors" element={<Executors />} />
          <Route path="/executors/profile" element={<ExecutorProfile />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/article" element={<Article />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;