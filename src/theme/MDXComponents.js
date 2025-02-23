  import React from 'react';
  // Importing the original mapper + our components according to the Docusaurus doc
  import MDXComponents from '@theme-original/MDXComponents';
  
  import Mermaid from '@theme/Mermaid';
  import Tabs from '@theme/Tabs';
  import TabItem from '@theme/TabItem';
  import DocCardList from '@theme/DocCardList';

  import Timeline from '../components/Timeline';
  import TimelineItem from '../components/Timeline/TimelineItem';

  // payment cards

  import Visa from '@site/static/img/cards/visa.svg';
  import Mastercard from '@site/static/img/cards/mastercard.svg';
  import Jcb from '@site/static/img/cards/jcb.svg';
  import Discover from '@site/static/img/cards/discover.svg';
  import Amex from '@site/static/img/cards/amex.svg';

  export default {
    ...MDXComponents,
    Mermaid,
    Tabs,
    TabItem,
    DocCardList,
    Timeline,
    TimelineItem,
    Visa,
    Mastercard,
    Jcb,
    Discover,
    Amex,
  };
  