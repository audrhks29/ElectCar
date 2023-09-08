import React, { useEffect, useState } from 'react';
import { Inner } from '../styled/homeStyle';
import { useDispatch, useSelector } from 'react-redux';
import { isPopupToggle } from '../store/modules/stateSlice';
import { changeCategory, increaseItemAmount } from '../store/modules/contentSlice';
import { onChangeKeyword } from '../store/modules/searchSlice';
import { SearchBox, ItemList } from '../styled/contentsStyle';
import { FiPlus, FiSearch } from 'react-icons/fi';
import CategoryNav from './CategoryNav';
const Contents = ({ dataList }) => {
    const { itemAmount, onListNum, onListText } = useSelector(state => state.contentR)
    const { searchBox } = useSelector(state => state.stateR)
    const { keywords } = useSelector(state => state.searchR)
    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState([]);
    // const [onList, setOnList] = useState(1);
    // const [onListText, setOnListText] = useState('인기 콘텐츠');
    useEffect(() => {
        setFilteredData(dataList)
    }, [dataList])
    const handleIsPopupToggle = (item) => dispatch(isPopupToggle(item))
    const handleIncreaseItemAmount = () => dispatch(increaseItemAmount())
    const onListClick = (num, event) => {
        // 리스트 클릭 시 카테고리 설정
        // setOnList(num);
        const value = event.target.textContent;
        // setOnListText(value);
        dispatch(changeCategory(value))
        if (onListText === "인기 콘텐츠") {
            setFilteredData(dataList);
        } else {
            setFilteredData(dataList.filter(item => item.category === onListText));
        }
    };
    const onChange = (e) => {
        const inputValue = e.target.value;
        dispatch(onChangeKeyword(inputValue))
    };
    const onSearch = () => {
        // 검색 시 카테고리 및 검색어에 맞는 데이터 출력
        if (onListText === "인기 콘텐츠") {
            setFilteredData(dataList.filter(
                item => item.MainTitle.includes(keywords)
            ));
        } else {
            setFilteredData(dataList.filter(
                item => item.MainTitle.includes(keywords)
                    && item.category === onListText)
            );
        }
    }
    const filteredItems = filteredData.slice(0, itemAmount);
    return (
        <div className='contents' style={{ paddingTop: 40, paddingBottom: 40 }}>
            <Inner>
                <h4>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h4>
                <CategoryNav dataList={dataList} onListClick={onListClick} />
                {
                    searchBox && <SearchBox>
                        <input type="text" value={keywords} onChange={onChange} placeholder='검색어를 입력하세요' />
                        <button type="button" onClick={onSearch}><i><FiSearch /></i></button>
                    </SearchBox>
                }
                <ItemList>
                    {
                        filteredItems.map((item, index) => (
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
                        itemAmount <= filteredData.length
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
