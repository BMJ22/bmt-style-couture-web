
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Routes will be added as we build out the site */}
          <Route path="/boutique" element={<NotFound />} />
          <Route path="/boutique/:id" element={<NotFound />} />
          <Route path="/sur-mesure" element={<NotFound />} />
          <Route path="/formations" element={<NotFound />} />
          <Route path="/consultations" element={<NotFound />} />
          <Route path="/realisations" element={<NotFound />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/a-propos" element={<NotFound />} />
          <Route path="/contact" element={<NotFound />} />
          <Route path="/upcycling" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
