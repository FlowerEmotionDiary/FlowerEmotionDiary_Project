import DiaryWritePage from "../../pages/DiaryWritePage";
import FlowerListPage from "../../pages/FlowerListPage";
import Book from "./Book";

const ShowDiaryWrite = () => {
    return (
    <>
    <Book left={<DiaryWritePage />} right={<FlowerListPage />} />
    </>
    );
}

export default ShowDiaryWrite;