import type { getPortfolioData } from "@/lib/actions/portfolio";
import { C } from "../../data";
import HeroActions from "./HeroActions";
import HeroContent from "./HeroContent";
import styles from "./Hero.module.css";

type PortfolioUser = NonNullable<Awaited<ReturnType<typeof getPortfolioData>>>;

type HeroProps = {
  users?: PortfolioUser | null;
};

export default function Hero({ users }: HeroProps) {
  void users;

  return <section className={`${styles.section} relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto`} id="about">
    <div className="relative z-10 max-w-3xl"><HeroContent /><HeroActions /></div>
    <div className="absolute bottom-10 left-6" style={{ color: C.gray, fontFamily: "var(--font-mono)", fontSize: ".6rem" }}>SCROLL ─</div>
  </section>;
}
