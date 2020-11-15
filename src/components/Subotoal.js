import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subotoal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items):
                            <strong>0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order countains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Chechout</button>
        </div>
    )
}

export default Subotoal;
