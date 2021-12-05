import Diary from "../components/diary/Diary";
import FlowerList from "../components/FlowerList";
import Book from "../components/Book/Book";

const ShowDiaryPage = () => {
    return (
        <>
            <Book left={<Diary />} right={<FlowerList />} />
        </>
    );
}

export default ShowDiaryPage;