
interface props{
    setCalcValue: (calcValue: string)=> void
}

const Digits = ({ setCalcValue }: props) => {

    return (
        <div className="inline bg-secondary text-dark-subtle d-grid"  style={{ backgroundColor: '#000', minHeight: '100%', minWidth: '100%', backgroundImage: 'linear-gradient(to top, #000, #333)', padding: "0.5rem" }}>
            <div className="btn-group col-12 col-sm-12" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-secondary bg-warning text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("C")}>C</button>
                <button type="button" className="btn btn-outline-secondary bg-info text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("()")}>()</button>
                <button type="button" className="btn btn-outline-secondary bg-info text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("%")}>%</button>
                <button type="button" className="btn btn-outline-secondary bg-info text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("/")}>/</button>
            </div>
            <div className="btn-group col-12 col-sm-12" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-secondary bg-secondary text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("7")}>7</button>
                <button type="button" className="btn btn-outline-secondary bg-secondary text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("8")}>8</button>
                <button type="button" className="btn btn-outline-secondary bg-secondary text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("9")}>9</button>
                <button type="button" className="btn btn-outline-secondary bg-info text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("*")}>X</button>
            </div>
            <div className="btn-group col-12 col-sm-12" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-secondary bg-secondary text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("4")}>4</button>
                <button type="button" className="btn btn-outline-secondary bg-secondary text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("5")}>5</button>
                <button type="button" className="btn btn-outline-secondary bg-secondary text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("6")}>6</button>
                <button type="button" className="btn btn-outline-secondary bg-info text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("-")}>-</button>
            </div>
            <div className="btn-group col-12 col-sm-12" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-secondary bg-secondary text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("1")}>1</button>
                <button type="button" className="btn btn-outline-secondary bg-secondary text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("2")}>2</button>
                <button type="button" className="btn btn-outline-secondary bg-secondary text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("3")}>3</button>
                <button type="button" className="btn btn-outline-secondary bg-info text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("+")}>+</button>
            </div>
            <div className="btn-group col-12 col-sm-12" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-secondary bg-warning text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("AC")}>AC</button>
                <button type="button" className="btn btn-outline-secondary bg-secondary text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("0")}>0</button>
                <button type="button" className="btn btn-outline-secondary bg-info text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue(".")}>.</button>
                <button type="button" className="btn btn-outline-secondary bg-light text-dark m-1" style={{ width: "30px", borderRadius: "50rem" }} onClick={() => setCalcValue("=")}>=</button>
            </div>
        </div>
    )
}

export default Digits;