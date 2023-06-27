import React, { memo, useState } from 'react';
import { Inner, ItemList } from '../styled/galleryStyle';
import CategoryNav from '../pages/CategoryNav';

const Contents = memo(({ dataList, openPopup }) => {
    const [data, setData] = useState(dataList);
    const [filteredData, setFilteredData] = useState(dataList);
    const [onList, setOnList] = useState(1);
    const [onListText, setOnListText] = useState(null);
    const [inputText, setInputText] = useState('');

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
    console.log(dataList.filter(item => item.MainTitle === onListText));
    const onChange = (e) => {
        const inputValue = e.target.value;
        setInputText(inputValue);
        if (onListText === "인기 콘텐츠") {
            setFilteredData(data.filter(item => item.MainTitle.includes(inputValue)));
        } else {
            setFilteredData(data.filter(item => item.MainTitle.includes(inputValue) && item.category === onListText));
        }
    };

    return (
        <div className='contents'>
            <Inner>
                <h4>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h4>
                <input type="text" value={inputText} onChange={onChange} placeholder='검색어를 입력하세요' />
                <CategoryNav dataList={dataList} onListClick={onListClick} onList={onList} />
                <ItemList>
                    {filteredData.map((item, index) => (
                        <li key={index}>
                            <img src={item.coverImg} alt="" onClick={() => openPopup(item)} />
                        </li>
                    ))}
                </ItemList>
            </Inner>
        </div>
    );
});

export default Contents;
