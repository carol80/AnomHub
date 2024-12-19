import { useEffect, useState } from "react";
import Loader from "../Loader";
import { Link } from "react-router";
import Channels from "./Channels";

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
            <div className="d-flex justify-content-end">
                <Link to="/AnomHub/">
                    <button className="btn btn-outline-danger justify-content-sm-end text-danger m-3" style={{ borderRadius: "50rem" }}>X</button>
                </Link>
            </div>

            {showLoader ? <Loader /> : <Channels /> }
        </>

    )
}

export default ChatSpace;