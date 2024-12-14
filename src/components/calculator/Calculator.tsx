import { useEffect, useState } from "react";

import Display from "./Display"
import Digits from "./Digits"


interface props {
    setAnomActive: (anomActive: boolean) => void
}


const Calculator = ({ setAnomActive }: props) => {
    let [calcValue, setCalcValue] = useState("");
    let [displayEquation, setDisplayEquation] = useState(" ");
    let [brackets, setBrackets] = useState(true);

    useEffect(() => {
        if (calcValue === "()") {
            if (brackets) {
                setBrackets(false)
                setDisplayEquation(displayEquation + "(")
                return;
            }
            setBrackets(true)
            setDisplayEquation(displayEquation + ")")
        } else if (calcValue === "=") {
            if (displayEquation.trim() === import.meta.env.VITE_ANOM_SECRET_KEY) {
                setAnomActive(true);
            }
            if (displayEquation[displayEquation.length - 1] !== ")" && Number.isNaN(parseInt(displayEquation[displayEquation.length - 1]))) {
                alert("Invalid Equation!!");
                return;
            }
            setDisplayEquation(eval(displayEquation));
        } else if (calcValue === "C") {
            setDisplayEquation(displayEquation.slice(0, displayEquation.length - 1));
        } else if (calcValue === "AC") {
            setDisplayEquation("")
        } else {
            setDisplayEquation(displayEquation + calcValue);
        }
        setCalcValue("");

    }, [calcValue]);

    return (
        <>
            <div className="position-absolute top-50 start-50 translate-middle d-grid" style={{ width: "100%", height: "70%" }}>
                <Display displayEquation={displayEquation} />
                <Digits setCalcValue={setCalcValue} />
            </div>
        </>
    )
}

export default Calculator;