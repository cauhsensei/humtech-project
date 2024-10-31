

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={`rounded-[60px] px-4s py-2 font-sans font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;