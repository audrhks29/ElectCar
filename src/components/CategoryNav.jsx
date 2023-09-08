import React, { memo } from 'react';
import { Category, Search } from '../styled/categoryNavStyle';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { isSearchBoxToggle } from '../store/modules/stateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, changeOnListNum } from '../store/modules/contentSlice';
const CategoryNav = memo(({ onList }) => {
    const { itemAmount, onListNum, onListText } = useSelector(state => state.contentR)
    const dispatch = useDispatch();
    const changeListStyle = (num, event) => {
        dispatch(changeCategory(event.target.textContent))
        dispatch(changeOnListNum(num))
    }
    const handleIsSearchBoxToggle = () => dispatch(isSearchBoxToggle());
    return (
        <Category>
            <li onClick={() => changeListStyle(1, event)} className={onListNum === 1 ? 'on' : ''}>인기 콘텐츠</li>
            <li onClick={() => changeListStyle(2, event)} className={onListNum === 2 ? 'on' : ''}>전기차 소개</li>
            <li onClick={() => changeListStyle(3, event)} className={onListNum === 3 ? 'on' : ''}>슬기로운 전기차 여행</li>
            <li onClick={() => changeListStyle(4, event)} className={onListNum === 4 ? 'on' : ''}>충전 및 문제 대처법</li>
            <li onClick={() => changeListStyle(5, event)} className={onListNum === 5 ? 'on' : ''}>FAQ</li>
            <li onClick={() => changeListStyle(6, event)} className={onListNum === 6 ? 'on' : ''}>제주 전기차 충전소 찾기</li>
            <li><Link to={'/noticeList'} >제주 전기차 뉴스</Link></li>
            <Search onClick={handleIsSearchBoxToggle}>
                <i><FiSearch /></i>검색
            </Search>
        </Category>
    );
});

export default CategoryNav;