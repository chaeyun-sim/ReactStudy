import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
    const feturedEvents = getFeaturedEvents();

    return (
        <div>
            <EventList items={feturedEvents} />
        </div>
    )
};

export default HomePage;