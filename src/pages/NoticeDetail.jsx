import React, { memo, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react" // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import dataList from '../assets/newsData.json'
import { useParams } from 'react-router-dom';
import { NoticeDetailList } from '../styled/noticeDetailStyle';
import NoticeTopPined from '../components/NoticeTopPined';
const NoticeDetail = memo(() => {
    const { noticeID } = useParams();
    const parseID = parseInt(noticeID, 10)
    const [data, setData] = useState(dataList[parseID - 1]);
    const { title, date, img, desc } = data
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
                                <SwiperSlide key={index}><img src={item} alt="" /></SwiperSlide>)
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