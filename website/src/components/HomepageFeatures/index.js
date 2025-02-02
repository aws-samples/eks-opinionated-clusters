import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const FeatureList = [
  {
    title: 'Advanced Observability',
    Svg: require('@site/static/img/cloud.svg').default,
    description: (
      <>
        Try out sophisticated tools that provide you with deep insights into cluster performance and application behavior.
        Learn how to quickly prevent, identify and resolve issues in your EKS clusters, leading to improved system reliability and reduced downtime.
      </>
    ),
  },
  {
    title: 'Enhanced Operational Efficiency',
    Svg: require('@site/static/img/toolbox.svg').default,
    description: (
      <>
        Explore comprehensive cloud operations tools, to more effectively manage, monitor, and optimize your EKS clusters.
        Learn how to streamline day-to-day operations, to reduce the learning curve associated with Kubernetes management and focus more on innovation and application development.
      </>
    ),
  },
  {
    title: 'Cost Optimization and Risk Mitigation',
    Svg: require('@site/static/img/laptop.svg').default,
    description: (
      <>
        Deep dive into solutions with built-in cost analysis, that help you right-sizing your clusters and optimizing resource allocation.
        Experiment with risk assessment and compliance management features, critical for organizations in regulated industries.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} style={{width: '40%'}} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
