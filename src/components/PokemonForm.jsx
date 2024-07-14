import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const initialState = {
  name: '',
  weight: 0,
  height: 0,
};

const PokemonForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      props.addPokemon(formData);
      setFormData(initialState);
      navigate('/pokemon');
    }
    setValidated(true);
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Pokemon</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Please enter a name.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Height</Form.Label>
            <Form.Control
              required
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Please enter a height.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              required
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">Please enter a weight.</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </main>
  );
};

export default PokemonForm;
