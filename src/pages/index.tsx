import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate from '@docusaurus/Translate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
library.add(fas);

import styles from './index.module.css';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Feature  { icon: string; title: string; desc: string; }
interface Step     { status: string; label: string; color: string; }
interface DocCard  { icon: string; title: string; desc: string; to: string; }

// ─── Data ─────────────────────────────────────────────────────────────────────

const features: Feature[] = [
  {
    icon: 'cart-shopping',
    title: 'All-in-One Orders',
    desc:  'Combine consumable goods, digital items, one-time purchases, and subscriptions in a single cart.',
  },
  {
    icon: 'layer-group',
    title: 'Hierarchical Settings',
    desc:  'Configure payment settings at the cart, tag, or item level — child settings always override parent ones.',
  },
  {
    icon: 'clock',
    title: 'Smart Timers',
    desc:  'Attach countdowns to items for time-limited access. Timers also prevent duplicate active purchases per customer.',
  },
  {
    icon: 'tags',
    title: 'Flexible Tagging',
    desc:  'Group items with tags and batch-apply capture, cancel, or refund operations in a single request.',
  },
  {
    icon: 'scissors',
    title: 'Partial Actions',
    desc:  'Capture, cancel, or refund individual items — or just a portion of an item amount — without touching the rest.',
  },
  {
    icon: 'bolt',
    title: 'Efficient API',
    desc:  'One init, one capture, one refund — for the whole cart or exactly the items you need.',
  },
];

const lifecycleSteps: Step[] = [
  { status: 'initiated',  label: 'Cart created',     color: '#6abf69' },
  { status: 'authorized', label: 'Funds reserved',   color: '#64b5f6' },
  { status: 'captured',   label: 'Funds captured',   color: '#ba68c8' },
  { status: 'completed',  label: 'Transaction done', color: '#9BC834' },
];

const docCards: DocCard[] = [
  {
    icon:  'book-open',
    title: 'Key Concepts',
    desc:  'Carts, tags, items, the payment lifecycle, timers, and hierarchical settings.',
    to:    '/docs/concepts/',
  },
  {
    icon:  'code',
    title: 'API Specification',
    desc:  'Full OpenAPI reference for all endpoints, request bodies, and response schemas.',
    to:    '/docs/api/omnicart-api',
  },
  {
    icon:  'money-bill-transfer',
    title: 'Payment Scenarios',
    desc:  'End-to-end examples of one-step, two-step, partial refund, and timer flows.',
    to:    '/docs/scenarios/',
  },
  {
    icon:  'asterisk',
    title: 'Quick Reference',
    desc:  'Handy reference for statuses, error codes, and request structures.',
    to:    '/docs/quickref',
  },
];

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────

function useReveal(threshold = 0.12) {
  const ref     = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, mounted, visible };
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={clsx('container', styles.heroInner)}>
        <p className={styles.heroEyebrow}>PAYMENT GATEWAY API</p>
        <h1 className={styles.heroTitle}>OmniCart</h1>
        <p className={styles.heroSubtitle}>
          <Translate>Every order fits the cart — from one item to many</Translate>
        </p>
        <div className={styles.heroButtons}>
          <Link className={clsx('button button--lg', styles.btnPrimary)} to="/docs/concepts/">
            <FontAwesomeIcon icon="book-open" fixedWidth />&ensp;
            <Translate>Key Concepts</Translate>
          </Link>
          <Link className={clsx('button button--lg', styles.btnOutline)} to="/docs/api/omnicart-api">
            <FontAwesomeIcon icon="code" fixedWidth />&ensp;
            <Translate>API Reference</Translate>
          </Link>
        </div>
      </div>
      <a href="#features" className={styles.scrollHint} aria-label="Scroll down">
        <FontAwesomeIcon icon="chevron-down" />
      </a>
    </header>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

