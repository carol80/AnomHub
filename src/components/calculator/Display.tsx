interface props { 
    displayEquation: string
}

const Display = ({ displayEquation }: props) => {
    
    return  (
        <span className="p-4 text-bg-secondary text-white text-end">{displayEquation}</span>
    )
}

export default Display;