import React, { memo, useEffect, useState } from 'react';
import Contents from '../components/Contents';
import PopupCon from '../components/PopupCon'
import MainArticle from '../styled/homeSlideStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getContentData } from '../store/modules/contentSlice';
const Home = () => {
    const { popupState } = useSelector(state => state.stateR);
    const { contentData } = useSelector(state => state.contentR);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContentData())
    }, [])
    return (
        <>
            <MainArticle />
            {contentData && <Contents />}
            {popupState && <PopupCon />}
        </>
    );
};

export default Home;