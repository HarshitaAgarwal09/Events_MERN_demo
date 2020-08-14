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

    
    handleClick = (index) =>{
        console.log(index);
    }

    render() {
        const { event } = this.state;
        console.log(event);
        return (
            <div className="event_item" onClick={()=>this.handleClick(this.props.index)}>
                <img src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2017/08/02112523/iStock-514482753-1.jpg" alt="Event"></img>
                <div className="event_item_info">
                    <h4>{event.event_name}</h4>
                    <p><b>Event Type:</b>{event.event_type}</p>
                    <p><b>Location:</b>{event.location}</p>
                    <p><b>Organiser Name:</b>{event.organiser_name}</p>
                </div>
            </div>

        )
    }
}

export default EventItem;