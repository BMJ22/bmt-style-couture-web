
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConsultationsPage from "./pages/Consultations";
import BoutiquePage from "./pages/Boutique";
import BoutiqueDetailPage from "./pages/BoutiqueDetail";
import SurMesurePage from "./pages/SurMesure";
import FormationsPage from "./pages/Formations";
import RealisationsPage from "./pages/Realisations";
import BlogPage from "./pages/Blog";
import AProposPage from "./pages/APropos";
import ContactPage from "./pages/Contact";
import UpcyclingPage from "./pages/Upcycling";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/boutique" element={<BoutiquePage />} />
          <Route path="/boutique/:id" element={<BoutiqueDetailPage />} />
          <Route path="/sur-mesure" element={<SurMesurePage />} />
          <Route path="/formations" element={<FormationsPage />} />
          <Route path="/consultations" element={<ConsultationsPage />} />
          <Route path="/realisations" element={<RealisationsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/a-propos" element={<AProposPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/upcycling" element={<UpcyclingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
