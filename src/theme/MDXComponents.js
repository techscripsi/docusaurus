  import React from 'react';
  // Importing the original mapper + our components according to the Docusaurus doc
  import MDXComponents from '@theme-original/MDXComponents';
  
  import Mermaid from '@theme/Mermaid';
  import Tabs from '@theme/Tabs';
  import TabItem from '@theme/TabItem';
  import DocCardList from '@theme/DocCardList';

  import Timeline from '@site/src/components/Timeline';
  import TimelineItem from '@site/src/components/Timeline/TimelineItem';

  export default {
    ...MDXComponents,
    Mermaid,
    Tabs,
    TabItem,
    DocCardList,
    Timeline,
    TimelineItem,
  };
  