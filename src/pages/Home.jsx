import React, { memo, useState } from 'react';
import Contents from '../components/Contents';
import PopupCon from '../components/PopupCon'
import MainArticle from '../styled/homeSlideStyle';
import { useAxios } from '../hooks/useAxios';
import { useSelector } from 'react-redux';
const Home = () => {
    const { popupState } = useSelector(state => state.stateR);
    const { state: dataList, error, loading } = useAxios("https://gist.githubusercontent.com/audrhks29/0dba858bf5babf58a2d0a9c61aae8ff0/raw/a45514e80116da97e81f3b76634c7f05499a9cef/data.json")
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <MainArticle />

            {dataList && <Contents dataList={dataList} />}
            {
                popupState && <PopupCon selectedIndex={selectedIndex} />
            }
        </>
    );
};

export default Home;