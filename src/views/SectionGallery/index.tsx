import SectionHeader from "@/components/SectionHeader";
import styles from "./Gallery.module.css";
import Image from "next/image";
import { ImageProps, images } from "./images";
import Button from "@/components/Button";

export default function Gallery() {
  const renderImages = (image: ImageProps) => (
    <li className={styles.zoomWraper} key={image.id}>
      <Image src={image.src} alt={image.alt} className={styles.image} />
    </li>
  );

  const renderImagesContainer = (): JSX.Element[] =>
    images.map((image) => (
      <ul key={image.id} className={styles.list}>
        {renderImages(image)}
      </ul>
    ));

  return (
    <section id="gallery">
      <div className={styles.container}>
        <SectionHeader
          title="Gallery"
          paragraph="We focus on ergonomics and meeting you where you work. It's only a keystroke away"
        />

        <div className={styles.galleryContainer}>{renderImagesContainer()}</div>
        <div className={styles.limitAreaButton}>
          <Button text="See more" />
        </div>
      </div>
    </section>
  );
}
