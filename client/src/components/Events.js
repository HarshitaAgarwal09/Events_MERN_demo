import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getEvents } from '../actions/eventAction';
import EventItem from './EventItem';

class Events extends Component {

    componentDidMount() {
        this.props.getEvents();
    }

    render() {
        const eventList = (
            this.props.event ?
                this.props.event.events.map((event, i) => <EventItem key={i} event={event} index={i} />) :
                <p>Loading</p>
        );

        return (
            <div className="events_container">
                <h1>Events</h1>
                {this.props.auth.isAuthenticated ?
                    <Button color="secondary" className="btn">
                        <Link to="/add_event" className="btn_link">Add Event</Link>
                    </Button>
                    :
                    <p>Please, Login to add event!!</p>
                }
                {eventList}
            </div >
        )
    }
}

Events.propTypes = {
    getEvents: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    event: state.event,
    auth: state.auth
})

export default connect(mapStateToProps, { getEvents })(Events);