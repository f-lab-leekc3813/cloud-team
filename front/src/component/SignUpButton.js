import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function SignupButton() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSignup = () => {
    // Send signup data to localhost:8080
    axios
      .post('http://localhost:8080/signup', {
        email,
        password,
        name,
      })
      .then((response) => {
        console.log(response.data);
        // Handle response if needed
      })
      .catch((error) => {
        console.error(error);
        // Handle error if needed
      });

    handleClose();
  };


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        회원가입
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(event) => setEmail(event.target.value)} 
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>password</Form.Label>
              <Form.Control
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="8글자이상 작성 해 주세요."
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>name</Form.Label>
              <Form.Control
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="이름을 작성 해 주세요."
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignup}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignupButton;