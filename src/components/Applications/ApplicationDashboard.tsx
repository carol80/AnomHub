import ChatApp from "./appLogo/ChatApp.svg";
import Chat from "./appLogo/Chat.png";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Loader from "../Loader";


const ApplicationDashboard = () => {

    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLoader(false);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            {showLoader ? <Loader /> : (
                <>
                    <div className="btn-group col-12 col-sm-12 p-3" role="group" aria-label="Basic example">
                        <Link to="/AnomHub/chat">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={Chat} width={65} height={65} alt="Chat" />
                            </button>
                        </Link>


                        <Link to="/AnomHub/chat2">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={ChatApp} width={65} height={65} alt="ChatApp" />
                            </button>
                        </Link>

                        <Link to="/AnomHub/chat">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={Chat} width={65} height={65} alt="Chat" />
                            </button>
                        </Link>

                        <Link to="/AnomHub/chat">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={ChatApp} width={65} height={65} alt="ChatApp" />
                            </button>
                        </Link>
                    </div>

                    <div className="btn-group col-12 col-sm-12 p-3" role="group" aria-label="Basic example">
                        <Link to="/AnomHub/chat2">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={ChatApp} width={65} height={65} alt="ChatApp" />
                            </button>
                        </Link>

                        <Link to="/AnomHub/chat">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={Chat} width={65} height={65} alt="Chat" />
                            </button>
                        </Link>

                        <Link to="/AnomHub/chat">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={ChatApp} width={65} height={65} alt="ChatApp" />
                            </button>
                        </Link>

                        <Link to="/AnomHub/chat">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={Chat} width={65} height={65} alt="Chat" />
                            </button>
                        </Link>
                    </div>

                    <div className="btn-group col-12 col-sm-12 p-3" role="group" aria-label="Basic example">
                        <Link to="/AnomHub/chat">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={Chat} width={65} height={65} alt="Chat" />
                            </button>
                        </Link>


                        <Link to="/AnomHub/chat2">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={ChatApp} width={65} height={65} alt="ChatApp" />
                            </button>
                        </Link>

                        <Link to="/AnomHub/chat">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={Chat} width={65} height={65} alt="Chat" />
                            </button>
                        </Link>

                        <Link to="/AnomHub/chat">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={ChatApp} width={65} height={65} alt="ChatApp" />
                            </button>
                        </Link>
                    </div>

                    <div className="btn-group col-12 col-sm-12 p-3" role="group" aria-label="Basic example">
                        <Link to="/AnomHub/chat2">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={ChatApp} width={65} height={65} alt="ChatApp" />
                            </button>
                        </Link>

                        <Link to="/AnomHub/chat">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={Chat} width={65} height={65} alt="Chat" />
                            </button>
                        </Link>

                        <Link to="/AnomHub/chat">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={ChatApp} width={65} height={65} alt="ChatApp" />
                            </button>
                        </Link>

                        <Link to="/AnomHub/chat">
                            <button type="button" className="btn btn-outline-secondary text-white m-1" >
                                <img src={Chat} width={65} height={65} alt="Chat" />
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </>
    )
}

export default ApplicationDashboard;