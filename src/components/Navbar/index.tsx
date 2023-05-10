import Image from "next/image";
import Button from "../Button";
import styles from "./Navbar.module.css";
import logo from "public/assets/images/logo/figma-land-brand.svg";
import Link from "next/link";
import { LinkItem, menuLinks } from "./links";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderLinkItem = (linkItem: LinkItem) => (
    <li className={styles.listItem} key={linkItem.id}>
      <a className={styles.link} href={linkItem.link}>
        {linkItem.text}
      </a>
    </li>
  );

  const renderMenuLinks = (): JSX.Element[] =>
    menuLinks.map((link) => (
      <ul key={link.id} className={styles.list}>
        {renderLinkItem(link)}
      </ul>
    ));

  return (
    <header
      className={`${styles.containerNotFixed} ${
        isFixed ? styles.containerFixed : ""
      }`}
    >
      <div className={styles.subContainer}>
        <Link href="/">
          <Image src={logo} alt="Figma Land Brand." className={styles.image} priority quality={100} />
        </Link>
        <nav className={styles.nav}>{renderMenuLinks()}</nav>
        <div className={styles.options}>
          <div className={styles.limitAreaButton}>
            <Button text="Login" />
          </div>
          <Sidebar />
        </div>
      </div>
    </header>
  );
}
