import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Mermaid from '@theme/Mermaid';

// import Timeline from '@site/src/components/Timeline';
// import TimelineItem from '@site/src/components/Timeline/TimelineItem';

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
      <Mermaid
        value={`
%%{init: { "themeVariables": {"xyChart": {"backgroundColor": "none" } }  }}%%

xychart-beta
    x-axis "title with space" [cat1, "cat2 with space", cat3]
    x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
    y-axis 10 --> 1000
    bar [50, 60, 75, 82, 95, 50, 110, 102, 92, 85, 70, 60]
    bar [400, 600, 750, 820, 950, 500, 1100, 1020, 920, 850, 700, 600]
        `}
      />

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

    </div>
    <div class="col col--6">
      <div class="card-demo">
        <div class="card">
          <div class="card__header">
            <h3>Handling Amounts</h3>
          </div>
          <div class="card__body">
            <p>
            Learn about amounts
            </p>
          </div>
          <div class="card__footer">
            <div class="button-group button-group--block">
              <button class="button button--secondary button--block">See All</button>
              <button class="button button--secondary button--block">See All</button>
            </div>
          </div>
        </div>
      </div>
      <p />
      <div class="card-demo">
        <div class="card">
          <div class="card__footer">
            <button class="button button--primary button--block">See All</button>
          </div>
          <div class="card__header">
            <h3>Cancel and Refund</h3>
          </div>
          <div class="card__body">
            <p>
            Learn about cancellations and refunds
            </p>
          </div>
          <div class="card__footer">
            <div class="button-group button-group--block">
              <button class="button button--info">Cancel Full Cart</button>
              <button class="button button--info">Cancel Cart Items</button>
            </div>
            <div class="button-group button-group--block">
              <button class="button button--secondary">
              Refund Full Cart
              </button>
              <button class="button button--secondary">Refund Cart Items</button>
            </div>
          </div>
          <div class="card__footer">
            <button class="button button--primary button--block">See All</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      </main>
    </Layout>
  );
}
