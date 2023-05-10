import Button from "@/components/Button";
import styles from "./CardForContents.module.css";
import Image from "next/image";

export default function CardForContents({ cardItem }: any) {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <h1 className={styles.title}>{cardItem.title}</h1>
        <p className={styles.text}>{cardItem.text}</p>
      </div>
      <div className={styles.cardBody}>
        <Button
          newStyle={true}
          buttonStyle={styles.button}
          text={cardItem.buttonText}
        />
        <Image
          src={cardItem.src}
          alt={cardItem.alt}
          className={styles.image}
          quality={100}
        />
      </div>
    </article>
  );
}
