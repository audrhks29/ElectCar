import React, { memo, useEffect } from 'react';
import { Category, Search } from '../styled/categoryNavStyle';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { isSearchBoxToggle } from '../store/modules/stateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { changeOnListNum, changeFilteredData } from '../store/modules/contentSlice';
const CategoryNav = memo(() => {
    const { contentData, onListNum, listItems } = useSelector(state => state.contentR)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeFilteredData())
    }, [onListNum, contentData])
    const changeListStyle = (num) => {
        dispatch(changeOnListNum(num))
        // if (onListNum === 1) {
        //     dispatch(changeFilteredData(contentData));
        // } else {
        //     const filter = contentData.filter(item => item.category === listItems[num])
        //     dispatch(changeFilteredData(filter));
        // }
    }
    const handleIsSearchBoxToggle = () => dispatch(isSearchBoxToggle());
    return (
        <Category>
            {
                listItems.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => changeListStyle(index + 1, item)}
                        className={onListNum === index + 1 ? 'on' : ''}
                    >
                        {item}
                    </li>
                ))
            }
            <li><Link to={'/noticeList'} >제주 전기차 뉴스</Link></li>
            <Search onClick={handleIsSearchBoxToggle}>
                <i><FiSearch /></i>검색
            </Search>
        </Category>
    );
});

export default CategoryNav;