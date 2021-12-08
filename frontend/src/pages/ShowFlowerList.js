import FlowerBoard from "../components/flowerList/FlowerBoard";
import Book from "../components/Book/Book";
import Chart from '../components/chart/Chart';


const ShowFlowerList = () => {
    return (
        <>
            <Book left={<FlowerBoard />} right={<Chart />} />
        </>
    );
}

export default ShowFlowerList;