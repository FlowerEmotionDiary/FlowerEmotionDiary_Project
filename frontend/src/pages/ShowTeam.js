import Team from "../components/Teampage/Team";

import Book from "../components/Book/Book";

const ShowTeam = () => {
    return (
        <>
            <Book left={<Team />} right={<Team />} />
        </>
    );
}

export default ShowTeam;