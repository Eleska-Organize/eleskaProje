import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const slides = [
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PCSP/DE_PCSP_all_hero_11910.jpg?v-910499353",
    title: "This is title 1",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PSSA/DE_PSSA_all_hero_10571.jpg?v-377603643",
    title: "This is title 2",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PDUT/DE_PDUT_all_hero_11734.png?v-124775118",
    title: "This is title 3",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PBOS/DE_PBOS_all_hero_11872.png?v-2113143995",
    title: "This is title 4",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PPON/DE_PPON_all_hero_11872.png?v1872079273",
    title: "This is title 5",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PMEA/DE_PMEA_all_hero_11910.jpg?v1167088276",
    title: "This is title 6",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PCON/DE_PCON_all_hero_11734.png?v1493403577",
    title: "This is title 7",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/EPCUR/DE_EPCUR_all_hero_9880.jpg?v752410959",
    title: "This is title 8",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/EPVEG/DE_EPVEG_all_hero_11910.jpg?v789189983",
    title: "This is title 9",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/EPORL/DE_EPORL_all_hero_9880.jpg?v916554548",
    title: "This is title 10",
  },
];

const CampaignSlider = () => {
  return (
    <div className="w-[60%] mx-auto my-5 ">
      <h1 className="text-center mb-5">Haftanın Enleri</h1>
      <Swiper
        effect="coverflow"
        spaceBetween={50}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_containe"
      >
        {slides.map((slide, index) => (
          <SwiperSlide  key={index}>
            <img src={slide.image} alt={slide.title} />
          </SwiperSlide>
        ))}
        <div >
          <div className="swiper-button-prev slider-arrow ">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default CampaignSlider;

// const sliderLeft = () => {
//   var slider = document.querySelector(".slider");
//   slider.scrollLeft = slider.scrollLeft - 300;
// };
// const sliderRight = () => {
//   var slider = document.querySelector(".slider");
//   slider.scrollLeft = slider.scrollLeft + 300;
// };
// // useEffect hook'unu kullanarak bir zamanlayıcı oluşturuyoruz
// useEffect(() => {
//   let isReversed = false;
//   // setInterval fonksiyonunu kullanarak 5 saniyede bir sliderRight işlevini çağırıyoruz
//   const interval = setInterval(() => {
//     if (sliderRight && !isReversed) {
//       sliderRight();
//       if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
//         // Sağa doğru sona gelindiğinde geri yönde kaydırmak için durumu değiştir
//         isReversed = true;
//       }
//     } else {
//       sliderLeft();
//       if (slider.scrollLeft <= 0) {
//         // Sola doğru sona gelindiğinde tekrar ileri yönde kaydırmak için durumu değiştir
//         isReversed = false;
//       }
//     }
//   }, 5000);

//   // useEffect hook'unun geri dönüş fonksiyonu aracılığıyla zamanlayıcıyı temizliyoruz
//   return () => {
//     clearInterval(interval);
//   };
// }, []);

// style={{ backgroundImage: `url(${slide.image})` }}
