import React, { memo, useState } from 'react';

import { PopUp, PopUpLeft, PopUpRight } from '../styled/popUpStyle';

import { GrClose } from 'react-icons/gr';

import PopupSlide from './PopupSlide';

const PopupCon = memo(({ selectedIndex, closePopup }) => {
    const [isLike, setIsLike] = useState(selectedIndex.like);
    const [btnColor, setBtnColor] = useState(true);
    const toggleLike = () => {
        setBtnColor(!btnColor)
        if (btnColor) {
            setIsLike(isLike + 1);
        }
        else {
            setIsLike(isLike - 1);
        }
    }
    const { img, category, MainTitle, hashTag } = selectedIndex
    return (
        <PopUp>
            <PopUpLeft>
                <PopupSlide img={img} />
            </PopUpLeft>
            <PopUpRight>
                <div className="right_top">
                    <p className='title1'>{category}</p>
                    {
                        selectedIndex && MainTitle.split('\n').map((item, index) => (
                            <p className='title2' key={index}>{item}</p>
                        ))
                    }
                    <div><button onClick={toggleLike} style={{ color: btnColor ? "white" : "red" }}>♥</button><span>{isLike}</span></div>
                </div>
                <div className="tagBox">
                    {
                        selectedIndex && hashTag.split('#').map((item, index) => (
                            <span key={index}>#{item}</span>
                        ))
                    }
                </div>
                <div className="right_bottom">
                    <div className="share">
                        <img src="./images/icon_share.png" alt="" />
                        <span>공유하기</span>
                    </div>
                    <div className='sns'>
                        <img src="./images/icon_blog.png" alt="" />
                        <img src="./images/icon_facebook.png" alt="" />
                        <img src="./images/icon_kakao.png" alt="" />
                    </div>
                </div>
                <div><i className='popUpCloseBtn' onClick={closePopup}><GrClose /></i></div>
            </PopUpRight>
        </PopUp>
    );
});

export default PopupCon;