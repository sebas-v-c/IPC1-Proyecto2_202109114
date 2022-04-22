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
    this.setState({ text: '' })
  }



  render() {
    let inputField;
    if (this.state.filter === 'id') {
      inputField = <Form.Control
        type='number'
        min={1}
        max={999}
        placeholder='Buscar'
        value={this.state.text}
        onChange={this.onChangeText}
      />
    } else {
      inputField = <Form.Control
        type='text'
        placeholder='Buscar'
        value={this.state.text}
        onChange={this.onChangeText}
      />
    }


    return (
      <Form onSubmit={this.submitHandler}>
        <br />
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridText">
            {inputField}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridFilter">
            <Form.Select ref={this.filterField} value={this.state.filter} onChange={this.onChangeFilter}>
              <option value='all'>Todo</option>
              <option value='id'>Número</option>
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
