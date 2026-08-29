import { EDUCATION } from "../../data";
import SectionDivider from "../SectionDivider";
import Certifications from "./Certifications";
import EducationItem from "./EducationItem";
import styles from "./Education.module.css";

export default function Education() {
  return <section id="education" className={`${styles.section} px-6 py-24 max-w-6xl mx-auto`}>
    <SectionDivider label="03 — Education" />
    {EDUCATION.map((item, index) => <EducationItem key={item.school} item={item} last={index === EDUCATION.length - 1} />)}
    <Certifications />
  </section>;
}
