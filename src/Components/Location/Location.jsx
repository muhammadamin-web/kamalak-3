/* eslint-disable react/no-unescaped-entities */
import universal from "../../assets/images/location.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Location = () => {
  useEffect(() => {
    AOS.init({

      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div className="location_card_left" data-aos="fade-right" data-aos-offset="-200">
            <img src={universal} alt="" className="location_img" />
          </div>
          <div className="location_card1" data-aos="fade-left" data-aos-offset="-200">
            <h3 className="location_title"> Loyiha joylashuvi</h3>
            <p className="location_text">
            Kamalak turar-joy majmuasi Samarqandning jadal rivojlanayotgan hududida qurilmoqda va uning joylashuvi aholiga yuqori darajadagi qulayliklarni taqdim etadi. 

            </p>
            <p className="location_text">
            Majmua shahar markaziga yaqin bo‘lib, shahar markazidagi asosiy infratuzilma obyektlariga tez va oson yetib borish imkonini beradi. 

            </p>
            <p className="location_text">
            Atrofdagi hudud ham tez sur’atlar bilan rivojlanib bormoqda, kelajakda yangi infratuzilma obyektlari va xizmat ko‘rsatish maskanlarining barpo etilishi kutilmoqda. Bu esa Kamalak'ni nafaqat qulay yashash maskani, balki uzoq muddatli sarmoya uchun ham foydali joyga aylantiradi.          </p>
          </div>
          <div className="location_card2" data-aos="fade-left" data-aos-offset="-200">
            <p className="location_text2">
          <span> Kamalak </span> — oila bagʻrida tinch va totuv hayot kechirish uchun moʻljallangan 
            uylar. Har bir rezident uchun eng qulay imkoniyatlar taqdim etamiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
