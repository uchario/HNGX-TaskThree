import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return(
        <div>
            <h1>Error</h1>
            <p>{error}</p>
            <Link to={`..`} relative="path">Go back</Link>
        </div>
    );
}

export default Error;