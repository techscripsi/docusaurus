import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Carousel from 'react-bootstrap/Carousel';
import CloseButton from 'react-bootstrap/CloseButton';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Figure from 'react-bootstrap/Figure';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
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

function PaymentCard() {
  return (
    <>
      <Card style={{ width: '50%' }}>
        <div style={{ marginRight: '2em' }}>
          <div className="card-body">
            <ButtonToolbar>
              {/* Ваши кнопки могут быть здесь */}
            </ButtonToolbar>
            <p className="card-text">
              <Form.Group controlId="CardNumber" className="mb-3">
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </p>
            <p className="card-text">
              <Form.Group controlId="CardHolder" className="mb-3">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ width: '48%' }}>
                    <Form.Label>CARDHOLDER NAME</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                  </div>
                  <div style={{ width: '48%' }}>
                    <Form.Control type="text" />
                  </div>
                </div>
              </Form.Group>
            </p>
            <ButtonGroup>
              <Button>Pay</Button>
            </ButtonGroup>
          </div>
        </div>
      </Card>
    </>
  );
}

export default PaymentCard;