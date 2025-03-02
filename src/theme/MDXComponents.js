  import React from 'react';
  import MDXComponents from '@theme-original/MDXComponents';

/* FontAwesome start */

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.
  import { library } from '@fortawesome/fontawesome-svg-core'; // Import the library component.
  import { fab } from '@fortawesome/free-brands-svg-icons'; // Import all brands icons.
  import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons.

library.add(fab, fas); // Add all icons to the library so you can use them without importing them individually.

/* FontAwesome end */


  import Mermaid from '@theme/Mermaid';

  import Tabs from '@theme/Tabs';
  import TabItem from '@theme/TabItem';
  import DocCardList from '@theme/DocCardList';

//  import Timeline from '@site/src/components/Timeline';
//  import TimelineItem from '@site/src/components/Timeline/TimelineItem';

  import Visa from '@site/static/img/cards/visa.svg';
  import Mastercard from '@site/static/img/cards/mastercard.svg';
  import Jcb from '@site/static/img/cards/jcb.svg';
  import Discover from '@site/static/img/cards/discover.svg';
  import Amex from '@site/static/img/cards/amex.svg';
  import Link from '@docusaurus/Link';


  export default {
    ...MDXComponents,

    FAIcon: FontAwesomeIcon, // Make the FontAwesomeIcon component available in MDX as <icon />.

    Mermaid,
    Tabs,
    TabItem,
    DocCardList,
//    Timeline,
//    TimelineItem,
    Visa,
    Mastercard,
    Jcb,
    Discover,
    Amex,

    Link,
  };
  