import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {addEvent} from '../actions/eventAction';

class AddingEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {
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

        this.setState({
            event: {
                "event_type": "",
                "organiser_name": "",
                "organiser_id": "",
                "location": "",
                "event_description": ""
            }
        });
    }
    render() {
        return (
            <div className="event_form">
                <Form>
                    <FormGroup>
                        <Label for="event_name_input">Event Name:</Label>
                        <Input type="text" name="event_name" id="event_name_input" placeholder="Enter event name" onChange={this.handleEventName} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="event_type_input">Event Type</Label>
                        <Input type="select" name="select" id="event_type_input" onClick={this.handleEventType} placeholder="Select">
                            <option value="" hidden>Select Event Type</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="location_input">Event Location</Label>
                        <Input type="text" name="location" id="location_input" placeholder="Enter event location" onChange={this.handleEventLocation} />
                    </FormGroup>


                    <FormGroup>
                        <Label for="event_description_input">Event Description</Label>
                        <Input type="textarea" name="text" id="event_description_input" onChange={this.handleEventDescription} />
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


export default connect(null,{addEvent})(AddingEvent);