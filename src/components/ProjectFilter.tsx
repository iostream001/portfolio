"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/data/portfolio";
import { projectCategories } from "@/data/portfolio";

type Filter = "All" | ProjectCategory;

type ProjectFilterProps = {
  projects: Project[];
};

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  const filters: Filter[] = ["All", ...projectCategories];

  return (
    <div className="space-y-8">
      <div
        aria-label="Filter portfolio projects"
        className="flex flex-wrap gap-2"
        role="group"
      >
        {filters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter}
            className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? "border-stone-950 bg-stone-950 text-white"
                : "border-stone-300 bg-white text-stone-800 hover:border-teal-600 hover:text-teal-700"
            }`}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <article
            className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm"
            key={`${project.category}-${project.title}`}
          >
            <Image
              alt={`${project.title} screenshot`}
              className="aspect-[4/3] w-full object-cover"
              height={480}
              src={project.image}
              width={640}
            />
            <div className="space-y-3 p-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-teal-700">
                  {project.category}
                </p>
                <h3 className="mt-1 text-lg font-bold text-stone-950">
                  {project.title}
                </h3>
              </div>
              {project.href ? (
                <a
                  className="inline-flex rounded-md border border-stone-300 px-3 py-2 text-sm font-semibold text-stone-800 transition hover:border-teal-600 hover:text-teal-700"
                  href={project.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  Visit project
                </a>
              ) : (
                <p className="text-sm text-stone-500">Screenshot available</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
