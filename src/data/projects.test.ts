import { describe, it, expect } from "vitest";
import { projects, getProjectBySlug } from "./projects";

describe("projects data", () => {
  it("exposes the four case studies", () => {
    expect(projects).toHaveLength(4);
  });

  it("has unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every project has at least one process step and one gallery image", () => {
    for (const project of projects) {
      expect(project.process.steps.length).toBeGreaterThan(0);
      expect(project.gallery.images.length).toBeGreaterThan(0);
    }
  });

  it("every project has a home card summary with description and tags", () => {
    for (const project of projects) {
      expect(project.card.description.length).toBeGreaterThan(0);
      expect(project.card.tags.length).toBeGreaterThan(0);
    }
  });
});

describe("getProjectBySlug", () => {
  it("returns the matching project", () => {
    const project = getProjectBySlug("santander-officebanking");
    expect(project?.title).toBe("OfficeBanking");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProjectBySlug("does-not-exist")).toBeUndefined();
  });

  it("returns undefined when slug is undefined", () => {
    expect(getProjectBySlug(undefined)).toBeUndefined();
  });
});
