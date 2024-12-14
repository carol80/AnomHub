
interface props {
    anomActive: boolean
}

const NavBar = ({ anomActive }: props) =>{
    return (
        <>
            { !anomActive ? (
                <h1 className="text-center bg-black bg-gradient text-white p-4">STUDY<span className="badge text-bg-secondary">Hub</span></h1>
            ): (
                <h1 className="text-center bg-black bg-gradient text-white p-4">AN0M<span className="badge text-bg-warning">Hub</span></h1>
            )}
        </>
    )
}

export default NavBar;