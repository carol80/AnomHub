import { useEffect, useState } from "react";
import Loader from "../Loader";
import { Link } from "react-router";

const ChatSpace = () => {
    let [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLoader(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <>
            <Link to="/AnomHub/">
                <button className="btn btn-outline-secondary text-white m-1">Close App </button>
            </Link>


            { showLoader ? <Loader /> :
                <h1 className="text-warning text-center">Welcome to ChatSpace!!!!!!!</h1>
            }
        </>

    )
}

export default ChatSpace;