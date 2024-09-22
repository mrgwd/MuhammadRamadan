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
    <>
      <div>
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="text-dark-muted dark:text-light-muted">
          {role} • {dateFrom} — {dateTo}
        </p>
      </div>
      <p>{summary}</p>
      <ul className="ml-6 list-disc marker:text-dark-muted dark:marker:text-light-muted">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      {closing && <p>{closing}</p>}
    </>
  );
}
