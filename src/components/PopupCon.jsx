import React, { memo } from 'react';
import { PopUp, PopUpLeft, PopUpRight } from '../styled/popUpStyle';
import { useSelector, useDispatch } from 'react-redux';
import { isLikeToggle, isPopupToggle } from '../store/modules/stateSlice';
import { GrClose } from 'react-icons/gr';
import PopupSlide from './PopupSlide';

const PopupCon = memo(() => {
    const { selectContent, likeCounter } = useSelector(state => state.stateR);
    const dispatch = useDispatch()
    const handleIsPopupToggle = () => dispatch(isPopupToggle())
    const toggleLike = () => dispatch(isLikeToggle())
    const { img, category, MainTitle, hashTag, like } = selectContent
    return (
        <PopUp>
            <PopUpLeft>
                <PopupSlide />
            </PopUpLeft>
            <PopUpRight>
                <div className="right_top">
                    <p className='title1'>{category}</p>
                    {
                        MainTitle.split('\n').map((item, index) => (
                            <p className='title2' key={index}>{item}</p>
                        ))
                    }
                    <div>
                        <button
                            onClick={toggleLike}
                            style={
                                {
                                    color: likeCounter % 2 == 0
                                        ? "white"
                                        : "red"
                                }
                            }
                        >
                            ♥
                        </button>
                        <span>{like}</span>
                    </div>
                </div>
                <div className="tagBox">
                    {
                        hashTag.split('#').map((item, index) => (
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
                <div onClick={handleIsPopupToggle}>
                    <i className='popUpCloseBtn'><GrClose /></i>
                </div>
            </PopUpRight>
        </PopUp>
    );
});

export default PopupCon;