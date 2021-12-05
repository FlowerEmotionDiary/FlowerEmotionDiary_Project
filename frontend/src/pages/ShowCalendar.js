import Calendar from "../components/calendar/Calendar";
import FlowerList from "../components/FlowerList";
import Book from "../components/Book/Book";

const ShowCalendar = () => {
    return (
        <>
            <Book left={<Calendar />} right={<FlowerList />} />
        </>
    );
}

export default ShowCalendar;