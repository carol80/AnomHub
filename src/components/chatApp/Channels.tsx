import { useState } from "react";
import AnomPlaceholder from "../../assets/AnomPlaceholder.jpg";
import ChatChannel from "./ChatChannel";

const Channels = () => {
    const arr = [
        {
            "key": 1,
            "url": "https://img.freepik.com/free-photo/link-icon-front-side_187299-39505.jpg?t=st=1734588776~exp=1734592376~hmac=798fde19e9e71fdf762bb3cb75c6e890e8a495a16dcc2cf42277baebdd6c23db&w=740",
            "count": 14,
            "channelName": "hardcore Study material",
            "content": "Not for beginners..."
        },
        {
            "key": 2,
            "count": 4,
            "channelName": "Softcore Study material",
            "content": "Only for beginners..."
        },
        {
            "key": 3,
            "url": "https://static.vecteezy.com/system/resources/thumbnails/020/630/549/small_2x/cheerful-chicken-mascot-funny-logo-style-vector.jpg",
            "count": 69,
            "channelName": "beast material",
            "content": "Cute kutty..."
        },
        {
            "key": 4,
            "url": "https://static.vecteezy.com/system/resources/previews/008/215/366/non_2x/funny-funky-monkey-line-pop-art-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg",
            "count": 88,
            "channelName": "Ancestor material",
            "content": "Rise in the planet of apes..."
        },
        {
            "key": 5,
            "count": 96,
            "channelName": "Business material",
            "content": "My buisness is my buisness..."
        }
    ]

    const [openChat, setOpenChat] = useState(true);
    const [ItemKey, setKey] = useState(0);
    const [ChannelName, setChannelName] = useState("");

    const handleClick = (ItemKey:number, channelName:string) => {
        setOpenChat(false);
        setKey(ItemKey);
        setChannelName(channelName);
    }


    return (
        <>
            {openChat ? (
                <ul className="list-group">
                    {arr.map((element) => (
                        <li key={element.key} className="list-group-item d-flex justify-content-between bg-transparent border-secondary-subtle align-items-start" onClick={() => handleClick(element.key, element.channelName)}>
                            <img src={element.url ? element.url : AnomPlaceholder} width={65} height={65} alt="Chat" style={{ borderRadius: 50 }} />
                            <div className="ms-2 me-auto text-white">
                                <div className="fw-bold text-warning">{element.channelName}</div>
                                {element.content}
                            </div>
                            <span className="badge text-bg-primary rounded-pill">{element.count}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <ChatChannel ItemKey={ItemKey} channelName={ChannelName}/>
            )}
        </>
    )
}

export default Channels;