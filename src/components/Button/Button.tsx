import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

const Button = ({
  children,
  className,
  appearnce = "small",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles["button"], styles["accent"], className, {
        [styles["small"]]: appearnce === "small",
        [styles["big"]]: appearnce === "big",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
