import Experience from "./experience";

export default function Experiences() {
  return (
    <section className="space-y-0 p-0">
      <article
        className="border border-t-0 border-light-secondary opacity-0 animation-delay-300 dark:border-dark-muted"
        data-fade-2
      >
        <Experience
          name="ATHR"
          role="UI Developer"
          dateFrom="Mar, 2023"
          dateTo="Jun, 2024"
          summary="I joined ATHR as a UI Developer. I was responsible for designing, building and maintaining the user interface of the web application."
          achievements={[
            "Built responsive and user-friendly user interfaces.",
            "Implemented new features and fixed bugs.",
            "Optimized websites performance by minimizing load times and reducing page weight.",
            "Worked closely with back-end developers to integrate front-end and back-end functionality.",
          ]}
          closing="During my time at ATHR, I gained my first production experience using React, learned how to work in a team and how to communicate effectively with other team members."
        />
      </article>
    </section>
  );
}
