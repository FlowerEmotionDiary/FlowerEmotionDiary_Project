import FlowerList from "../components/FlowerList";
import Book from "../components/book/Book";

const ShowFlowerList = () => {
    return (
    <>
    <Book left={<FlowerList />} right={<FlowerList />} />
    </>
    );
}

export default ShowFlowerList;