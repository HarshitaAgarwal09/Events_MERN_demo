import React, { useState, Fragment } from 'react';
import { Button, Modal, Form, FormGroup, Label, Input, ModalBody, Alert } from 'reactstrap';

import { useSelector, useDispatch } from 'react-redux';

import { login } from '../../actions/authAction';
import { clearErrors } from '../../actions/errorAction';

const Login = () => {

    const [modal, setModal] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useSelector(state => state.auth);
    const error = useSelector(state => state.error);

    const dispatch = useDispatch();

    const toggle = () => {
        setModal(!modal);
        dispatch(clearErrors());
    }

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value);

    const handleLogin = (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }

        dispatch(login(user));

        if (auth.isAuthenticated === true) {
            toggle();
            setEmail("");
            setPassword("");
        }
    }

    const errorElement = (error && error.msg && error.msg.msg ? <Alert color="danger">
        {error.msg.msg}
    </Alert> : <p></p>)

    return (
        <Fragment>
            <Button color="primary" onClick={toggle}>Login</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalBody>
                    <Form >
                        {errorElement}
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter your Email" onChange={handleEmail} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="passsword">Password</Label>
                            <Input type="password" name="password" id="passsword" placeholder="Enter passsword" onChange={handlePassword} />
                        </FormGroup>
                        <Button onClick={handleLogin} >Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </Fragment>

    );
}

export default Login;