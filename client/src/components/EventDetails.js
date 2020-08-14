import React, { Component } from 'react';

class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: this.props.event
        }
    }

    componentDidUpdate(prevProps, nextProps) {
        if (prevProps.event_type != nextProps.event_type) {
            this.setState({ event: nextProps.event });
        }
    }
    // {
    //     "event_type": "Dolophus roseicapillus",
    //     "organiser_name": "Sandor Beagin",
    //     "organiser_id": "61-845-8458",
    //     "location": "5891 Alpine Court",
    //     "event_description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
    // },

    render() {
        return (
            <div>EventDetails</div>
        )
    }
}

export default EventDetails;