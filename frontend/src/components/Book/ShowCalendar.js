import CalendarPage from "../../pages/CalendarPage";
import FlowerListPage from "../../pages/FlowerListPage";
import Book from "./Book";

const ShowCalendar = () => {
    return (
    <>
    <Book left={<CalendarPage />} right={<FlowerListPage />} />
    </>
    );
}

export default ShowCalendar;