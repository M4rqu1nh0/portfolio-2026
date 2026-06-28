import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "./Index";
import { projects } from "@/data/projects";

describe("Index page", () => {
  it("links every case study card to its detail route", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );

    for (const project of projects) {
      const link = document.querySelector(`a[href="/proyecto/${project.slug}"]`);
      expect(link, `expected a card linking to ${project.slug}`).not.toBeNull();
    }
  });

  it("renders the projects section heading", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: "Proyectos Destacados" }),
    ).toBeInTheDocument();
  });
});
