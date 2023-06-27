import React, { memo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Inner, PopUp, PopUpLeft, PopUpRight } from '../styled/galleryStyle';
import dataList from '../assets/data.json'
import { useNavigate } from 'react-router-dom';
import Contents from '../components/Contents';
import { GrClose } from 'react-icons/gr';
const Main = memo(() => {
    const [data, setData] = useState([dataList]);
    const [ispopUpOpen, setIspopUpOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    // console.log(data);
    const navigate = useNavigate();
    const openPopup = (item) => {
        setIspopUpOpen(true);
        setSelectedIndex(item);
    }
    const closePopup = () => {
        setIspopUpOpen(false);
    }
    return (
        <>
            <div className='header'>
                <Inner>
                    <h1><img src="./images/logo_b.png" alt="" /></h1>
                </Inner>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src="./images/main_slider_1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/main_slider_2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/main_slider_3.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <Contents dataList={dataList} openPopup={openPopup} />
            {
                ispopUpOpen && <PopUp>
                    <PopUpLeft>
                        <img src={selectedIndex.img[0]} alt="" />
                    </PopUpLeft>
                    <PopUpRight>
                        <div className="right_top">
                            <p className='title1'>{selectedIndex.category}</p>
                            {
                                selectedIndex && selectedIndex.MainTitle.split('\n').map((splitItem, index) => (
                                    <p className='title2' key={index}>{splitItem}</p>
                                ))
                            }
                            <div><button>♥</button><span>{selectedIndex.like}</span></div>
                        </div>
                        <div className="tagBox">
                            {
                                selectedIndex && selectedIndex.hashTag.split('#').map((splitItem, index) => (
                                    <span key={index}>#{splitItem}</span>
                                ))
                            }
                        </div>
                        <div className="right_bottom">
                            <div className="share">
                                <img src="./images/icon_share.png" alt="" />
                                <span>공유하기</span>
                            </div>
                            <div className='sns'>
                                <img src="./images/icon_blog.png" alt="" />
                                <img src="./images/icon_facebook.png" alt="" />
                                <img src="./images/icon_kakao.png" alt="" />
                            </div>
                        </div>
                        <div><i className='popUpCloseBtn' onClick={closePopup}><GrClose /></i></div>
                    </PopUpRight>
                </PopUp>
            }
        </>
    );
});

export default Main;