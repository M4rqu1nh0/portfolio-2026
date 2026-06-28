import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import { LanguageProvider } from "@/i18n/LanguageProvider";

function renderAtPath(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <LanguageProvider>
        <Routes>
          <Route path="/proyecto/:slug" element={<ProjectPage />} />
          <Route path="/en/proyecto/:slug" element={<ProjectPage />} />
        </Routes>
      </LanguageProvider>
    </MemoryRouter>,
  );
}

describe("ProjectPage", () => {
  it("renders the case study matching the slug", () => {
    renderAtPath("/proyecto/santander-officebanking");
    expect(screen.getByRole("heading", { level: 1, name: "OfficeBanking" })).toBeInTheDocument();
  });

  it("renders a different case study for a different slug", () => {
    renderAtPath("/proyecto/neoris-etb");
    expect(screen.getByRole("heading", { level: 1, name: "Validación de Cobertura" })).toBeInTheDocument();
  });

  it("renders the English case study under /en", () => {
    renderAtPath("/en/proyecto/neoris-etb");
    expect(screen.getByRole("heading", { level: 1, name: "Coverage Validation" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "The Context" })).toBeInTheDocument();
  });

  it("falls back to the 404 page for an unknown slug", () => {
    renderAtPath("/proyecto/unknown-project");
    expect(screen.getByText("404")).toBeInTheDocument();
  });
});
