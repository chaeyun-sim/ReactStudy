import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import ResultsTitle from '../../components/events/results-title';
import EventList from "../../components/events/EventList";
import { Fragment } from "react";
import Button from "../../components/UI/Button";
import ErrorAlert from '../../components/ui/error-alert'

function FilteredEventsPage() {
    const router = useRouter();

    const filteredData = router.query.slug;

    if (!filteredData) {
        return <p className="center">Loading...</p>
    }

    const filteredYear = +filteredData[0];
    const filteredMonth = +filteredData[1];

    if (isNaN(filteredYear) || isNaN(filteredMonth) || filteredYear > 2030 || filteredYear < 2021 || filteredMonth < 1 || filteredMonth > 12) {
        return (
            <Fragment>
                <ErrorAlert><p>Invalid filter. Please adjust your values.</p></ErrorAlert>
                <div className='center'>
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert><p>No events found for the chosen filter.</p></ErrorAlert>
                <div className='center'>
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        )
    }

    const date = new Date(filteredYear, filteredMonth - 1)

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    )
};

export default FilteredEventsPage;