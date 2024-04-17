import { Link, useRouteError } from "react-router-dom";
import DocumentTitle from '../Title/Title'
export default function ErrorPage() {
    DocumentTitle("Error")
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="mt-32 space-y-5">
            <h1 className="text-center text-5xl font-bold">Oops!</h1>
            <p className="text-center text-2xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-center text-2xl">
                <i>{error.statusText || error.message}</i>
            </p>
            <div className="flex justify-center">
                <Link to="/"><button className="btn bg-blue-700 text-white px-8">Home</button></Link>
            </div>
        </div>
    );
}