  import React from 'react';
  // Importing the original mapper + our components according to the Docusaurus doc
  import MDXComponents from '@theme-original/MDXComponents';
  import ColorPickerExample from '@site/src/components/ColorPickerExample';
  import PaymentCard from '@site/src/components/PaymentCard';


  export default {
    // Reusing the default mapping
    ...MDXComponents,
    ColorPickerExample,
    PaymentCard,
  };