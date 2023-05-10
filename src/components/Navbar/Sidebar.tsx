import { useState } from "react";
import styles from "./Sidebar.module.css";
import Button from "../Button";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import logo from "public/assets/images/logo/figma-land-brand.svg";
import { LinkItem, menuLinks, menuSocialLinks } from "./links";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <button className={styles.hamburger} onClick={() => setIsOpen(true)}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
        {isOpen ? (
          <>
            <div className={styles.sidebarContainer}>
              <div className={styles.sidebarSubContainer}>
                <div className={styles.sidebarHeader}>
                  <Image
                    src={logo}
                    alt="Figma Land Brand."
                    quality={100}
                    priority
                    className={styles.image}
                  />
                  <Button
                    newStyle={true}
                    buttonStyle={styles.closeMenu}
                    text={<AiOutlineClose />}
                    event={() => setIsOpen(false)}
                  />
                </div>
                <div className={styles.sidebarBody}>{renderMenuLinks()}</div>
                <div className={styles.sidebarFooter}>
                  <ul>
                    {menuSocialLinks.map((social) => (
                      <li key={social.id}>
                        <a href={social.link}>
                          <social.icon />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.credits}>
                    <span>Building by: matheusscode</span>
                  </div>
                </div>
              </div>
              <div className={styles.overlay}></div>
            </div>
          </>
        ) : null}{" "}
      </div>
    </div>
  );
}