function FeaturesSection() {
  const { ref, mounted, visible } = useReveal();
  return (
    <section
      id="features"
      ref={ref as React.RefObject<HTMLElement>}
      className={clsx(styles.section, styles.featuresSection,
        mounted && styles.willReveal, visible && styles.revealed)}
    >
      <div className="container">
        <h2 className={styles.sectionHeading}><Translate>What OmniCart Offers</Translate></h2>
        <div className={styles.featuresGrid}>
          {features.map((f) => (
            <div key={f.icon} className={styles.featureCard}>
              <span className={styles.featureIcon}>
                <FontAwesomeIcon icon={f.icon as any} fixedWidth />
              </span>
              <h3 className={styles.featureCardTitle}><Translate>{f.title}</Translate></h3>
              <p className={styles.featureCardDesc}><Translate>{f.desc}</Translate></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Lifecycle ────────────────────────────────────────────────────────────────

function LifecycleSection() {
  const { ref, mounted, visible } = useReveal();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={clsx(styles.section, styles.lifecycleSection,
        mounted && styles.willReveal, visible && styles.revealed)}
    >
      <div className="container">
        <h2 className={styles.sectionHeading}><Translate>Payment Life Cycle</Translate></h2>
        <p className={styles.sectionLead}>
          <Translate>
            Each item in a cart moves through its own independent payment states,
            giving you granular control at every step.
          </Translate>
        </p>
        <div className={styles.lifecycleFlow}>
          {lifecycleSteps.map((step) => (
            <div key={step.status} className={styles.lifecycleStep}>
              <div
                className={styles.lifecycleDot}
                style={{ '--step-color': step.color } as React.CSSProperties}
              />
              <span className={styles.lifecycleStatus} style={{ color: step.color }}>
                {step.status}
              </span>
              <span className={styles.lifecycleLabel}>{step.label}</span>
            </div>
          ))}
        </div>
        <p className={styles.lifecycleNote}>
          Items can also be <code>canceled</code> before capture, or{' '}
          <code>refunded</code> after completion — individually, partially, or in bulk.
        </p>
      </div>
    </section>
  );
}

// ─── Docs navigation ──────────────────────────────────────────────────────────

function DocsSection() {
  const { ref, mounted, visible } = useReveal();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={clsx(styles.section, styles.docsSection,
        mounted && styles.willReveal, visible && styles.revealed)}
    >
      <div className="container">
        <h2 className={styles.sectionHeading}><Translate>Explore the Documentation</Translate></h2>
        <div className={styles.docsGrid}>
          {docCards.map((card) => (
            <Link key={card.to} to={card.to} className={styles.docCard}>
              <span className={styles.docCardIcon}>
                <FontAwesomeIcon icon={card.icon as any} fixedWidth />
              </span>
              <div className={styles.docCardBody}>
                <h3 className={styles.docCardTitle}><Translate>{card.title}</Translate></h3>
                <p className={styles.docCardDesc}><Translate>{card.desc}</Translate></p>
              </div>
              <FontAwesomeIcon icon="arrow-right" className={styles.docCardArrow} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Hidden checklist ─────────────────────────────────────────────────────────

function Checklist() {
  return (
    <section className={styles.checklistSection}>
      <div className="container">
        <details className={styles.checklistDetails}>
          <summary className={styles.checklistSummary}>
            <FontAwesomeIcon icon="list-check" fixedWidth />&ensp;
            <Translate>Getting Started Checklist</Translate>
          </summary>
          <ol className={styles.checklistItems}>
            <li><Link to="/docs/concepts/"><Translate>Get acquainted with the key concepts</Translate></Link></li>
            <li><Translate>Register at OmniCart and receive your test credentials for the Merchant Panel</Translate></li>
            <li><Translate>Create your test API key and use it to test your payment flow</Translate></li>
            <li><Translate>Contact our support to switch to the production environment</Translate></li>
            <li><Translate>Start receiving payments</Translate></li>
          </ol>
        </details>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="OmniCart — combine multiple purchase types in a single payment request"
    >
      <Hero />
      <main>
        <FeaturesSection />
        <LifecycleSection />
        <DocsSection />
        <Checklist />
      </main>
    </Layout>
  );
}
