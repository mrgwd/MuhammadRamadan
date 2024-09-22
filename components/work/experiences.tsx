import Experience from "./experience";

export default function Experiences() {
  return (
    <section className="text-dark-secondary dark:text-light-secondary">
      <article className="space-y-4" data-fade-2>
        <Experience
          name="ATHR"
          role="UI Developer"
          dateFrom="Mar, 2023"
          dateTo="Jun, 2024"
          summary="I joined ATHR as a UI Developer. I was responsible for designing, building and maintaining the user interface of the web application."
          achievements={[
            "Designed and built responsive, user-friendly interfaces.",
            "Developed reusable components using React, TypeScript, and Next.js.",
            "Optimized website performance by reducing load times and page weight.",
            "Collaborated with back-end developers to integrate front-end and back-end functionality.",
          ]}
          closing="During my time at ATHR, I gained my first production experience using React, learned how to work in a team and how to communicate effectively with other team members."
        />
      </article>
    </section>
  );
}
