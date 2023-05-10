import SectionHeader from "@/components/SectionHeader";
import styles from "./Partners.module.css";
import Image from "next/image";
import { BrandProps, brands } from "./images";

export default function Partners() {
  const renderBrands = (brand: BrandProps) => (
    <li key={brand.id} className={styles.listItem}>
      <span>{brand.title}</span>
      <Image src={brand.src} alt={brand.alt} className={styles.image} />
    </li>
  );

  const renderBrandsContainer = (): JSX.Element[] =>
    brands.map((brand) => (
      <ul key={brand.id} className={styles.list}>
        {renderBrands(brand)}
      </ul>
    ));

  return (
    <section>
      <div className={styles.container}>
        <SectionHeader
          title="Partners"
          paragraph="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
        />

        <div className={styles.brandsContainer}>{renderBrandsContainer()}</div>
      </div>
    </section>
  );
}
