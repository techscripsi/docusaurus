import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Mermaid from '@theme/Mermaid';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Quickstart from '@site/docs/_snippets/quickstart.mdx'

import Concepts from '/docs/concepts.mdx';

export const Beverage = () => (
  <div>
    <FontAwesomeIcon icon="check-square" />
    Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
  </div>
)


import Logo from '@site/static/img/logo-9BC834.svg';

import Index from '/docs/__snippets__/index.mdx';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
        {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">Every order fits the cart, from one item to many</p>
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
      <Quickstart />
    </div>
    <div class="col col--6">
    <h1><FontAwesomeIcon icon="gear" />&nbsp;Technical Information</h1>
      <Link to="/docs/api/omnicart-api" className="card-link">
        <div class="card-demo text--no-decoration">
          <div class="card-click item shadow--md">
            <div class="card__header">
              <h3><FontAwesomeIcon icon="code" />&nbsp;API Specification</h3>
            </div>
            <div class="card__body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida.
              </p>
            </div>
          </div>
        </div>
      </Link>
      <p />
      <Link to="/docs/concepts/test-debug" className="card-link">
        <div class="card-demo text--no-decoration">
          <div class="card-click item shadow--md">
            <div class="card__header">
              <h3><FontAwesomeIcon icon="bug" />&nbsp;Testing and Debugging</h3>
            </div>
            <div class="card__body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
              <h3><FontAwesomeIcon icon="asterisk" />&nbsp;Quick Reference</h3>
            </div>
            <div class="card__body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </div>
</div><p />

<Concepts />
      </main>
    </Layout>
  );
}
