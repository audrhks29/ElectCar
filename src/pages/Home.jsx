import React, { memo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import dataList from '../assets/data.json'
import { MainArticle } from '../styled/homeStyle';
import { useNavigate } from 'react-router-dom';
import Contents from '../components/Contents';
import PopupCon from '../components/PopupCon'
const Home = memo(() => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();
    const openPopup = (item) => {
        setIsPopUpOpen(true);
        setSelectedIndex(item);
    }
    const closePopup = () => {
        setIsPopUpOpen(false);
    }
    return (
        <>
            <MainArticle>
                <Swiper className='swiper'
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src="./images/main_slider_1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/main_slider_2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/main_slider_3.jpg" alt="" /></SwiperSlide>
                </Swiper>
                <div className='mainArticleTextBox'>
                    <h2>탐라는 전기차</h2>
                    <h3>전기차와 함께 제주 여행을 준비하는 당신에게<br />
                        필요한 모든 정보와 꿀팁!</h3>
                </div>
            </MainArticle>
            <Contents dataList={dataList} openPopup={openPopup} />
            {
                isPopUpOpen && <PopupCon selectedIndex={selectedIndex} closePopup={closePopup} />
            }
        </>
    );
});

export default Home;