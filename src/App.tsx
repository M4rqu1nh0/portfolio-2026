import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import SantanderProject from "./pages/SantanderProject.tsx";
import AibomarketProject from "./pages/AibomarketProject.tsx";
import WegrowProject from "./pages/WegrowProject.tsx";
import EtbProject from "./pages/EtbProject.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proyecto/santander-officebanking" element={<SantanderProject />} />
          <Route path="/proyecto/marsol-aibomarket" element={<AibomarketProject />} />
          <Route path="/proyecto/neoris-wegrow" element={<WegrowProject />} />
          <Route path="/proyecto/neoris-etb" element={<EtbProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
