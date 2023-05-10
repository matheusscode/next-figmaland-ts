import Button from "@/components/Button";
import styles from "./Hero.module.css";
import Image from "next/image";
import screens from "../../../public/assets/images/background/screens.svg";

export default function Hero() {
  return (
    <section id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Work at the speed of thought</h1>
          <p>
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to play their schedule
          </p>
        </div>
        <div className={styles.options}>
          <Button
            newStyle={true}
            buttonStyle={styles.buttonOne}
            text="Try for Free"
          />
          <Button text="Learn More" />
        </div>

        <Image src={screens} alt="" className={styles.background} />
      </div>
    </section>
  );
}
