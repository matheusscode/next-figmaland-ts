import Button from "../Button";
import styles from "./Footer.module.css";
import { MapsGroups, filterMaps } from "./maps";
import { socialIcons, socialTags } from "./social";
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import { useRef } from "react";

function Carousel() {
  const renderMapsItems = (mapItem: MapsGroups) => (
    <li className={styles.listItem} key={mapItem.id}>
      <h1>{mapItem.groupName}</h1>
      {mapItem.links.map((link) => (
        <ul key={link.id} className={styles.mapList}>
          <li className={styles.mapListItem}>
            <a href={link.link}>{link.text}</a>
          </li>
        </ul>
      ))}
    </li>
  );

  const renderMaps = (): JSX.Element[] =>
    filterMaps.map((maps) => (
      <ul key={maps.id} className={styles.listMobile}>
        {renderMapsItems(maps)}
      </ul>
    ));

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: -350,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: 350,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={styles.carouselContainer}>
      <Button
        text={<AiOutlineArrowLeft/>}
        event={handleScrollLeft}
        newStyle={true}
        buttonStyle={styles.buttonOne}
      />
      <div ref={scrollRef} className={styles.scroll}>
        {renderMaps()}
      </div>
      <Button
        text={<AiOutlineArrowRight/>}
        event={handleScrollRight}
        newStyle={true}
        buttonStyle={styles.buttonTwo}
      />
    </div>
  );
}

export default function Footer() {
  const renderMapsItems = (mapItem: MapsGroups) => (
    <li className={styles.listItem} key={mapItem.id}>
      <h1>{mapItem.groupName}</h1>
      {mapItem.links.map((link) => (
        <ul key={link.id} className={styles.mapList}>
          <li className={styles.mapListItem}>
            <a href={link.link}>{link.text}</a>
          </li>
        </ul>
      ))}
    </li>
  );

  const renderMaps = (): JSX.Element[] =>
    filterMaps.map((maps) => (
      <ul key={maps.id} className={styles.list}>
        {renderMapsItems(maps)}
      </ul>
    ));

  return (
    <section>
      <footer className={styles.footer}>
        <div className={styles.maps}>
          {renderMaps()}
          <div className={styles.mapForMobile}>
            <Carousel />
          </div>
        </div>
        <div className={styles.social}>
          <ul className={styles.socialTagsContainer}>
            {socialTags.map((tag) => (
              <li className={styles.tagsList} key={tag.id}>
                <a href={tag.link}>
                  {" "}
                  <span>
                    <tag.icon />
                  </span>
                  {tag.text}
                </a>
              </li>
            ))}
          </ul>
          <ul className={styles.socialIconsContainer}>
            {socialIcons.map((icon) => (
              <li className={styles.iconsList} key={icon.id}>
                <a href={icon.link}>
                  <span>
                    <icon.icon />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </section>
  );
}
