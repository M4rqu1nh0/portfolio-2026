import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProjectPage from "./ProjectPage";

function renderAtSlug(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`/proyecto/${slug}`]}>
      <Routes>
        <Route path="/proyecto/:slug" element={<ProjectPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("ProjectPage", () => {
  it("renders the case study matching the slug", () => {
    renderAtSlug("santander-officebanking");
    expect(
      screen.getByRole("heading", { level: 1, name: "OfficeBanking" }),
    ).toBeInTheDocument();
  });

  it("renders a different case study for a different slug", () => {
    renderAtSlug("neoris-etb");
    expect(
      screen.getByRole("heading", { level: 1, name: "Validación de Cobertura" }),
    ).toBeInTheDocument();
  });

  it("falls back to the 404 page for an unknown slug", () => {
    renderAtSlug("unknown-project");
    expect(screen.getByText("404")).toBeInTheDocument();
  });
});
