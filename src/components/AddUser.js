import { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { AddUserAction } from '../redux/actions/UsersActions';

function AddUser() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [name, setName] = useState("")
const handleName=(e)=>{
    setName(e.target.value)
}
const [email,SetEmail]=useState("")
const dispatch=useDispatch()

const handleClick=()=>{
    dispatch(AddUserAction({id:Math.random(),name:name,email:email}))
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       add new user
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>user form</Modal.Title>
          <Modal.Body>
          <Form>
            <Form.Label>name</Form.Label>
            <FormControl placeholder="add name here" onChange={handleName} />
            <Form.Label>email</Form.Label>
            <FormControl placeholder="add email here" onChange={(e)=>SetEmail(e.target.value)} />
            </Form>
          </Modal.Body>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
           add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddUser;