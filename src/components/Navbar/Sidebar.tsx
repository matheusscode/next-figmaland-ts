import { useState } from "react";
import styles from "./Sidebar.module.css";
import Button from "../Button";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { CgLoadbarSound } from "react-icons/cg";
import logo from "public/assets/images/logo/figma-land-brand.svg";
import { LinkItem, menuLinks, menuSocialLinks } from "./links";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderLinkItem = (linkItem: LinkItem) => (
    <li className={styles.listItem} key={linkItem.id}>
      <a
        onClick={() => setIsOpen(false)}
        className={styles.link}
        href={linkItem.link}
      >
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
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Button
          newStyle={true}
          buttonStyle={styles.openMenu}
          text={<CgLoadbarSound />}
          event={() => setIsOpen(true)}
          ariaLabel="Button menu."
        />

        <div
          className={`${styles.sidebarContainer} ${
            isOpen === true ? styles.open : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          <div className={styles.sidebarHeader}>
            <Link href="/">
              <Image
                src={logo}
                alt="Figma Land Brand."
                quality={100}
                priority
                className={styles.image}
              />
            </Link>
            <Button
              newStyle={true}
              buttonStyle={styles.closeMenu}
              text={<AiOutlineClose />}
              event={() => setIsOpen(false)}
            />
          </div>
          <div className={styles.sidebarBody}>{renderMenuLinks()}</div>
          <div className={styles.sidebarFooter}>
            <ul className={styles.socialLinksList}>
              {menuSocialLinks.map((social) => (
                <li key={social.id}>
                  <a className={styles.socialLink} href={social.link} target="_blank" rel="noreferrer">
                    <social.icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
}
