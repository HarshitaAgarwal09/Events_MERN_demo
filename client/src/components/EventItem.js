import React, { Component } from 'react';

class EventItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: this.props.event
        }
    }

    componentDidUpdate(prevProps, nextProps) {
        if (prevProps.event_name !== nextProps.event_name) {
            this.setState({ event: nextProps.event });
        }
    }

    render() {
        const { event } = this.state;
        return (
            <div className="event_item">
                <img src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2017/08/02112523/iStock-514482753-1.jpg" alt="Event"></img>
                <div className="event_item_info">
                    <h4>{event.event_name}</h4>
                    <p>{event.location}</p>
                    <p>{event.organiser_name}</p>
                    <p>{event.organiser_id}</p>
                </div>
            </div>

        )
    }
}

export default EventItem;