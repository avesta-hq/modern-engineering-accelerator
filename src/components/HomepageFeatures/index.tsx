import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Strong Foundations",
    description: (
      <>
        Build on solid engineering practices with XP and CD principles as your foundation. Quality and excellence are
        not optional - they're essential for true speed.
      </>
    ),
  },
  {
    title: "Standardized Excellence",
    description: (
      <>
        Follow battle-tested SOPs that ensure consistency and quality. Learn how to maintain high standards while moving
        fast.
      </>
    ),
  },
  {
    title: "AI-Powered Acceleration",
    description: (
      <>
        Leverage AI to accelerate your already-excellent practices. Scale your engineering capabilities without
        compromising quality.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
