import styles from "./SectionHeader.module.css"

interface SectionContent {
  title: string;
  paragraph?: string;
}

export default function SectionHeader({title, paragraph}: SectionContent) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.paragraph}>{paragraph}</p>
    </div>
  )
}
