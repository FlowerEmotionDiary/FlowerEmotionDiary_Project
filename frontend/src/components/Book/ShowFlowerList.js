import FlowerListPage from "../../pages/FlowerListPage";
import Book from "./Book";

const ShowFlowerList = () => {
    return (
    <>
    <Book left={<FlowerListPage />} right={<FlowerListPage />} />
    </>
    );
}

export default ShowFlowerList;