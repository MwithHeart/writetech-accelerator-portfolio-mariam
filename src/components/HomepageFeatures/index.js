import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import BridgeSvg from '@site/static/img/bridge.svg';
import IntentSvg from '@site/static/img/intent.svg';
import UserCentricSvg from '@site/static/img/user-centric.svg';


// const p = document.createElement('p');
// const pText = document.createTextNode("Hello");
    // <p>"Hello"</p>

// const newParagraph = document.createElement("p");
// newParagraph.textContent = "Bridging people and complex technological concepts";


const FeatureList = [
  {
    title: 'Bridge complexity with clarity',
    Svg: BridgeSvg,
    //Svg: require('@site/static/img/bridge.svg').default,
    description: (
      <>
        Whether you're tackling satellite tech, or other complex concepts, I deliver documentation that’s easy to follow and thoughtfully structured.
      </>
    ),
  },
  {
    title: 'Write with intent and impact',
    Svg: IntentSvg,
   // Svg: require('@site/static/img/intent.svg').default,
    description: (
      <>
        From technical tutorials to informative articles, my writing always starts with “Who am I helping, and what do they need?""
      </>
    ),
  },
  {
    title: 'User-Centric Editing',
    Svg: UserCentricSvg,
   // Svg: require('@site/static/img/user-centric.svg').default,
    description: (
      <>
        I ensure documentation works for all users, whether that means simplifying jargon, adding visuals, or sharing process notes to explain how solutions were crafted.
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
        <Heading as="h3">{title}</Heading>
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
