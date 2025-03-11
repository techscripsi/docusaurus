import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Mermaid from '@theme/Mermaid';
import React from 'react';

// FontAwesome start
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { faBook } from '@fortawesome/pro-solid-svg-icons'
// FontAwesome end

import Features from '@site/docs/_snippets/features.mdx'

import Logo from '@site/static/img/logo-9BC834.svg';

import Index from '/docs/__snippets__/index.mdx';

import styles from './index.module.css';

import ReactDOM from 'react-dom'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
// const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />
// ReactDOM.render(element, document.body)

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
        <FontAwesomeIcon icon="money-bill-transfer" /> Payment Scenarios
        </Heading>
        <p className="hero__subtitle">Review some examples of payment scenarios to get a better idea of how payments work</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="OmniCart <head />">
      <HomepageHeader />
      <main>
        <p />
          <p />
          <div class="tile-container">
            <Link to="/docs/scenarios/basic#onestep" className="card-link">
             <div class="tile card-click item shadow--md">
                 <h3 class="badge badge--secondary">Basic One-Step Payment</h3>
                 <p>Minimum one-step payment scenario</p>
             </div>
            </Link>
            <Link to="/docs/scenarios/basic#twostep" className="card-link">
              <div class="tile card-click item shadow--md">
                <h3>Basic Two-Step Payment</h3>
                 <p>Minimum two-step payment scenario</p>
              </div>
            </Link>
            <Link to="/docs/scenarios/complex" className="card-link">
              <div class="tile card-click item shadow--md">
                <h3>Complex Scenarios</h3>
                <p>A couple of complex scenarios with multiple options combined</p>
              </div>
            </Link>
            <Link to="/docs/scenarios/cancel" className="card-link">
              <div class="tile card-click item shadow--md">
                <h3>Cancellation Scenarios</h3>
                <p>Examples of different cancellation scenarios</p>
              </div>
            </Link>
            <Link to="/docs/scenarios/refund" className="card-link">
              <div class="tile card-click item shadow--md">
                <h3>Refund Scenarios</h3>
                <p>Examples of several refund scenarios</p>
              </div>
            </Link>
            <Link to="/docs/scenarios/failure" className="card-link">
              <div class="tile card-click item shadow--md">
                <h3>Failure Scenarios</h3>
                <p>Examples of several payment failure scenarios</p>
              </div>
            </Link>
          </div>
        <p />
      </main>
    </Layout>
  );
}
