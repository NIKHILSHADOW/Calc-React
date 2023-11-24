import { useContext } from "react";
import ButtonContext from "../../Context/ButtonContext";
import "./ButtonContainer.css";


function ButtonContainer() {

    const {add,changeState,handler} = useContext(ButtonContext);

    function myFunc(e){
        add(+(e.target.id))
    }

    function myFunc1(e){
        changeState(e.target.id);
    }

    function myFunc2(e){
        handler(e.target.id);
    }

    return (
        <>
            <div>
                <button id={1} onClick={e => myFunc(e)}>1</button>
                <button id={2} onClick={e => myFunc(e)}>2</button>
                <button id={3} onClick={e => myFunc(e)}>3</button>
            </div>
            <div>
                <button id={4} onClick={e => myFunc(e)}>4</button>
                <button id={5} onClick={e => myFunc(e)}>5</button>
                <button id={6} onClick={e => myFunc(e)}>6</button>
            </div>
            <div>
                <button id={7} onClick={e => myFunc(e)}>7</button>
                <button id={8} onClick={e => myFunc(e)}>8</button>
                <button id={9} onClick={e => myFunc(e)}>9</button>
            </div>
            <div>
                <button id={0} onClick={e => myFunc(e)}>0</button>
                <button id={"+"} onClick={e => myFunc1(e)}>+</button>
                <button id={"-"} onClick={e => myFunc1(e)}>-</button>
            </div>
            <div>
                <button id={"*"} onClick={e => myFunc1(e)}>*</button>
                <button id={"/"} onClick={e => myFunc1(e)}>/</button>
                <button id={"="} onClick={e => myFunc2(e)}>=</button>
            </div>
            <div>
                <button id={"AC"} onClick={e => myFunc2(e)}>AC</button>
                <button id={"Clr"} onClick={e => myFunc2(e)}>Clr</button>
                <button id={"Del"} onClick={e => myFunc2(e)}>Del</button>
            </div>
        </>
    )
}

export default ButtonContainer;