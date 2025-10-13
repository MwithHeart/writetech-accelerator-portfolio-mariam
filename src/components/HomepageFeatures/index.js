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
        From step-by-step guides to structuring API docs, I focus on turning complex concepts into content that's easy to follow. Because great docs are quiet engineers, they solve problems before support tickets do.
      </>
    ),
  },
  {
    title: 'Write with intent and impact',
    Svg: IntentSvg,
   // Svg: require('@site/static/img/intent.svg').default,
    description: (
      <>
        Every piece I write starts with the question: "Who am I helping, and what do they need?" From in-depth tutorials to technical articles, I write with purpose because great docs serve people, not just products.

      </>
    ),
  },
  {
    title: 'User-centric editing',
    Svg: UserCentricSvg,
   // Svg: require('@site/static/img/user-centric.svg').default,
    description: (
      <>
        Whether it’s an API reference or a Quickstart guide, I write with empathy. My goal is to make the reader’s next step obvious and their learning curve smoother. Clarity isn’t an afterthought; it’s the goal.
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
