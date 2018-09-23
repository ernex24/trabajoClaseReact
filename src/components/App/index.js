import React from 'react';
import './App.css';
import Lista from '../Lista';
import Header from '../Header';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
        <div className="App">
            <Header />    
              <Container>
                <Row>
                   <Col></Col>
                   <Col><Lista items={this.state.items}/></Col>
                   <Col></Col>
                </Row>
               <Row>
                  <Col></Col>
                  <Col>
                    <form className="App" onSubmit={this.onSubmit}>
                        <InputGroup>
                          <Input value={this.state.term} onChange={this.onChange} />
                          <InputGroupAddon addonType="append">
                            <Button color="secondary">Enviar</Button>
                          </InputGroupAddon>
                        </InputGroup>
                    </form>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
        </div>
    );
  }
}

export default App;
