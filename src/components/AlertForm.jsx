/* eslint-disable consistent-return */
import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertForm = ({ setShow, success }) => {
//   const [open, setOpen] = useState(false);
  // const onShowAlert = () => {
  //   setShow(true);
  //   window.setTimeout(() => {
  //     setShow(false);
  //   }, 2000);
  // };
  if (!success) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Virhe!</Alert.Heading>
        <p>Käyttäjätunnus tai salasana väärin</p>
      </Alert>
    );
  } if (success) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} transition dismissible>
        <Alert.Heading>Onnistui</Alert.Heading>
        <p>Olet nyt kirjautunut.</p>
      </Alert>
    );
  }
};

export default AlertForm;
