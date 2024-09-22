import { formatDate } from "@/utils/formatDate";
import { getReadTime } from "@/utils/getReadTime";
import Link from "next/link";

interface CardProps {
  title: string;
  date: string;
  href: string;
}
export default function Card({ title, date, href }: CardProps) {
  const formattedDate = formatDate(date);
  return (
    <Link href={`/blog/${href}`} className="group">
      <div className="my-2">
        <p className="decoration-transparent underline-offset-2 transition-all duration-300 group-hover:underline group-hover:decoration-inherit">
          {title}
        </p>
        <p className="flex justify-between text-dark-muted dark:text-light-muted">
          <span>{formattedDate}</span>
        </p>
      </div>
    </Link>
  );
}
