import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: React.ReactElement;
  className?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Strong Foundations",
    className: "carnationPink",
    description: (
      <>
        Build on solid engineering practices with XP and CD principles as your
        foundation. Quality and excellence are not optional - they're essential
        for true speed.
      </>
    ),
  },
  {
    title: "Practical Learning",
    className: "cloudBlue",
    description: (
      <>
        Follow battle-tested SOPs that ensure consistency and quality. Learn how
        to maintain high standards while moving fast.
      </>
    ),
  },
  {
    title: "Strategic Solutions",
    className: "mineralGreen",
    description: (
      <>
        Leverage AI to accelerate your already-excellent practices. Scale your
        engineering capabilities without compromising quality.
      </>
    ),
  },
];

function Feature({ title, description, className }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div
        className={clsx(
          styles.featureCard,
          className && styles[className],
          "text--center padding-horiz--md"
        )}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
