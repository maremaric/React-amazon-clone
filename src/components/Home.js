import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
                    alt="" 
                />

                <div className="home__row">
                    <Product
                        id="123123123"
                        title="The lean startup"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                        rating={5}
                    />
                    <Product
                        id="234234234"
                        title="Kenwood kMix Stand Mixer for
                        Baking, Stylish Kitchen Mixer with
                        K-beater, Dough Hook and Whisk, 5
                        Litre Glass Bowl"
                        price={239.00}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="23686734234"
                        title="Kenwood kMix Stand Mixer for
                        Baking, Stylish Kitchen Mixer with
                        K-beater, Dough Hook and Whisk, 5
                        Litre Glass Bowl"
                        price={199.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                        rating={3}
                    />
                    <Product 
                        id="7897794234"
                        title="Kenwood kMix Stand Mixer for
                        Baking, Stylish Kitchen Mixer with
                        K-beater, Dough Hook and Whisk, 5
                        Litre Glass Bowl"
                        price={98.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="2348888884"
                        title="Kenwood kMix Stand Mixer for
                        Baking, Stylish Kitchen Mixer with
                        K-beater, Dough Hook and Whisk, 5
                        Litre Glass Bowl"
                        price={598.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="23111134"
                        title="Kenwood kMix Stand Mixer for
                        Baking, Stylish Kitchen Mixer with
                        K-beater, Dough Hook and Whisk, 5
                        Litre Glass Bowl"
                        price={1094.98}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
