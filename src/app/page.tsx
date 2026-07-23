import Image from "next/image";
import { ProjectFilter } from "@/components/ProjectFilter";
import {
  awards,
  contactLinks,
  education,
  experiences,
  profile,
  projects,
  skills,
} from "@/data/portfolio";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Education", href: "#education" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

function SectionHeading({
  eyebrow,
  title,
  children,
}: Readonly<{
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}>) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black text-stone-950 sm:text-4xl">
        {title}
      </h2>
      {children ? <div className="mt-4 text-stone-700">{children}</div> : null}
    </div>
  );
}

function ExternalLink({
  href,
  children,
  className = "",
}: Readonly<{
  href: string;
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <a
      className={className}
      href={href}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a className="text-lg font-black text-stone-950" href="#home">
            {profile.name}
          </a>
          <nav aria-label="Main navigation" className="flex flex-wrap gap-3">
            {navigation.map((item) => (
              <a
                className="text-sm font-semibold text-stone-700 transition hover:text-teal-700"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        className="relative isolate overflow-hidden bg-stone-950 text-white"
        id="home"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            alt=""
            className="h-full w-full object-cover opacity-35"
            fill
            priority
            sizes="100vw"
            src="/images/hero-bg.jpg"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,0.96),rgba(28,25,23,0.78),rgba(28,25,23,0.52))]" />
        </div>
        <div className="mx-auto grid min-h-[76vh] max-w-7xl gap-10 px-5 py-20 sm:py-24 lg:grid-cols-[1fr_360px] lg:items-center lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">
              {profile.roles.join(" / ")}
            </p>
            <h1 className="mt-5 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-stone-100">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-md bg-amber-300 px-5 py-3 text-sm font-black text-stone-950 transition hover:bg-amber-200"
                href="#portfolio"
              >
                View portfolio
              </a>
              <a
                className="rounded-md border border-white/40 px-5 py-3 text-sm font-black text-white transition hover:border-white hover:bg-white/10"
                href="#contact"
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="w-full max-w-xs justify-self-start lg:justify-self-end">
            <Image
              alt={`${profile.name} profile photo`}
              className="aspect-square rounded-lg border border-white/20 object-cover shadow-2xl"
              height={480}
              src="/images/profile-img.jpg"
              width={480}
            />
          </div>
        </div>
      </section>

      <section className="scroll-mt-20 px-5 py-16 lg:px-8" id="about">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,420px)_1fr]">
          <SectionHeading eyebrow="About" title={profile.headline}>
            <p>{profile.intro}</p>
          </SectionHeading>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-stone-200 bg-white p-6">
              <h3 className="text-lg font-black text-stone-950">Overview</h3>
              <ul className="mt-5 space-y-3 text-stone-700">
                {profile.summary.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-2 h-2 w-2 rounded-full bg-teal-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-stone-200 bg-white p-6">
              <h3 className="text-lg font-black text-stone-950">Details</h3>
              <dl className="mt-5 space-y-4">
                {profile.details.map((detail) => (
                  <div
                    className="border-b border-stone-100 pb-4 last:border-b-0 last:pb-0"
                    key={detail.label}
                  >
                    <dt className="text-sm font-bold uppercase tracking-wide text-stone-500">
                      {detail.label}
                    </dt>
                    <dd className="mt-1 font-semibold text-stone-900">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-20 bg-white px-5 py-16 lg:px-8" id="skills">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading eyebrow="Skills" title="Technologies and tools">
            <p>I have experience and expertise in these technologies.</p>
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill) => (
              <div
                className="rounded-lg border border-stone-200 bg-stone-50 p-5"
                key={skill.name}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold text-stone-950">{skill.name}</h3>
                  <span className="text-sm font-black text-teal-700">
                    {skill.level}%
                  </span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-stone-200">
                  <div
                    aria-label={`${skill.name} level ${skill.level}%`}
                    className="h-full rounded-full bg-gradient-to-r from-teal-600 to-amber-400"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuemax={100}
                    aria-valuemin={0}
                    aria-valuenow={skill.level}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-20 px-5 py-16 lg:px-8" id="experience">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading eyebrow="Experience" title="Work experience">
            <p>These are my work experiences in web and app development.</p>
          </SectionHeading>
          <div className="space-y-6">
            {experiences.map((experience) => (
              <article
                className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm"
                key={experience.id}
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
                  <div>
                    <h3 className="text-2xl font-black text-stone-950">
                      {experience.title}
                    </h3>
                    {experience.company ? (
                      <p className="mt-2 text-sm font-semibold text-stone-600">
                        Company:{" "}
                        <ExternalLink
                          className="text-teal-700 underline-offset-4 hover:underline"
                          href={experience.company.href ?? "#experience"}
                        >
                          {experience.company.label}
                        </ExternalLink>
                      </p>
                    ) : null}
                    <p className="mt-2 text-sm font-semibold text-stone-600">
                      {experience.location}
                    </p>
                    <p className="mt-4 leading-7 text-stone-700">
                      {experience.description}
                    </p>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="font-black text-stone-950">
                        Key Experience
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-stone-700">
                        {experience.keyExperience.map((item) => (
                          <li className="flex gap-2" key={item}>
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-coral" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-black text-stone-950">
                        {experience.outputLabel}
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-stone-700">
                        {experience.outputs.map((item) => (
                          <li className="flex gap-2" key={item.label}>
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600" />
                            {item.href ? (
                              <ExternalLink
                                className="text-teal-700 underline-offset-4 hover:underline"
                                href={item.href}
                              >
                                {item.label}
                              </ExternalLink>
                            ) : (
                              <span>{item.label}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-20 bg-stone-100 px-5 py-16 lg:px-8"
        id="portfolio"
      >
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading eyebrow="Portfolio" title="Selected project screenshots">
            <p>
              These are screenshots of past projects. Some projects may no longer
              exist on the web or in local development.
            </p>
          </SectionHeading>
          <ProjectFilter projects={projects} />
        </div>
      </section>

      <section className="scroll-mt-20 bg-white px-5 py-16 lg:px-8" id="education">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading eyebrow="Education" title="Academic background" />
          <div className="overflow-hidden rounded-lg border border-stone-200">
            <table className="w-full border-collapse bg-white text-left text-sm">
              <thead className="bg-stone-950 text-white">
                <tr>
                  <th className="px-4 py-3 font-black">Year</th>
                  <th className="px-4 py-3 font-black">School</th>
                  <th className="px-4 py-3 font-black">Degree</th>
                </tr>
              </thead>
              <tbody>
                {education.map((item) => (
                  <tr className="border-t border-stone-200" key={item.school}>
                    <td className="px-4 py-4 font-semibold text-stone-700">
                      {item.year}
                    </td>
                    <td className="px-4 py-4 font-semibold">
                      <ExternalLink
                        className="text-teal-700 underline-offset-4 hover:underline"
                        href={item.schoolUrl}
                      >
                        {item.school}
                      </ExternalLink>
                    </td>
                    <td className="px-4 py-4 font-semibold text-stone-900">
                      {item.degree}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="scroll-mt-20 px-5 py-16 lg:px-8" id="awards">
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading eyebrow="Awards" title="Recognition" />
          <div className="grid gap-5 md:grid-cols-3">
            {awards.map((award) => (
              <article
                className="rounded-lg border border-stone-200 bg-white p-6"
                key={award.title}
              >
                <h3 className="text-lg font-black text-stone-950">
                  {award.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-700">
                  {award.description}
                </p>
                {award.location ? (
                  <p className="mt-3 text-sm font-semibold text-stone-600">
                    {award.location}
                  </p>
                ) : null}
                {award.date ? (
                  <p className="mt-4 text-sm font-black uppercase tracking-wide text-teal-700">
                    {award.date}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-20 bg-stone-950 px-5 py-16 text-white lg:px-8"
        id="contact"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Contact" title="How to reach me">
            <p className="text-stone-300">
              If you have questions or inquiries, please use the contact
              information below.
            </p>
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((link) => (
              <ExternalLink
                className="rounded-lg border border-white/15 bg-white/5 p-5 transition hover:border-amber-300 hover:bg-white/10"
                href={link.href}
                key={link.label}
              >
                <span className="block text-sm font-bold uppercase tracking-wide text-amber-300">
                  {link.label}
                </span>
                <span className="mt-2 block break-words text-lg font-black">
                  {link.value}
                </span>
              </ExternalLink>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright <strong>{profile.name}</strong>
          </p>
          <div className="flex flex-wrap gap-3">
            {profile.socials.map((social) => (
              <ExternalLink
                className="font-semibold text-stone-700 hover:text-teal-700"
                href={social.href}
                key={social.label}
              >
                {social.label}
              </ExternalLink>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
