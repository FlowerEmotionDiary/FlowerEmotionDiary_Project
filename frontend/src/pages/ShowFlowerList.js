import FlowerList from "../components/flowerList/FlowerList";
import Book from "../components/Book/Book";
import DoughnutChart from '../components/chart/DoughnutChart';
import LineChart from '../components/chart/LineChart';


const ShowFlowerList = () => {
    return (
        <>
            <Book left={<FlowerList />} right={<div><LineChart /><DoughnutChart /></div>} />
        </>
    );
}

export default ShowFlowerList;