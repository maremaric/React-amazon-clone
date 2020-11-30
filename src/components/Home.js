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
                        title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-year Rescue Service (STGX2000400)"
                        price={1.33}
                        image="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL._AC_US240_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    <Product
                        id="234234234"
                        title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
                        price={1.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/31PTviHMeUL._AC_US160_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="23686734234"
                        title="Logitech C920x Pro HD Webcam"
                        price={1}
                        image="https://images-na.ssl-images-amazon.com/images/I/71iNwni9TsL._AC_UL270_SR270,270_.jpg"
                        rating={3}
                    />
                    <Product 
                        id="7897794234"
                        title="Google Wifi - Mesh Wifi System - Wifi Router Replacement - 3 Pack"
                        price={2}
                        image="https://m.media-amazon.com/images/I/61pPW3AWqsL._AC_UY218_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="2348888884"
                        title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 Full HD IPS Display, 8GB DDR4, 256GB NVMe SSD, Wi-Fi 6, Backlit Keyboard, Alexa Built-in, AN515-54-5812"
                        price={1.48}
                        image="https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_UL270_SR270,270_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="23111134"
                        title="Hisense 40-Inch 40H5500F Class H55 Series Android Smart TV with Voice Remote (2020 Model)"
                        price={1.77}
                        image="https://m.media-amazon.com/images/I/71ZRTMwE3NL._AC_UY218_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
