import FlowerBoard from "../components/flowerList/FlowerBoard";
import Book from "../components/Book/Book";
import DoughnutChart from '../components/chart/DoughnutChart';
import LineChart from '../components/chart/LineChart';


const ShowFlowerList = () => {
    return (
        <>
<<<<<<< HEAD
            <Book left={<FlowerBoard />} right={<Chart />} />
=======
            <Book left={<FlowerList />} right={<div><DoughnutChart /></div>} />
>>>>>>> feature/diaryUpdate
        </>
    );
}

export default ShowFlowerList;