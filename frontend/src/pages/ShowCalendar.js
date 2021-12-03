import Calendar from "../components/calendar/Calendar";
import FlowerList from "../components/FlowerList";
import Book from "../components/book/Book";

const ShowCalendar = () => {
    return (
    <>
    <Book left={<Calendar />} right={<FlowerList />} />
    </>
    );
}

export default ShowCalendar;