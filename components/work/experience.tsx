interface ExperienceProps {
  name: string;
  role: string;
  dateFrom: string;
  dateTo: string;
  summary: string;
  achievements: string[];
  closing?: string;
}
export default function Experience({
  name,
  role,
  dateFrom,
  dateTo,
  summary,
  achievements,
  closing,
}: ExperienceProps): JSX.Element {
  return (
    <section className="animate-fade-up border-b border-light-secondary opacity-0 delay-150 animation-delay-300 dark:border-dark-muted">
      <div>
        <p className="text-lg font-medium">{name}</p>
        <p className="text-dark-muted dark:text-light-muted">
          {role} • {dateFrom} — {dateTo}
        </p>
      </div>
      <p>{summary}</p>
      <ul className="ml-6 list-disc">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      {closing && <p>{closing}</p>}
    </section>
  );
}
