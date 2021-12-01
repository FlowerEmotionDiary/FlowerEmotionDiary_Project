import {Link} from "react-router-dom";

const MainPage = () => {
    return(
        <Link to={`/login`}>
            <h1>Hello</h1>
        </Link>
    );
}

export default MainPage;