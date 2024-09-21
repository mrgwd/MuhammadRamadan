import { formatDate } from "@/utils/formatDate";

interface HeaderProps {
  title: string;
  createdAt: string;
}
export default function Header({ title, createdAt }: HeaderProps): JSX.Element {
  const date = formatDate(createdAt);
  return (
    <section>
      <h1>{title}</h1>
      <div className="flex justify-between gap-2 text-dark-muted dark:text-light-muted">
        <p>{date}</p>
      </div>
      <hr />
    </section>
  );
}
