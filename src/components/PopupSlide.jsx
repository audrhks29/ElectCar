import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper
const PopupSlide = ({ img }) => {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            {img.map(item => (
                <SwiperSlide><img src={item} alt="" /></SwiperSlide>))}
        </Swiper>
    );
};

export default PopupSlide;