import React, { useState } from "react";
import {
  GiSaltShaker,
  GiCoffeeCup,
  GiOilDrum,
  GiBroccoli,
  GiWheat,
  GiMilkCarton,
  GiMeat,
  GiFruitBowl,
} from "react-icons/gi";
import { FaWineBottle } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../styles/denisha.css";

export default function PopularCategories() {
  const [db_activeCard, setDbActiveCard] = useState(null);

  const categories = [
    { name: "Salt", count: 98, icon: <GiSaltShaker /> },
    { name: "Coffee & Tea", count: 120, icon: <GiCoffeeCup /> },
    { name: "Oil", count: 250, icon: <GiOilDrum /> },
    { name: "Vinegar", count: 1180, icon: <FaWineBottle /> },
    { name: "Super Food", count: 540, icon: <GiBroccoli /> },
    { name: "Nuts & Seeds", count: 85, icon: <GiBroccoli /> },
    { name: "Wheat & Grains", count: 620, icon: <GiWheat /> },
    { name: "Milk & Dairy", count: 410, icon: <GiMilkCarton /> },
    { name: "Meat & Poultry", count: 300, icon: <GiMeat /> },
    { name: "Fruits & Vegetables", count: 920, icon: <GiFruitBowl /> },
  ];

  return (
    <div className="container">
      <div className="db_category_slider">
        <div className="db_header">
          <h2>Popular Category</h2>
          <div className="db_arrows swiper-nav">
            <button className="swiper-button-prev" />
            <button className="swiper-button-next" />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={"auto"}
          slidesPerGroup={1} // 👈 This ensures one slide moves at a time
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="db_slider"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.name} style={{ width: "auto" }}>
              <div
                className={`db_card ${
                  db_activeCard === cat.name ? "db_active_card" : ""
                }`}
                onClick={() => setDbActiveCard(cat.name)}
              >
                <div className="db_icon">{cat.icon}</div>
                <div className="db_name">{cat.name}</div>
                <div className="db_count">{cat.count} Products</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
