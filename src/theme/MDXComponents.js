  import React from 'react';
  // Importing the original mapper + our components according to the Docusaurus doc
  import MDXComponents from '@theme-original/MDXComponents';
  import ColorPickerExample from '@site/src/components/ColorPickerExample';

  import Badge from 'react-bootstrap/Badge';
  import Breadcrumb from 'react-bootstrap/Breadcrumb';
  import Button from 'react-bootstrap/Button';
  import ButtonGroup from 'react-bootstrap/ButtonGroup';
  import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
  import Card from 'react-bootstrap/Card';
  import Carousel from 'react-bootstrap/Carousel';
  import CloseButton from 'react-bootstrap/CloseButton';
  import Col from 'react-bootstrap/Col';
  import Container from 'react-bootstrap/Container';
  import Dropdown from 'react-bootstrap/Dropdown';
  import Figure from 'react-bootstrap/Figure';
  import FloatingLabel from 'react-bootstrap/FloatingLabel';
  import Form from 'react-bootstrap/Form';
  import Image from 'react-bootstrap/Image';
  import InputGroup from 'react-bootstrap/InputGroup';
  import ListGroup from 'react-bootstrap/ListGroup';
  import Modal from 'react-bootstrap/Modal';
  import Offcanvas from 'react-bootstrap/Offcanvas';
  import Overlay from 'react-bootstrap/Overlay';
  import Pagination from 'react-bootstrap/Pagination';
  import Placeholder from 'react-bootstrap/Placeholder';
  import ProgressBar from 'react-bootstrap/ProgressBar';
  import Row from 'react-bootstrap/Row';
  import Spinner from 'react-bootstrap/Spinner';
  import Stack from 'react-bootstrap/Stack';
  import Table from 'react-bootstrap/Table';
  import Toast from 'react-bootstrap/Toast';
  import Columns from '@site/src/components/Columns';
  import Column from '@site/src/components/Column';

//  import ReactCC from '@site/src/components/ReactCC';

  import Mermaid from '@theme/Mermaid';
  import Tabs from '@theme/Tabs';
  import TabItem from '@theme/TabItem';
  import DocCardList from '@theme/DocCardList';


  export default {
    // Reusing the default mapping
    ...MDXComponents,
    ColorPickerExample,
    Container,
    Col,
    Row,
    Columns,
    Column,
    Mermaid,
    Tabs,
    TabItem,
    DocCardList,
//    ReactCC,
  };
  