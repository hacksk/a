import React from "react";
import { Carousel } from "react-responsive-carousel";



export default () => (
  <Carousel autoPlay>
    <div>
      {/* <Accessory/> */}

      <img className="img" alt="#" src="https://images.pexels.com/photos/1191109/pexels-photo-1191109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      {/* <Accessory1/> */}
      <img alt="#" src="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      {/* <Accessory2/> */}
      <img alt="#" src="https://images.pexels.com/photos/2317519/pexels-photo-2317519.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="#" src="https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <p className="legend">Legend 4</p>
    </div>
     </Carousel>
);
