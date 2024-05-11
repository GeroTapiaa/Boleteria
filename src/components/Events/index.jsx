import EventItem from "./components/EventItem";
import data from "../../data/event.json"

const events = data._embedded.events;
const Event = ( ) => {

    const eventsComponents = events.map((eventItem)=> (
    <EventItem 
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
    />
));
    return (
        <div>
            Eventos
            {eventsComponents}
        </div>
        
    )
}

export default Event