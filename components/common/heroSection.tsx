interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}
export default function HeroSection({ title, description, children }: Props) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
      <hr />
    </section>
  );
}
