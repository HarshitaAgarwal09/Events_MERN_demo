import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {
    Link
} from "react-router-dom";

import EventItem from './EventItem';



class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    "event_type": "Dolophus roseicapillus",
                    "organiser_name": "Sandor Beagin",
                    "organiser_id": "61-845-8458",
                    "location": "5891 Alpine Court",
                    "event_description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
                },
                {
                    "event_type": "Equus hemionus",
                    "organiser_name": "Sharron Novis",
                    "organiser_id": "61-628-8721",
                    "location": "05781 Dovetail Hill",
                    "event_description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
                },
                {
                    "event_type": "Nasua narica",
                    "organiser_name": "Christan Hartill",
                    "organiser_id": "45-902-3795",
                    "location": "59341 Sunnyside Junction",
                    "event_description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
                },
                {
                    "event_type": "Echimys chrysurus",
                    "organiser_name": "Gage Lauks",
                    "organiser_id": "00-602-7924",
                    "location": "59 Park Meadow Junction",
                    "event_description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus."
                },
                {
                    "event_type": "Sarcophilus harrisii",
                    "organiser_name": "Camille Chiommienti",
                    "organiser_id": "36-574-2382",
                    "location": "30506 Dayton Plaza",
                    "event_description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
                },
                {
                    "event_type": "Spermophilus tridecemlineatus",
                    "organiser_name": "Nico Ivashinnikov",
                    "organiser_id": "87-684-5099",
                    "location": "00 Haas Drive",
                    "event_description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
                },
                {
                    "event_type": "Aquila chrysaetos",
                    "organiser_name": "Kali Earengey",
                    "organiser_id": "47-164-0837",
                    "location": "5697 Blaine Terrace",
                    "event_description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
                },
                {
                    "event_type": "Ratufa indica",
                    "organiser_name": "Haley Skyram",
                    "organiser_id": "37-475-7758",
                    "location": "03 Scoville Pass",
                    "event_description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
                },
                {
                    "event_type": "Podargus strigoides",
                    "organiser_name": "Parry Choak",
                    "organiser_id": "37-802-9324",
                    "location": "594 Stuart Junction",
                    "event_description": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
                },
                {
                    "event_type": "Hystrix cristata",
                    "organiser_name": "Alberta Wyant",
                    "organiser_id": "36-085-6793",
                    "location": "622 Morning Plaza",
                    "event_description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
                }
            ]
        }
    }
    render() {
        const eventList = this.state.events.map(event => <EventItem event={event} />
        );
        return (
            <div className="events_container">
                <h1>Events</h1>
                <Button color="secondary" className="btn">
                    <Link to="/add_event" className="btn_link">Add Event</Link>
                </Button>
                {eventList}
            </div >
        )
    }
}

export default Events;