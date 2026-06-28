import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import Index from "./pages/Index.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => (
  <BrowserRouter>
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/proyecto/:slug" element={<ProjectPage />} />
        <Route path="/en" element={<Index />} />
        <Route path="/en/proyecto/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LanguageProvider>
  </BrowserRouter>
);

export default App;
