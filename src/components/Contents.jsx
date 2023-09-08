import React, { useEffect, useState } from 'react';
import { Inner } from '../styled/homeStyle';
import { SearchBox, ItemList } from '../styled/contentsStyle';
import CategoryNav from './CategoryNav';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { isPopupToggle } from '../store/modules/stateSlice';
const Contents = ({ dataList }) => {
    const dispatch = useDispatch();
    const [filteredData, setFilteredData] = useState([]);
    const [onList, setOnList] = useState(1);
    const [onListText, setOnListText] = useState('인기 콘텐츠');
    const [inputText, setInputText] = useState('');
    const [ShowSearchBox, setShowSearchBox] = useState(false);
    useEffect(() => {
        setFilteredData(dataList)
    }, [dataList])
    const handleIsPopupToggle = (item) => {
        dispatch(isPopupToggle(item))
    }
    const onListClick = (num, event) => {
        setOnList(num);
        const value = event.target.textContent;
        setOnListText(value);
        if (value === "인기 콘텐츠") {
            setFilteredData(dataList);
        } else {
            setFilteredData(dataList.filter(item => item.category === value));
        }
    };
    const onChange = (e) => {
        const inputValue = e.target.value;
        setInputText(inputValue);
    };
    const onSearch = () => {
        if (onListText === "인기 콘텐츠") {
            setFilteredData(dataList.filter(item => item.MainTitle.includes(inputText)));
        } else {
            setFilteredData(dataList.filter(item => item.MainTitle.includes(inputText) && item.category === onListText));
        }
    }
    const isShowSearchBox = () => {
        setShowSearchBox(!ShowSearchBox);
    }

    const [ItemCount, setItemCount] = useState(6)// 보여질 아이템 갯수
    useEffect(() => {
        setItemCount(6);
    }, [filteredData])
    const ItemCountChange = () => {
        setItemCount(ItemCount + 6);
    }
    const filteredItems = filteredData.slice(0, ItemCount);
    return (
        <div className='contents' style={{ paddingTop: 40, paddingBottom: 40 }}>
            <Inner>
                <h4>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h4>
                <CategoryNav dataList={dataList} onListClick={onListClick} onList={onList} isShowSearchBox={isShowSearchBox} />
                {
                    ShowSearchBox && <SearchBox>
                        <input type="text" value={inputText} onChange={onChange} placeholder='검색어를 입력하세요' />
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
                        ItemCount <= filteredData.length
                            ? <div
                                className="moreBtnWrap"
                                onClick={ItemCountChange}
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
