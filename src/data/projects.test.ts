import { describe, it, expect } from "vitest";
import { projects, getProjectBySlug, getProjects } from "./projects";
import { projectsEn } from "./projects.en";

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

describe("English translations (projects.en)", () => {
  it("covers every project slug", () => {
    for (const project of projects) {
      expect(projectsEn[project.slug], `missing EN translation for ${project.slug}`).toBeDefined();
    }
  });

  it("matches the Spanish array lengths so the merge stays aligned", () => {
    for (const project of projects) {
      const t = projectsEn[project.slug];
      expect(t.metrics.length).toBe(project.metrics.length);
      expect(t.process.steps.length).toBe(project.process.steps.length);
      expect(t.outcomes.items.length).toBe(project.outcomes.items.length);
      expect(t.context.length).toBe(project.context.length);
      expect(t.challenge.length).toBe(project.challenge.length);
    }
  });

  it("localizes content while keeping structural fields shared", () => {
    const en = getProjectBySlug("neoris-etb", "en");
    expect(en?.title).toBe("Coverage Validation");
    // Structural fields come from the Spanish source, unchanged.
    expect(en?.heroImage).toBe(getProjectBySlug("neoris-etb", "es")?.heroImage);
    expect(getProjects("en")).toHaveLength(projects.length);
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
