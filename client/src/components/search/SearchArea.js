import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';



// TODO button for submit form

class SearchArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      filter: 'all',
    }

    this.submitHandler = this.submitHandler.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeFilter = this.onChangeFilter.bind(this);
  }

  onChangeText(e) {
    this.setState({
      text: e.target.value
    });
  }

  onChangeFilter(e) {
    this.setState({
      filter: e.target.value
    })
  }

  submitHandler(e) {
    e.preventDefault();

    this.props.onSubmit({
      text: this.state.text,
      filter: this.state.filter
    });
  }



  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <br />
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridText">
            <Form.Control type='text' placeholder='Buscar' ref={this.textField} value={this.state.text} onChange={this.onChangeText} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridFilter">
            <Form.Select ref={this.filterField} value={this.state.filter} onChange={this.onChangeFilter}>
              <option value='all'>Todos</option>
              <option value='id'>Numero</option>
              <option value='name'>Nombre</option>
              <option value='type'>Tipo</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSubmit">
            <Button variant="primary" type="submit">
              Buscar
            </Button>
          </Form.Group>
        </Row>
      </Form>
    )
  }
}









export default SearchArea;
