import React, { useState, Fragment } from 'react';
import { Button, Modal, Form, FormGroup, Label, Input, ModalBody } from 'reactstrap';


const Register = (props) => {

    const [modal, setModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const toggle = () => setModal(!modal);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = (e) => {
        e.preventDefault();

        const user = {
            name: name,
            email: email,
            password: password
        }

        //post reuest of user
        console.log(user);
    }

    return (
        <Fragment>
            <Button color="primary" onClick={toggle}>Register</Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalBody>
                    <Form >
                        <FormGroup>
                            <Label for="name_input">Email</Label>
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