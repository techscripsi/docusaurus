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
      description="Techscripsi docs-as-code">
      <HomepageHeader />
      <main>
        <p />
        <div class="container">
          <div class="row">
            <div class="col col--6">
              <h1><FontAwesomeIcon icon="award" /> <Translate>OmniCart Features</Translate></h1>
              <ul>
                <li><b><Translate>All-in-One Orders</Translate></b>: <Translate>Combine consumable products, digital goods, one-time purchases, and subscriptions in a single cart</Translate></li>
                <li><b><Translate>Flexible Payment Settings</Translate></b>: <Translate>Configure payment settings using tags that apply to all tagged cart items</Translate></li>
                <li><b><Translate>Fine-Tune Precision</Translate></b>: <Translate>Configure settings at the cart, tag, or item level for maximum flexibility</Translate></li>
                <li><b><Translate>Efficient API</Translate></b>: <Translate>Designed for fewer API requests and simple scenarios</Translate></li>
                <li><b><Translate>Easy Captures & Refunds</Translate></b>: <Translate>Capture, cancel, or refund entire carts or individual items, partial refunds are supported</Translate></li>
              </ul>
              <p />
              <h1><FontAwesomeIcon icon="list-check" /> <Translate>Checklist</Translate></h1>
              <ol>
                <li><Link to="/docs/concepts/"><Translate>Get acquainted with the key concepts</Translate></Link></li>
                <li><Translate>Register at OmniCart and receive your test credentials for the Merchant Panel</Translate></li>
                <li><Translate>Create your test API key and use it to test your payment flow</Translate></li>
                <li><Translate>Contact our support to switch to the production environment</Translate></li>
                <li><Translate>Start receiving payments</Translate></li>
              </ol>
            </div>
            <div class="col col--6">
            <h1><FontAwesomeIcon icon="gear" />&nbsp;<Translate>Technical Information</Translate></h1>
              <Link to="/docs/api/omnicart-api" className="card-link">
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
              </Link>
              <p />
              <Link to="/docs/scenarios/" className="card-link">
                <div class="card-click item shadow--md">
                  <div class="card__header">
                    <h3><FontAwesomeIcon icon="money-bill-transfer" />&nbsp;<Translate>Payment Scenarios</Translate></h3>
                  </div>
                  <div class="card__body">
                    <p>
                    <Translate>Take a look at examples of payment scenarios available with OmniCart</Translate>
                    </p>
                  </div>
                </div>
              </Link>
              <p />
              <Link to="/docs/api/test-debug" className="card-link">
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
              </Link>
              <p />
              <Link to="/docs/quickref" className="card-link">
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
              </Link>
            </div>
          </div>
        </div><p />
      </main>
    </Layout>
  );
}
