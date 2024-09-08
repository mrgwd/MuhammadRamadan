import Experience from "./experience";

export default function Experiences() {
  return (
    <div>
      <Experience
        name="ATHR"
        role="UI Developer"
        dateFrom="Mar, 2023"
        dateTo="Jun, 2024"
        summary="I joined ATHR as a UI Developer. I was responsible for designing, building and maintaining the user interface of the web application."
        achievements={[
          "Built a responsive and user-friendly user interface.",
          "Implemented new features and fixed bugs.",
          "Optimized websites performance by minimizing load times and reducing page weight.",
          "Worked closely with back-end developers to integrate front-end and back-end functionality.",
        ]}
        closing="During my time at ATHR, I gained my first production experience using React, learned how to work in a team and how to communicate effectively with other team members."
      />
    </div>
  );
}
