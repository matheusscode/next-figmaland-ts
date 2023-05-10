import Image from "next/image";
import styles from "./CardForTestimonials.module.css";
import { TestimonialsCardProps } from "@/views/SectionTestimonials/cards";

export default function CardForTestimonials({ cardItem }: {cardItem: TestimonialsCardProps}) {
  return (
    <article className={styles.cardContainer}>
      <header className={styles.cardHeader}>
        <div className={styles.avatarContainer}>
          <Image src={cardItem.src} alt={cardItem.alt} className={styles.avatar} />
        </div>
        <div className={styles.info}>
          <h1>{cardItem.name}</h1>
          <h2>{cardItem.office}</h2>
        </div>
      </header>
      <div className={styles.cardBody}>
        <p className={styles.comment}>{cardItem.comment}</p>
      </div>
    </article>
  );
}
