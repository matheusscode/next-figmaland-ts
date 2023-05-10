import Image from "next/image";
import styles from "./CardForFeatures.module.css";
import { FeatureCardItem } from "@/views/SectionFeatures/cards";

export default function CardForFeatures({
  cardItem,
}: {
  cardItem: FeatureCardItem;
}) {
  return (
    <article className={styles.cardContainer}>
      <header className={styles.cardHeader}>
        <Image src={cardItem.src} alt={cardItem.alt} quality={100} />
        <h1>{cardItem.title}</h1>
      </header>
      <div className={styles.cardBody}>
        <p>{cardItem.text}</p>
      </div>
    </article>
  );
}
