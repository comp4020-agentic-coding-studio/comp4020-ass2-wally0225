import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

// Assigned when this repo was provisioned; the brief says the course keeps
// these no matter which level (the code's first digit) gets chosen.
const PROVISIONED_DIGITS = "470";

describe("assignment 2 spec", () => {
  it("keeps the provisioned course code digits", () => {
    expect(
      api.course.code.slice(-3),
      `course code ${api.course.code} should still end in ${PROVISIONED_DIGITS}`,
    ).toBe(PROVISIONED_DIGITS);
  });

  it("has dated content in every one of the twelve teaching weeks", () => {
    const dated = api.nodes.filter((n) => ["sessions", "lectures"].includes(n.type));
    const weeksCovered = new Set(dated.map((n) => Number(n.meta?.week)));
    const missing = Array.from({ length: 12 }, (_, i) => i + 1).filter((w) => !weeksCovered.has(w));
    expect(missing, `weeks with no session or lecture: ${missing.join(", ")}`).toEqual([]);
  });

  it("links at least one lecture to a slide deck that actually builds", () => {
    const withSlides = api.nodes.filter(
      (n) => n.type === "lectures" && typeof n.meta?.slides === "string",
    );
    expect(withSlides.length, "no lecture has a slides: link").toBeGreaterThan(0);
    for (const lecture of withSlides) {
      const slides = lecture.meta?.slides as string;
      const deckPage = resolve("dist", slides.replace(/^\//, ""), "index.html");
      expect(existsSync(deckPage), `${lecture.id} links ${slides}, but dist has no page there`).toBe(
        true,
      );
    }
  });

  it("sums assessment weights to 100% across the course", () => {
    const total = api.nodes
      .filter((n) => n.type === "assessments")
      .reduce((sum, n) => sum + Number(n.meta?.weight ?? 0), 0);
    expect(total, `assessment weights sum to ${total}, not 100`).toBe(100);
  });
});
