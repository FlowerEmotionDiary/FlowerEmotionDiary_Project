import DiaryWritePage from "../components/diary/DiaryWritePage";
import FlowerList from "../components/FlowerList";
import Book from "../components/book/Book";

const ShowDiaryWrite = () => {
    return (
    <>
    <Book left={<DiaryWritePage />} right={<FlowerList />} />
    </>
    );
}

export default ShowDiaryWrite;