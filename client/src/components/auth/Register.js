import React, { useState, Fragment } from 'react';
import { Button, Modal, Form, FormGroup, Label, Input, ModalBody } from 'reactstrap';

import { useDispatch, useSelector } from 'react-redux';

import { register } from '../../actions/authAction';

const Register = (props) => {

    const [modal, setModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useSelector(state => state.auth);
    // const error = useSelector(state => state.error);

    const dispatch = useDispatch();


    const toggle = () => setModal(!modal);

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

    return (
        <Fragment>
            <Button color="primary" onClick={toggle}>Register</Button>
            <Modal isOpen={modal} toggle={toggle} >

                <ModalBody>
                    {/* <p>{error.msg}</p> */}
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