import React from "react"
import "../index.css"


const Button = (props) => {

    return (
        <div className="button__block">
            <button onClick={props.button} className="button">
               LODE MORE
             </button>
        </div>
    );
}

export default Button;
