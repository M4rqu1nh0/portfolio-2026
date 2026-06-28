import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "./Index";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { projects } from "@/data/projects";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <LanguageProvider>
        <Index />
      </LanguageProvider>
    </MemoryRouter>,
  );
}

describe("Index page", () => {
  it("links every case study card to its detail route", () => {
    renderAt("/");

    for (const project of projects) {
      const link = document.querySelector(`a[href="/proyecto/${project.slug}"]`);
      expect(link, `expected a card linking to ${project.slug}`).not.toBeNull();
    }
  });

  it("renders the projects section heading", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { name: "Proyectos Destacados" })).toBeInTheDocument();
  });

  it("renders English chrome and locale-prefixed links under /en", () => {
    renderAt("/en");
    expect(screen.getByRole("heading", { name: "Featured Projects" })).toBeInTheDocument();
    for (const project of projects) {
      const link = document.querySelector(`a[href="/en/proyecto/${project.slug}"]`);
      expect(link, `expected an /en card linking to ${project.slug}`).not.toBeNull();
    }
  });
});
