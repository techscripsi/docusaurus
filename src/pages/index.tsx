import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Mermaid from '@theme/Mermaid';
import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

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



import Features from '/docs/_snippets/features.mdx'

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
    <header className={clsx('hero hero-index', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
        {siteConfig.title}
        </Heading>
        <p className="hero__subtitle"><Translate>Every order fits the cart, from one item to many</Translate></p>
{/* 
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/concepts/">
            Key Concepts
          </Link>&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/docs/api/omnicart-api">
            Jump to API Specification
          </Link>
        </div>
*/}
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
        <div class="container">
          <div class="row">
            <div class="col col--6">
              <Features />
            </div>
            <div class="col col--6">
            <h1><FontAwesomeIcon icon="gear" />&nbsp;<Translate>Technical Information</Translate></h1>
              <Link to="/docs/api/omnicart-api" className="card-link">
                <div class="card-demo text--no-decoration">
                  <div class="card-click item shadow--md">
                    <div class="card__header">
                      <h3><FontAwesomeIcon icon="code" />&nbsp;<Translate>API Specification</Translate></h3>
                    </div>
                    <div class="card__body">
                      <p>
                      <Translate>Implement our API in your store</Translate>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <p />
              <Link to="/docs/scenarios/" className="card-link">
                <div class="card-demo text--no-decoration">
                  <div class="card-click item shadow--md">
                    <div class="card__header">
                      <h3><FontAwesomeIcon icon="money-bill-transfer" />&nbsp;<Translate>Payment Scenarios</Translate></h3>
                    </div>
                    <div class="card__body">
                      <p>
                      <Translate>Take a look at some examples of payment scenarios available with OmniCart</Translate>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <p />
              <Link to="/docs/api/test-debug" className="card-link">
                <div class="card-demo text--no-decoration">
                  <div class="card-click item shadow--md">
                    <div class="card__header">
                      <h3><FontAwesomeIcon icon="bug" />&nbsp;<Translate>Testing and Debugging</Translate></h3>
                    </div>
                    <div class="card__body">
                      <p>
                      <Translate>Test your payment scenarios before switching to production</Translate>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <p />
              <Link to="/docs/quickref" className="card-link">
                <div class="card-demo text--no-decoration">
                  <div class="card-click item shadow--md">
                    <div class="card__header">
                      <h3><FontAwesomeIcon icon="asterisk" />&nbsp;<Translate>Quick Reference</Translate></h3>
                    </div>
                    <div class="card__body">
                      <p>
                      <Translate>Some useful reference information that you might want to keep at hand</Translate>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div><p />
      </main>
    </Layout>
  );
}
