import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  buttonStyle?: string;
  buttonType?: string | any;
  event?: () => void;
  newStyle?: boolean;
  ariaLabel?: string;
  text?: any;
}

export default function Button({
  buttonStyle,
  buttonType,
  event,
  ariaLabel,
  text,
  newStyle,
}: ButtonProps) {
  return (
    <button
      className={newStyle ? buttonStyle : styles.main}
      type={buttonType}
      onClick={event}
      aria-label={ariaLabel}
    >
      {text}
    </button>
  );
}
