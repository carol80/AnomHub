
interface props {
    anomActive: boolean,
    setAnomActive: (anomActive: boolean)=> void
}

const NavBar = ({ anomActive, setAnomActive }: props) => {
    return (
            <div className="navbar container-fluid bg-black bg-gradient text-white p-4">
            {!anomActive ? (
                <h1 className="text-start">STUDY<span className="badge text-bg-secondary">Hub</span></h1>
            ) : (
                <>
                    <h1 className="text-end">AN0M<span className="badge text-bg-warning">Hub</span></h1>
                    <button className="btn btn-outline-danger" onClick={() => setAnomActive(false)}>LogOut</button>
                </>
            )}
            </div>
    )
}

export default NavBar;