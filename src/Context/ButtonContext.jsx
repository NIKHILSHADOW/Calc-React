import { createContext } from "react";

const ButtonContext = createContext(
    {
        add : () => {},
        changeState : () => {},
        handler : () => {}
    }
)

export default ButtonContext;