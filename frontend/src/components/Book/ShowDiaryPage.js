import DiaryPage from "../../pages/DiaryPage";
import FlowerListPage from "../../pages/FlowerListPage";
import Book from "./Book";

const ShowDiaryPage = () => {
    return (
    <>
    <Book left={<DiaryPage />} right={<FlowerListPage />} />
    </>
    );
}

export default ShowDiaryPage;