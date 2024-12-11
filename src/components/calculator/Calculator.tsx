import { useEffect, useState } from "react";

import Display from "./Display"
import Digits from "./Digits"
import ChatSpace from "../chatApp/ChatSpace";

const SECRET_KEY = "8085"

const Calculator = () => {
    let [calcValue, setCalcValue] = useState("");
    let [displayEquation, setDisplayEquation] = useState(" ");
    let [brackets, setBrackets] = useState(true);

    useEffect(() => {
        console.log(calcValue, brackets);
        if (calcValue === "()") {
            if (brackets) {
                setBrackets(false)
                setDisplayEquation(displayEquation + "(")
                return;
            }
            setBrackets(true)
            setDisplayEquation(displayEquation + ")")
        } else if (calcValue === "=") {
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

    }, [calcValue]);

    return (
        <>
            <div style={{ backgroundColor: '#000', minHeight: '100vh', backgroundImage: 'linear-gradient(to top, #000, #333)' }}>
                <h1 className="text-center bg-black bg-gradient text-white p-4">AN0M<span className="badge text-bg-warning">Hub</span></h1>

                {SECRET_KEY == displayEquation ? <ChatSpace /> : (
                    <div className="position-absolute top-50 start-50 translate-middle d-grid" style={{ width: "30%" }}>
                        <Display displayEquation={displayEquation} />
                        <Digits setCalcValue={setCalcValue} />
                    </div>
                )
                }
            </div>
        </>
    )
}

export default Calculator;