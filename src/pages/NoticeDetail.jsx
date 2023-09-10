import React, { memo, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import { useParams } from 'react-router-dom';
import { NoticeDetailList } from '../styled/noticeDetailStyle';
import NoticeTopPined from '../components/NoticeTopPined';
import { useSelector } from 'react-redux';
const NoticeDetail = memo(() => {
    const { noticeData } = useSelector(state => state.noticeR);
    const { noticeID } = useParams();
    const selectedData = noticeData.find(item => item.id === Number(noticeID));
    // localStorage.setItem('selectedData', JSON.stringify(selectedData));

    // // 데이터 검색
    // const storedData = JSON.parse(localStorage.getItem('selectedData'));
    console.log(`noticeID = ${noticeID}`);
    console.log(`parseID = ${noticeID}`);
    console.log(selectedData);
    const { title, date, img, desc } = selectedData
    return (
        <NoticeDetailList>
            <div className="inner">
                <NoticeTopPined />
                <div className="content">
                    <strong>{title}</strong>
                    <span>{date}</span>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
                    >
                        {
                            img.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img src={item} alt="" />
                                </SwiperSlide>)
                            )
                        }
                    </Swiper>
                    {
                        desc.split('\n').map((item, index) => (
                            <p key={index}>{item}</p>
                        ))
                    }
                </div>
            </div>
        </NoticeDetailList>
    );
});

export default NoticeDetail;