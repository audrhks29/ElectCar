import React, { memo, useState } from 'react';
// import dataList from '../assets/data.json'
import Contents from '../components/Contents';
import PopupCon from '../components/PopupCon'
import MainArticle from '../styled/homeSlideStyle';
import { useAxios } from '../hooks/useAxios';
const Home = () => {
    const { state: dataList, error, loading } = useAxios("https://gist.githubusercontent.com/audrhks29/0dba858bf5babf58a2d0a9c61aae8ff0/raw/a45514e80116da97e81f3b76634c7f05499a9cef/data.json")
    console.log(dataList);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
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

            {dataList && <Contents dataList={dataList} openPopup={openPopup} />}
            {
                isPopUpOpen && <PopupCon selectedIndex={selectedIndex} closePopup={closePopup} />
            }
        </>
    );
};

export default Home;