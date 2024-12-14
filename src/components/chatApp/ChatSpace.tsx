import { useEffect, useState } from "react";
import Loader from "../Loader";

const ChatSpace = () => {
    let [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLoader(false);
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <>
            { showLoader ? <Loader /> :
                <h1 className="text-warning text-center">Welcome to ChatSpace!!!!!!!</h1>
            }
        </>

    )
}

export default ChatSpace;