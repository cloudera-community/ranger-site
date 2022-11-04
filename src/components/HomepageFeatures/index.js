import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Centralized security administration',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Centralized security administration to manage all security related tasks in a central UI or using REST APIs.
      </>
    ),
  },
  {
    title: 'Fine grained and Standardized Authorization',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>      
        Enhanced support for different authorization methods - Role based access control, attribute based access control etc.
      </>
    ),
  },
  {
    title: 'Centralized Auditing',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Centralize auditing of user access and administrative actions (security related) within all the components of Hadoop.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
