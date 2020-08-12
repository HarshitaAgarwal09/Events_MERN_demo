import React, { useState, Fragment } from 'react';
import { Button, Modal, Form, FormGroup, Label, Input, ModalBody } from 'reactstrap';


const Login = (props) => {

    const [modal, setModal] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const toggle = () => setModal(!modal);


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }

        //post reuest of user
        console.log(user);
    }

    return (
        <Fragment>
            <Button color="primary" onClick={toggle}>Login</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalBody>
                    <Form >
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