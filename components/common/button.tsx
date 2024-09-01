import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "link";
  type?: "button" | "submit" | "reset";
  rounded?: boolean;
  disabled?: boolean;
  className?: string;
  href?: string;
  text: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  type = "button",
  disabled = false,
  rounded = false,
  text,
  className,
  href,
  onClick,
  children,
  ...props
}) => {
  const buttonClass = `btn btn-${variant} transition duration-300 ${
    rounded ? "rounded-full" : "rounded"
  } ${variant === "primary" ? "px-4 sm:px-8 py-2 text-light-primary hover:bg-dark-primary dark:hover:bg-light-secondary dark:text-dark-secondary bg-dark-secondary dark:bg-light-primary" : variant === "secondary" ? "px-4 sm:px-8 py-2 border-transparent bg-light-secondary border-light-muted hover:bg-light-primary border border-solid dark:hover:bg-dark-primary dark:border-dark-muted dark:bg-dark-secondary" : variant === "link" ? "relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:translate-y-1 after:bg-primary-muted after:opacity-0 after:transition-all after:content-[''] group-hover:after:translate-y-0 group-hover:after:opacity-100" : ""} ${
    disabled
      ? "cursor-not-allowed bg-slate-300 text-slate-600"
      : "hover:bg-main-color"
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass} {...props}>
        {children}
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClass}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
