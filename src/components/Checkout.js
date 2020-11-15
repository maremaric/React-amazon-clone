import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subotoal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/amazoncash/holi/Holi_Cash_EN_1024x180_20201015.jpg"
                    alt=""
                />

                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {/*BasketItem*/ }
                    {/*BasketItem*/ }
                    {/*BasketItem*/ }
                    {/*BasketItem*/ }
                    {/*BasketItem*/ }
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
