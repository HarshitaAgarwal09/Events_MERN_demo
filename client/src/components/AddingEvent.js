import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addEvent } from '../actions/eventAction';

class AddingEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {
                "event_name": "",
                "event_type": "",
                "organiser_name": "",
                "organiser_id": "",
                "location": "",
                "event_description": ""
            }
        }
    }

    handleEventName = (e) => {
        this.setState({
            event: {
                ...this.state.event,
                event_name: e.target.value
            }
        })
    }


    handleEventType = (e) => {
        this.setState({
            event: {
                ...this.state.event,
                event_type: e.target.value
            }
        })
    }

    handleEventLocation = (e) => {
        this.setState({
            event: {
                ...this.state.event,
                location: e.target.value
            }
        })

    }

    handleEventDescription = (e) => {
        this.setState({
            event: {
                ...this.state.event,
                event_description: e.target.value
            }
        })

    }

    handleAddEvent = (e) => {
        e.preventDefault();

        const event = this.state.event;
        this.props.addEvent(event);
    }

    render() {
        let errorMessage = <></>;
        let errorMessageName = <></>;
        let errorMessageType = <></>;
        let errorMessageLocation = <></>;
        let errorMessageDescription = <></>;

        if (this.props.error.msg) {
            const errors = this.props.error.msg.errors;
            const message = this.props.error.msg._message;

            if (message) errorMessage = <Alert color="danger">{message}</Alert>

            if (errors) {

                if (errors.event_name) errorMessageName = <Alert color="danger">Event Name {errors.event_name.kind} </Alert>
                if (errors.event_type) errorMessageType = <Alert color="danger">Event Type {errors.event_type.kind} </Alert>
                if (errors.location) errorMessageLocation = <Alert color="danger">Event Location {errors.location.kind} </Alert>
                if (errors.event_description) errorMessageDescription = <Alert color="danger">Event Description {errors.event_description.kind} </Alert>
            }
        }

        return (
            <div className="event_form">
                {errorMessage}
                <Form>

                    {errorMessageName}
                    <FormGroup>
                        <Label for="event_name_input">Event Name:</Label>
                        <Input type="text" name="event_name" id="event_name_input" value={this.state.event_name} placeholder="Enter event name" onChange={this.handleEventName} />
                    </FormGroup>

                    {errorMessageType}
                    <FormGroup>
                        <Label for="event_type_input">Event Type</Label>
                        <Input type="select" name="select" id="event_type_input" value={this.state.event_type} onClick={this.handleEventType} placeholder="Select">
                            <option value="" hidden>Select Event Type</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </Input>
                    </FormGroup>

                    {errorMessageLocation}
                    <FormGroup>
                        <Label for="location_input">Event Location</Label>
                        <Input type="text" name="location" id="location_input" value={this.state.location} placeholder="Enter event location" onChange={this.handleEventLocation} />
                    </FormGroup>

                    {errorMessageDescription}
                    <FormGroup>
                        <Label for="event_description_input">Event Description</Label>
                        <Input type="textarea" name="text" id="event_description_input" value={this.state.event_description} onChange={this.handleEventDescription} />
                    </FormGroup>
                    <Button onClick={this.handleAddEvent}>Add</Button>
                </Form>
            </div>
        )
    }
}

AddingEvent.propTypes = {
    addEvent: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    error: state.error
})

export default connect(mapStateToProps, { addEvent })(AddingEvent);