import CardForNewsletter from "@/components/Card/CardForNewsletter";
import styles from "./Newsletter.module.css";
import image from "../../../public/assets/images/contents/website-screen.svg";

export default function Newsletter() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <CardForNewsletter
            title="OpenType feature and Variable fonts."
            buttonText="Try For Free"
            src={image}
            alt="Website Screen."
          />
        </div>
      </div>
    </section>
  );
}
