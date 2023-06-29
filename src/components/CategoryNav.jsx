import React, { memo, useState } from 'react';
import { Category, Search } from '../styled/categoryNavStyle';
import { FiSearch } from 'react-icons/fi';
const CategoryNav = memo(({ onListClick, onList, isShowSearchBox }) => {
    return (
        <Category>
            <li onClick={() => onListClick(1, event)} className={onList === 1 ? 'on' : ''}>인기 콘텐츠</li>
            <li onClick={() => onListClick(2, event)} className={onList === 2 ? 'on' : ''}>전기차 소개</li>
            <li onClick={() => onListClick(3, event)} className={onList === 3 ? 'on' : ''}>슬기로운 전기차 여행</li>
            <li onClick={() => onListClick(4, event)} className={onList === 4 ? 'on' : ''}>충전 및 문제 대처법</li>
            <li onClick={() => onListClick(5, event)} className={onList === 5 ? 'on' : ''}>FAQ</li>
            <li onClick={() => onListClick(6, event)} className={onList === 6 ? 'on' : ''}>제주 전기차 충전소 찾기</li>
            <li onClick={() => onListClick(7, event)} className={onList === 7 ? 'on' : ''}>제주 전기차 뉴스</li>
            <Search onClick={isShowSearchBox} ><i><FiSearch /></i>검색</Search>
        </Category>
    );
});

export default CategoryNav;