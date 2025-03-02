import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Mermaid from '@theme/Mermaid';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/integration/">
            Quickstart
          </Link>&nbsp;
          <Link
            className="button button--secondary button--lg"
            to="/docs/api/omnicart-api">
            Jump to API Specification
          </Link>
        </div>
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
      <Link to="/docs/reference/response-codes" className="card-link">
        <div class="card-demo text--no-decoration">
          <div class="card-click item shadow--md">
            <div class="card__header">
              <h3>Lorem Ipsum</h3>
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
      <Link to="/docs/integration/test-debug" className="card-link">
        <div class="card-demo text--no-decoration">
          <div class="card-click item shadow--md">
            <div class="card__header">
              <h3><FontAwesomeIcon icon="bug" /> Testing and Debugging</h3>
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
      <Link to="/docs/integration/test-debug" className="card-link">
        <div class="card-demo text--no-decoration">
          <div class="card-click item shadow--md">
            <div class="card__header">
              <h3><FontAwesomeIcon icon="bug" /> Testing and Debugging</h3>
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
    <div class="col col--6">
      <Link to="/docs/reference/response-codes" className="card-link">
        <div class="card-demo text--no-decoration">
          <div class="card-click item shadow--md">
            <div class="card__header">
              <h3>Lorem Ipsum</h3>
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
      <Link to="/docs/integration/test-debug" className="card-link">
        <div class="card-demo text--no-decoration">
          <div class="card-click item shadow--md">
            <div class="card__header">
              <h3><FontAwesomeIcon icon="bug" /> Testing and Debugging</h3>
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
      <Link to="/docs/integration/test-debug" className="card-link">
        <div class="card-demo text--no-decoration">
          <div class="card-click item shadow--md">
            <div class="card__header">
              <h3><FontAwesomeIcon icon="bug" /> Testing and Debugging</h3>
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
</div>

      </main>
    </Layout>
  );
}
