interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}
export default function HeroSection({ title, description, children }: Props) {
  return (
    <section className="border border-light-secondary dark:border-dark-muted">
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </section>
  );
}
