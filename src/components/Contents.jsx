import React, { useEffect } from 'react';
import { Inner } from '../styled/homeStyle';
import { useDispatch, useSelector } from 'react-redux';
import { isPopupToggle } from '../store/modules/stateSlice';
import { changeSearchedData, changeSlicedData, increaseItemAmount } from '../store/modules/contentSlice';
import { onChangeKeyword } from '../store/modules/searchSlice';
import { SearchBox, ItemList } from '../styled/contentsStyle';
import { FiPlus, FiSearch } from 'react-icons/fi';
import CategoryNav from './CategoryNav';
const Contents = () => {
    const { itemAmount, filteredData, slicedData, onListNum } = useSelector(state => state.contentR)
    const { searchBoxState } = useSelector(state => state.stateR)
    const { keywords } = useSelector(state => state.searchR)
    const dispatch = useDispatch();
    useEffect(() => {
        if (keywords) dispatch(changeSearchedData(keywords))
        else dispatch(changeSlicedData(filteredData.slice(0, itemAmount)))
    }, [filteredData, onListNum, itemAmount])
    const handleIsPopupToggle = (item) => dispatch(isPopupToggle(item));
    const handleIncreaseItemAmount = () => dispatch(increaseItemAmount());
    const onSubmit = (e) => e.preventDefault()
    const onChange = (e) => dispatch(onChangeKeyword(e.target.value));
    const onSearch = () => dispatch(changeSearchedData(keywords))
    return (
        <div className='contents' style={{ paddingTop: 40, paddingBottom: 40 }}>
            <Inner>
                <h4>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h4>
                <CategoryNav />
                {
                    searchBoxState && <SearchBox onSubmit={onSubmit}>
                        <input type="text" value={keywords} onChange={onChange} placeholder='검색어를 입력하세요' />
                        <button type="submit" onClick={onSearch}><i><FiSearch /></i></button>
                    </SearchBox>
                }
                <ItemList>
                    {
                        slicedData.map((item, index) => (
                            <li key={index}>
                                <img
                                    src={item.coverImg}
                                    alt=""
                                    onClick={() => handleIsPopupToggle(item)}
                                />
                            </li>
                        ))
                    }
                    {
                        itemAmount <= slicedData.length
                            ? <div
                                className="moreBtnWrap"
                                onClick={handleIncreaseItemAmount}
                            >
                                <i><FiPlus /></i>
                                <button>더보기</button>
                            </div>
                            : ""
                    }
                </ItemList>
            </Inner>
        </div>
    );
};

export default Contents;
