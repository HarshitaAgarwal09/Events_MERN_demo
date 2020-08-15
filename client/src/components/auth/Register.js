import React, { useState, Fragment } from 'react';
import { Button, Modal, Form, FormGroup, Label, Input, ModalBody, Alert } from 'reactstrap';

import { useDispatch, useSelector } from 'react-redux';

import { register } from '../../actions/authAction';
import { clearErrors } from '../../actions/errorAction';

const Register = (props) => {

    const [modal, setModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useSelector(state => state.auth);
    const error = useSelector(state => state.error);

    const dispatch = useDispatch();


    const toggle = () => {
        setModal(!modal);
        dispatch(clearErrors());
    }

    const handleName = (e) => setName(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleRegister = (e) => {
        e.preventDefault();

        const user = {
            name: name,
            email: email,
            password: password
        }

        dispatch(register(user));

        if (auth.isAuthenticated === true) {
            toggle();
            setName("");
            setEmail("");
            setPassword("");
        }
    }
    const errorElement = (error && error.msg && error.msg.msg ? <Alert color="danger">
        {error.msg.msg}
    </Alert> : <p></p>)
    return (
        <Fragment>
            <Button color="primary" onClick={toggle}>Register</Button>
            <Modal isOpen={modal} toggle={toggle} >

                <ModalBody>
                    {errorElement}
                    <Form >
                        <FormGroup>
                            <Label for="name_input">Name</Label>
                            <Input type="text" name="name" id="name_input" placeholder="Enter your Name" onChange={handleName} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter your Email" onChange={handleEmail} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="passsword">Password</Label>
                            <Input type="password" name="password" id="passsword" placeholder="Enter passsword" onChange={handlePassword} />
                        </FormGroup>
                        <Button onClick={handleRegister} >Register</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </Fragment >
    );
}


export default Register;