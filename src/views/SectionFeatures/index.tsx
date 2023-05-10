import SectionHeader from "@/components/SectionHeader";
import styles from "./Features.module.css";
import Image from "next/image";
import featuresStatistics from "../../../public/assets/images/contents/features-statistic.svg";
import { FeatureCardItem, featuresCards } from "./cards";
import CardForFeatures from "@/components/Card/CardForFeatures";

export default function Features() {
  const renderCardItem = (cardItem: FeatureCardItem) => (
    <li className={styles.listItem} key={cardItem.id}>
      <CardForFeatures cardItem={cardItem} />
    </li>
  );

  const renderCardItems = (): JSX.Element[] =>
    featuresCards.map((card) => (
      <ul key={card.id} className={styles.list}>
        {renderCardItem(card)}
      </ul>
    ));

  return (
    <section>
      <div className={styles.container}>
        <SectionHeader
          title="FEATURES"
          paragraph="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan they schedule."
        />
        <div className={styles.content}>
          <Image
            src={featuresStatistics}
            alt="Features Statistics image content."
            quality={100}
            className={styles.image}
          />
          <div className={styles.cardsContainer}>{renderCardItems()}</div>
        </div>
      </div>
    </section>
  );
}
