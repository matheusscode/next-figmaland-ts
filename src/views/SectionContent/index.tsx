import SectionHeader from "@/components/SectionHeader";
import styles from "./Content.module.css";
import { ContentCardItem, contentCards } from "./cards";
import CardForContents from "@/components/Card/CardForContents";

export default function Content() {
  const renderCardItem = (cardItem: ContentCardItem) => (
    <li className={styles.listItem} key={cardItem.id}>
      <CardForContents cardItem={cardItem} />
    </li>
  );

  const renderCardItems = (): JSX.Element[] =>
    contentCards.map((card) => (
      <ul key={card.id} className={styles.list}>
        {renderCardItem(card)}
      </ul>
    ));

  return (
    <section id="contents">
      <div className={styles.container}>
        <SectionHeader
          title="Contents"
          paragraph="We focus on ergonomics and meeting you where you work. It´s only a keystroke away"
        />
        <div className={styles.cardsContainer}>{renderCardItems()}</div>
      </div>
    </section>
  );
}
