import FlowerList from "../components/FlowerList";
import Book from "../components/Book/Book";
import LoginForm from "../login/LoginForm";

const ShowLoginPage = () => {
    return (
        <>
            <Book left={<LoginForm />} right={<FlowerList />} />
        </>
    );
}

export default ShowLoginPage;