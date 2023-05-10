import styles from "./CardForNewsletter.module.css";
import Button from "@/components/Button";
import Image from "next/image";

interface CardForNewsletterProps {
  title: string;
  buttonText: string;
  src: string;
  alt: string;
}

export default function CardForNewsletter({
  title,
  buttonText,
  src,
  alt,
}: CardForNewsletterProps) {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.leftSide}>
        <h1>{title}</h1>
        <div className={styles.limitAreaButton}>
          <Button newStyle={true} buttonStyle={styles.button} text={buttonText} />
        </div>
      </div>
      <Image src={src} alt={alt} className={styles.image} quality={100} />
    </article>
  );
}
