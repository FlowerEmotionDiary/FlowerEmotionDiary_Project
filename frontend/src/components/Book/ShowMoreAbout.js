import FlowerListPage from "../../pages/FlowerListPage";
import MoreAboutPage from "../../pages/MoreAboutPage";
import Book from "./Book";

const ShowMoreAbout = () => {
    return (
    <>
    <Book left={<MoreAboutPage />} right={<FlowerListPage />} />
    </>
    );
}

export default ShowMoreAbout;