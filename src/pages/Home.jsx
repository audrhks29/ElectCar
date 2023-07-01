import React, { memo, useState } from 'react';
import dataList from '../assets/data.json'
import { useNavigate } from 'react-router-dom';
import Contents from '../components/Contents';
import PopupCon from '../components/PopupCon'
import MainArticle from '../styled/homeSlideStyle';
import { MainArticleTextBox } from '../styled/homeStyle';
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
            <MainArticle />

            <Contents dataList={dataList} openPopup={openPopup} />
            {
                isPopUpOpen && <PopupCon selectedIndex={selectedIndex} closePopup={closePopup} />
            }
        </>
    );
});

export default Home;