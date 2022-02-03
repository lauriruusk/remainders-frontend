/* eslint-disable consistent-return */
import React from 'react';
import { Alert } from 'react-bootstrap';

// tämä osa ilmoittaa onnistuneesta tai virheellisestä kirjautumisesta.
const AlertForm = ({ setShow, success, loginMsg }) => {
  if (!success) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Virhe!</Alert.Heading>
        <p>{loginMsg}</p>
      </Alert>
    );
  } if (success) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} transition dismissible>
        <Alert.Heading>Onnistui</Alert.Heading>
        <p>{loginMsg}</p>
      </Alert>
    );
  }
};

export default AlertForm;
