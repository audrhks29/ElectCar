import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import { useSelector } from "react-redux"
SwiperCore.use([Navigation, Pagination, Autoplay]) // Swiper
const PopupSlide = () => {
    const { selectContent } = useSelector(state => state.stateR);
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            {
                selectContent.img.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <img src={item} alt="" />
                    </SwiperSlide>))
            }
        </Swiper>
    );
};

export default PopupSlide;