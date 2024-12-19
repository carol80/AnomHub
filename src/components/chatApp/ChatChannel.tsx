

const ChatChannel = ({ ItemKey, channelName }) => {
    return (
        <>
            <div className="card text-center m-3">
                <div className="card-header">
                    <h4><b>#{channelName ? channelName : "GhostChannel"}</b></h4>
                </div>

                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>

                {/* position-absolute bottom-0 end-0 */}
                <div className="card-footer text-body-secondary input-group p-4">
                    <input type="text" className="form-control btn-outline-warning text-bg-secondary" placeholder="Type here ..." aria-label="Type here ..." aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary text-bg-warning" type="button" id="button-addon2">Send</button>
                </div>
            </div>


            <div className="card m-3">
                <div className="card-body --bs-secondary-bg-rgb">
                    <h1>Chat here bitchesss!!!!!!!</h1>
                </div>

                
            </div>
        </>
    )
}

export default ChatChannel;