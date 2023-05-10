import SectionHeader from "@/components/SectionHeader";
import styles from "./Testimonials.module.css";
import { testimonialCards } from "./cards";
import { TestimonialsCardProps } from "./cards";
import CardForTestimonials from "@/components/Card/CardForTestimonials";

export default function Testimonials() {
  const renderBrands = (testimonial: TestimonialsCardProps) => (
    <li key={testimonial.id} className={styles.listItem}>
      <CardForTestimonials cardItem={testimonial} />
    </li>
  );

  const renderBrandsContainer = (): JSX.Element[] =>
    testimonialCards.map((testimonial) => (
      <ul key={testimonial.id} className={styles.list}>
        {renderBrands(testimonial)}
      </ul>
    ));

  return (
    <section>
      <div className={styles.container}>
        <SectionHeader title="Testimonials" />

        <div className={styles.cardsContainer}>
          {renderBrandsContainer  ()}
        </div>
      </div>
    </section>
  );
}
