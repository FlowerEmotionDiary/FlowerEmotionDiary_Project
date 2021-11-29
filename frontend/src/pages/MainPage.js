import { loginCheckDB} from "../components/login/LoginValidation"
import {Link} from "react-router-dom";

const MainPage = () => {
    loginCheckDB();

    return(
        <Link to={`/login`}>
            <h1>Hello</h1>
        </Link>
    );
}

export default MainPage;