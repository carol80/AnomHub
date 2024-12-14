
interface props{
    setCalcValue: (calcValue: string)=> void
}

const Digits = ({ setCalcValue }: props) => {

    return (
        <div className="inline bg-dark-subtle d-grid" style={{ width: "100%", height: "100%" }}>
            <div className="btn-group col-12 col-sm-12" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("C")}>C</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("()")}>()</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("%")}>%</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("/")}>/</button>
            </div>
            <div className="btn-group col-12 col-sm-12" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("7")}>7</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("8")}>8</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("9")}>9</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("*")}>X</button>
            </div>
            <div className="btn-group col-12 col-sm-12" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("4")}>4</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("5")}>5</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("6")}>6</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("-")}>-</button>
            </div>
            <div className="btn-group col-12 col-sm-12" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("1")}>1</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("2")}>2</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("3")}>3</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("+")}>+</button>
            </div>
            <div className="btn-group col-12 col-sm-12" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("AC")}>AC</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("0")}>0</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue(".")}>.</button>
                <button type="button" className="btn btn-outline-secondary" style={{ width: "30px" }} onClick={() => setCalcValue("=")}>=</button>
            </div>
        </div>
    )
}

export default Digits;