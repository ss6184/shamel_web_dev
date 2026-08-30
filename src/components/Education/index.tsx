import type { getPortfolioData } from "@/lib/actions/portfolio";
import SectionDivider from "../SectionDivider";
import Certifications from "./Certifications";
import EducationItem from "./EducationItem";
import styles from "./Education.module.css";

type PortfolioUser = NonNullable<Awaited<ReturnType<typeof getPortfolioData>>>;

type EducationProps = {
  educations?: PortfolioUser["educations"];
};

export default function Education({ educations }: EducationProps) {
  const items = educations ?? [];

  return <section id="education" className={`${styles.section} px-6 py-24 max-w-6xl mx-auto`}>
    <SectionDivider label="03 — Education" />
    {items.map((item, index) => <EducationItem key={item.id} item={item} last={index === items.length - 1} />)}
    <Certifications />
  </section>;
}
