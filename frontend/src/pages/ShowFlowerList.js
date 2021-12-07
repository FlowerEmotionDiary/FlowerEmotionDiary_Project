import FlowerList from "../components/FlowerList";
import Book from "../components/Book/Book";
import Chart from '../components/chart/Chart';


const ShowFlowerList = () => {
    return (
        <>
            <Book left={<FlowerList />} right={<Chart />} />
        </>
    );
}

export default ShowFlowerList;