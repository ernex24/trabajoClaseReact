import React from 'react';
import './Lista.css';
import { Alert } from 'reactstrap';

const Lista = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}>
        <Alert color="primary">{item}</Alert></li>)
    }
  </ul>
);

export default Lista;