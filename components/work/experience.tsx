interface ExperienceProps {
  name: string;
  role: string;
  dateFrom: string;
  dateTo: string;
  summary: string;
  achievements: string[];
  closing?: string;
  // fadeOrder: number;
}
export default function Experience({
  name,
  role,
  dateFrom,
  dateTo,
  summary,
  achievements,
  closing,
  // fadeOrder,
}: ExperienceProps): JSX.Element {
  return (
    <>
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
    </>
  );
}
