interface Props {
  title: string;
  children?: React.ReactNode;
}
export default function HeroSection({ title, children }: Props) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
      <hr />
    </section>
  );
}
